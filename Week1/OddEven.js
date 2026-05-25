//functions
function oddEven(num)
{
    if (num == 0)
        console.log(+num+" is neither even nor odd")
    else if (num%2 == 0)
        console.log(+num+" is an even number")
    else
        console.log(+num+" is an odd number")
}
//MainProgram
console.log("This Program prints if a given number is Even OR Odd")
oddEven(4)
oddEven(9)
oddEven(0)