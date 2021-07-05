module.exports = function check(str, bracketsConfig) {
  let brConf = bracketsConfig.map(brackets => brackets.join(''));
  if (!str.length % 2) return false; 
  for (let i = 0; i <= str.length / 2 + 1; i++) {
    brConf.forEach(brackets => {
      if (str.includes(brackets)) {
        str = str.replace(brackets, '');
      }
    })
  } 
  return !str;
}
