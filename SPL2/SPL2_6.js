function getArr3(arr1, arr2)
{
    var arr3 = [];
    for(var i = 0; i < arr1.length; i++)
    {
        var isMatches = false;
        for(var j = 0; j < arr2.length; j++)
        {
            if(arr2.includes(arr1[i]))
                isMatches = true;
        }
        if(!isMatches)
            arr3.push(arr1[i]);
        isMatches = false;
    }
    return arr3;
}
console.log(getArr3(["str1", "str2", "skip"], ["str3", "skip", "str4"]));