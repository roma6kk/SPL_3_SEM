function getCubeSum(n)
{
    var sum = 0;
    for(var i = n; i > 0; i--)
    {
        sum += i*i*i;
    }
    return sum;
}
console.log(getCubeSum(3));