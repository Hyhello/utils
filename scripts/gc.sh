#! /bin/bash
# 快速生成模板

set -e

FILE_PATH="$(pwd)/src"

# 所有分类集合
CLASS_LIST=()

# 分类名称
CLASSNAME=""

# 待创建的名称
NAME=$1

# 获取src下面所有的分类
function getClassList(){
    for dir in $FILE_PATH/*
    do
        if [[ -d $dir ]]; then
            CLASS_LIST[$start]=$(basename $dir);
            start=$start+1;
        fi
    done
}

# 自定义函数名称
function customName(){
    if [[ -n $NAME ]]; then return; fi;
    msg="请输入名称："
    if [[ -n $1 ]]; then
        msg=$1
    fi
    read -p "$msg" name
    if [[ -z $name ]]
    then
        customName "名称不能为空，请重新输入名称："
    fi
    NAME=$name
}

# 选择分类
function selectClass(){
    msg="请选择分类："
    if [[ $1 ]]; then
        msg="输入错误，请重新选择："
    fi
    echo -e "$msg";
    select class_name in ${CLASS_LIST[@]}
    do
        case $class_name in
            *)
                if [[ -z $class_name ]]; then
                    selectClass true
                    break
                fi
                ;;
        esac
        CLASSNAME=$class_name
        break;
    done
}

# 执行开始 -- start
# 确保脚本抛出遇到的错误
echo '按下 <CTRL-D> 退出'
# 获取所有分类集合
getClassList
# 选择分类
selectClass
echo "你选择分类名称是：${CLASSNAME}"
# 获取创建的名称
customName
echo "你创建的名称是：${NAME}"
# 生成文件
cd $FILE_PATH/$CLASSNAME
if [[ -d $NAME ]];
then
    echo "该方法已经存在，请检查~"
else

# 在当前分类下面修改index.ts (追加抛出)
echo "export { default as ${NAME} } from './${NAME}/${NAME}';" >> index.ts
echo "- [${NAME}](./${NAME})" >> README.md

# 创建文件夹
mkdir -p $NAME

cat > $NAME/$NAME.ts <<EOF
/**
 *
 * @returns
 * @example
 *
 */
export default function $NAME() {

}
EOF

cat > $NAME/$NAME.spec.ts <<EOF
import $NAME from './$NAME';

describe('#$NAME()', () => {
	test('$NAME test', () => {
		expect($NAME()).toEqual('return value');
	});
});
EOF

cat > $NAME/README.md <<EOF
#### #$NAME

\`\`\`javascript
utils.$NAME();
\`\`\`

函数的描述

- **引入版本**

    1.0.0

- **参数**

- **返回**

- **例子**

\`\`\`javascript

\`\`\`
EOF

fi

# 上一次所在目录，可来回切换
cd -

exit 0
