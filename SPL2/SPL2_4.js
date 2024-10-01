function reverseString(string)
{
    var reversedString  = '';
    for(var i = string.length; i >= 0; i-- )
    {
        if((string[i] >= 'A' && string[i] <= 'Z') || (string[i] >= 'a' && string[i] <= 'z'))
            reversedString += string[i];
    }
    return reversedString;
}
console.log(reverseString("Ja12[]vas412crip512t"))