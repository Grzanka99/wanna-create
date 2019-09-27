const ask = require('./ask');

exports.setPrettierConfig = () => {
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
};
