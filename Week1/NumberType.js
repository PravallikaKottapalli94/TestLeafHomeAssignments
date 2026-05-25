//functions
function numType(num)
{
    if (num < 0)
        console.log(+num+" is a Negative number" )
    else if (num > 0)
        console.log(+num+" is a Positive number" )
    else
        console.log("Number is 0")
}
//MainProgram
console.log("This Program prints if a given number is Positive OR Negative Or Zero")
numType(-5)
numType(8)
numType(0)
