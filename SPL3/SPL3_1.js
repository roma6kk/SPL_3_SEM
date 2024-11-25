function getBasicArray(arr) {
    return arr.reduce((acc, value) => {
      if (Array.isArray(value)) {
        acc = acc.concat(getBasicArray(value));
      } else {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  
  let nestedArray = [1, [1, 2, [3, 4]], [2, 4]];
  console.log(getBasicArray(nestedArray));