function volume(length) {
    return function(width) {
      return function(height) {
        return length * width * height;
      };
    };
  }
  
  const volumeWithFixedLength = volume(10); 
  
  console.log(volumeWithFixedLength(5)(8)); 
  console.log(volumeWithFixedLength(6)(9)); 
  