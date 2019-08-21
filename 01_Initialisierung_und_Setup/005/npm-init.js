const fs = require('fs');

fs.writeFileSync('LICENSE');
fs.writeFileSync('README.md');
fs.writeFileSync('.eslintrc.json');
fs.mkdirSync('test');

const GIT_USER = 'cleancoderocker';

module.exports = {
  name: prompt('Name', basename || package.name),
  version: prompt('Version', '0.0.1', package.version),
  description: prompt('Description', (description) => description),
  main: prompt('Entry point', 'index.js', (entryPoint) =>
    fs.writeFileSync(entryPoint, '')
  ),
  author: 'Philip Ackermann',
  license: 'MIT',
  scripts: {
    test: 'npx jest --verbose',
    lint: 'npx eslint test/*.js index.js',
    coverage: 'npx jest --coverage'
  },
  repository: {
    type: 'git',
    url: `git://github.com/${GIT_USER}/${basename}.git`
  },
  files: ['package.json', 'README.md', 'LICENSE', 'index.js'],
  bugs: { url: `https://github.com/${GIT_USER}/${basename}/issues` },
  homepage: `https://github.com/${GIT_USER}/${basename}`,
  keywords: prompt('Keywords', (keywords) => keywords.split(/\s+/)),
  devDependencies: {
    eslint: '*',
    jest: '*'
  }
};
