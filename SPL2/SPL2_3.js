function getMid(array)
{
    var elements_sum = 0;
for(var i = 0; i < array.length; i++)
    elements_sum += array[i];
return elements_sum/ array.length;
}
var array = [1,2,3,4,5,6];
console.log(getMid(array));