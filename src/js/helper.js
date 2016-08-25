nl2br = function(str) {
  // console.log(typeof str);
  if (str === undefined) return null;
  str = str.replace(/\n/, "<br>");
  return str;
}