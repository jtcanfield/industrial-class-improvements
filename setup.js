var shell = require('shelljs');

const nodeVersion = shell.exec('node -v');
const versionNum = /(?:v)(.\d).(?:\d).(?:\d)/.exec(nodeVersion)[1];

if (!versionNum || parseInt(versionNum, 10) < 10) {
  shell.echo('ERROR: This Application Requires NodeJS v10 or later');
}

if (!shell.which('mongo')) {
  shell.echo('ERROR: mongo is needed');
  shell.exit(1);
};
