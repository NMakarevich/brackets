module.exports = function check(str, bracketsConfig) {
  let brConf = bracketsConfig.map(brackets => brackets.join(''));
  if (!str.length % 2) return false; 
  while(true) {
    let noMatchCount = 0;
    brConf.forEach(brackets => {
      if (!str.includes(brackets)) {
        noMatchCount++;
      }
      str = str.replace(brackets, '')
    })
    if (noMatchCount == brConf.length) break;
  } 
  return !str;
}
