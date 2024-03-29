# 更新日志

## [1.9.1](https://github.com/Hyhello/utils/compare/1.9.0...1.9.1) (2023-09-08)


### Bug Fixes

* 修复cookie.get获取问题，如token匹配到third-token中的token ([c8a247a](https://github.com/Hyhello/utils/commit/c8a247a125e691941da17da23ad3711a02d884a4))

# 1.9.0 (2023-05-27)


### Bug Fixes

* 优化isUrl正则表达式 ([ad4088a](https://github.com/Hyhello/utils/commit/ad4088a269268f7ff81f11fa65997bae01d13422))

### Features

* 新增cacheFn方法. ([b6bf1af](https://github.com/Hyhello/utils/commit/b6bf1afe5f020a7f39147ef2f3f1fd8d7b3e651e))
* 新增download方法. ([3eec802](https://github.com/Hyhello/utils/commit/3eec8025ad0c101d369d67c3a9cfc7370d23c8e0))
* on、off、once添加第三个参数options，实现多事件绑定。 ([ad31ef1](https://github.com/Hyhello/utils/commit/ad31ef1f293b94e64ac44f5ffc9765d1d041b023))

## [1.8.1](https://github.com/Hyhello/utils/compare/1.8.0...1.8.1) (2022-11-27)


### Bug Fixes

* 修复cookie.set方法设置时长失效问题 ([00f720f](https://github.com/Hyhello/utils/commit/00f720fd697f6f8c4fceaaaee582e90eef76a1c8))

# [1.8.0](https://github.com/Hyhello/utils/compare/1.7.0...1.8.0) (2022-11-26)


### Bug Fixes

* 修复split函数浮点数格式化达不到预期问题。 ([d0257d8](https://github.com/Hyhello/utils/commit/d0257d89b4d7331e1b9f5ca9e66e81513903f281))


### Features

* 分类Date新增beautifyTime方法。 ([ec22e25](https://github.com/Hyhello/utils/commit/ec22e25ab1f62b524ef25b91d35243b05b454669))
* 分类Math新增padZero方法。 ([459be7f](https://github.com/Hyhello/utils/commit/459be7fa3b2a42372fcb773d65eda310d9f9959a))

# [1.7.0](https://github.com/Hyhello/utils/compare/1.6.0...1.7.0) (2022-11-24)


### Bug Fixes

* 分类Array新增flatten扁平化函数添加depth参数 ([0dd3e1c](https://github.com/Hyhello/utils/commit/0dd3e1c97759d135010dcce1d190749dac52309a))


### Features

* 分类Array新增flatten扁平化函数 ([42a3e62](https://github.com/Hyhello/utils/commit/42a3e625c1755d0721ea50cbd5796e8d28a39a0a))
* 分类Math新增inRange方法。 ([e25be1c](https://github.com/Hyhello/utils/commit/e25be1c318c90029e64b53de51a69dfa375d7ad6))

# [1.6.0](https://github.com/Hyhello/utils/compare/1.5.0...1.6.0) (2022-10-27)


### Bug Fixes

* 修复Set方法返回值问题 ([7ebffa2](https://github.com/Hyhello/utils/commit/7ebffa22e3217923b83a7b821406899d2acb523b))


### Features

* Function 分类新增 pipe 方法 ([c1f3837](https://github.com/Hyhello/utils/commit/c1f38373e3640f03a8501df50432e04926bbbfee))
* Function 分类新增 curry 方法 ([b5e6971](https://github.com/Hyhello/utils/commit/b5e6971e95e694fcc54ca4d9e4fe2b19381a2885))

# [1.5.0](https://github.com/Hyhello/utils/compare/1.4.0...1.5.0) (2022-06-26)


### Features

* Dom 分类新增 getStyle、setStyle方法 ([c8fbbc1](https://github.com/Hyhello/utils/commit/c8fbbc16377b084381dd2e7ebf4e885519e88942))
* Store 分类 cookie 新增 remove方法 ([e31cd5e](https://github.com/Hyhello/utils/commit/e31cd5ed0fbbc6fa9c7b114f5231c060a3a224ad))
* String 分类新增 kebabCase方法 ([e292063](https://github.com/Hyhello/utils/commit/e292063945d43505b2efb8cfae39e611bcaa95b5))

# [1.4.0](https://github.com/Hyhello/utils/compare/1.3.3...1.4.0) (2022-06-24)


### Features

* store 添加remove方法，废弃clear方法 ([5106b5f](https://github.com/Hyhello/utils/commit/5106b5f16bb9ad2259f8f51d326bd59ea470a662))

# [1.3.3](https://github.com/Hyhello/utils/compare/1.3.2...1.3.3) (2022-05-18)


### Bug Fixes

* 修复toFixed在纯数字200等情况下会转换为2的情况 ([8ff9024](https://github.com/Hyhello/utils/commit/8ff902479fad36a7f04bb9da89946c53f3b4272e))

# [1.3.1](https://github.com/Hyhello/utils/compare/1.3.0...1.3.1) (2022-04-20)


### Bug Fixes

* 添加toSecret方法及添加types ([f43145d](https://github.com/Hyhello/utils/commit/f43145d2873319163217ea014c61a2178836f3be))

# [1.3.0](https://github.com/Hyhello/utils/compare/1.2.8...1.3.0) (2022-04-20)


### Bug Fixes

* 调整细节 ([e745049](https://github.com/Hyhello/utils/commit/e7450497ecb2882b509a752efe1ceb45665969b2))


### Features

* toSecret 字符串转"*"涉密方法 ([44e21c2](https://github.com/Hyhello/utils/commit/44e21c2de41c07ead245d599921cdae483da4fc2))

# [1.2.8](https://github.com/Hyhello/utils/compare/1.2.7...1.2.8) (2022-04-02)


### Bug Fixes

* 修改types 添加isString ([51ada0b](https://github.com/Hyhello/utils/commit/51ada0bbdf0295b4babe94c150d8de811645cd11))

# [1.2.6](https://github.com/Hyhello/utils/compare/1.2.0...1.2.6) (2022-03-11)


### Bug Fixes

* 修复debounce,throttle首次触发执行两次问题 ([8c2b0b4](https://github.com/Hyhello/utils/commit/8c2b0b4b4d06abc6fda0e5267ed6f0b1050d6340))
* 修改构建后文件注释版本问题 ([620b2eb](https://github.com/Hyhello/utils/commit/620b2ebb14fdf1764d552cc2ed1f520e67160269))