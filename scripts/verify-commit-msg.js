const chalk = require('chalk');
const msg = require('fs').readFileSync(process.argv[2], 'utf-8').trim();

const commitRE = /^Release\s+.{1,15}|((revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50})/

if (!commitRE.test(msg)) {
    console.log()
    console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
        chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
        chalk.red(`  You can also use ${chalk.cyan(`npm run commit`)} to interactively generate a commit message.\n`)
    )
    process.exit(1)
}
