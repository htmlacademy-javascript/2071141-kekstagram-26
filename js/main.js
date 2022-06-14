const getRandomInteger = (min = 0, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {return false;}
};
getRandomInteger();

/*За основу взят материал из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

const getMaxStringLength = (stringToTest, maxLength) => stringToTest.length <= maxLength;
getMaxStringLength();
