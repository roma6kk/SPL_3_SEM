function convertASCII(str) {
  let total1 = '';
  for (let i = 0; i < str.length; i++) {
    total1 += str.charCodeAt(i);
  }

  let total2 = total1.replace(/7/g, '1');

  let result = parseInt(total1) - parseInt(total2);

  return result;
}

console.log(convertASCII('ABC'));
