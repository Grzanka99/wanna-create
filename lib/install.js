const { exec } = require('child_process');

module.exports = (args) => {
  if (args.includes('e')) {
    exec('yarn add eslint eslint-config-airbnb eslint-plugin-import');
  }
};
