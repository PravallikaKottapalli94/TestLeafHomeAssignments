function palindrome(word)
{
    let n = word.length-1
    let reversedWord = ""
    for(i=0;i<=n;i++)
    {
        reversedWord = reversedWord+word.charAt(n-i)
    }
    if(word == reversedWord)
        console.log(word+" is a Palindrome")       
    else
        console.log(word+" is not a Palindrome")
}
// Main Program
console.log("This Program prints if a given word is Palindrome or Not");
palindrome("pullup")
palindrome("hello")
palindrome("racecar")