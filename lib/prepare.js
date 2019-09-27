const fs = require('fs');
const rls = require('readline-sync');

function ask(question, defaultValue) {
  return rls.question(`${question} (\x1b[32m${defaultValue}\x1b[0m): `, {
    defaultInput: defaultValue,
  });
}

function setPrettierConfig() {
  const config = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    arrowParens: 'always',
  };

  config.singleQuote = Boolean(ask('Use single quote?', config.singleQuote));
  config.trailingComma = ask('Use trailing comma?', config.trailingComma);
  config.printWidth = Number(ask('Print width', config.printWidth));
  config.arrowParens = ask('Use arrow parens?', config.arrowParens);

  return config;
}

module.exports = async () => {
  const currDir = process.cwd();
  const prettierConfig = setPrettierConfig();

  fs.writeFile(`${currDir}/.prettierrc`, JSON.stringify(prettierConfig, null, 4), () => true);
  console.log(prettierConfig);
};
