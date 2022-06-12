const randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {return false;}
};
/*За основу взят материал из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

function maxStringLength(stringToTest, maxLength) {
  if (stringToTest.length <= maxLength) {
    return true;
  } else {return false;}
}

