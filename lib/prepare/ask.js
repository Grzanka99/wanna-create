const rls = require('readline-sync');

module.exports = (question, defaultValue) => rls.question(`${question} (\x1b[32m${defaultValue}\x1b[0m): `, {
  defaultInput: defaultValue,
});
