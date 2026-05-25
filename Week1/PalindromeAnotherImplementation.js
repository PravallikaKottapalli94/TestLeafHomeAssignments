function palindrome(word) 
{
    let n = word.length - 1
    let isPalindrome = true
    for (let i = 0; i < word.length/2; i++) 
    {
        if (word.charAt(i) !== word.charAt(n - i)) 
            {
                isPalindrome = false
                break;
            }
    }  
    if (isPalindrome) 
        console.log(word + " is a Palindrome")
    else 
        console.log(word + " is not a Palindrome")
}
// Main Program
console.log("This Program prints if a given word is Palindrome or Not");
palindrome("pullup")
palindrome("hello")
palindrome("racecar")