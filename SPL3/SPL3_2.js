function getFlattenArray(arr) {
    return arr.reduce((acc, value) => {
      if (Array.isArray(value)) {
        acc = acc.concat(getFlattenArray(value));
      } else {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  
  function getSumOfArray(arr) {
    let result = 0;
    arr.forEach((value) => {
      result += value;
    });
    return result;
  }
  
  const nestedArray = [1, [1, 2, [3, 4]], [2, 4]];
  
  const flattenArray = getFlattenArray(nestedArray);
  const sumOfArray = getSumOfArray(flattenArray);
  console.log(sumOfArray);
  