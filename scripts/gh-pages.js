/**
 * 作者：yeshengqiang
 * 时间：2021-05-11
 * 描述：upload to gh-pages
 */

const { del } = require('./utils');
const config = require('../config');
const ghPages = require('gh-pages');
const packageJson = require('../package.json');

const repo = packageJson.repository.url.replace(/.*?\+(.*)$/, '$1');

// deploy
ghPages.publish(
	config.docsDir,
	{
		repo,
		message: 'Auto-generated commit ' + new Date()
	},
	function(e) {
		del([`${config.docsDir}`]);
	}
);
