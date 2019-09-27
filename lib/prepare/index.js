const fs = require('fs');
const { setPrettierConfig } = require('./setConfigs');

module.exports = async () => {
  const currDir = process.cwd();
  const prettierConfig = setPrettierConfig();

  fs.writeFile(`${currDir}/.prettierrc`, JSON.stringify(prettierConfig, null, 4), () => true);
};
