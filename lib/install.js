const { exec } = require('child_process');

module.exports = (args) => {
  if (args.includes('e')) {
    console.log('\x1b[33mInstalling ESLint\x1b[0m\n');
    exec(
      'yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react',
    );
  }

  if (args.includes('b')) {
    console.log('\x1b[33mInstalling BABEL\x1b[0m\n');
    exec(
      'yarn add babel-cli babel-plugin-transform-object-rest-spread babel-preset-env babel-node',
    );
  }
};
