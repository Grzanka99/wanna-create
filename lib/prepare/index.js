const fs = require('fs');
const { setPrettierConfig, setEslintConfig, setBabelConfig } = require('./setConfigs');

module.exports = (args) => {
  const currDir = process.cwd();

  if (args.includes('p')) {
    const prettierConfig = setPrettierConfig();
    fs.writeFile(`${currDir}/.prettierrc`, JSON.stringify(prettierConfig, null, 4), () => true);
  }

  if (args.includes('e')) {
    const eslintConfig = setEslintConfig();
    fs.writeFile(`${currDir}/.eslintrc`, JSON.stringify(eslintConfig, null, 4), () => true);
  }

  if (args.includes('b')) {
    const babelConfig = setBabelConfig();
    fs.writeFile(`${currDir}/.babelrc`, JSON.stringify(eslintConfig, null, 4), () => true);
  }
};
