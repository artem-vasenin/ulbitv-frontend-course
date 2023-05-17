const arrToStr = (arr) => arr.filter(i => Number.isInteger(i)).map(String);

module.exports = arrToStr;
