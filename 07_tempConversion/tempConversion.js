const ftoc = function(f) {
  return Math.round((f - 32) * (5/9));
};

const ctof = function(f) {
  return Math.round(((c * 9/5) + 32));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
