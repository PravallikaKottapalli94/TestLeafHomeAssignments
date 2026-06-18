function anagram(string1, string2) 
{
    let modifiedString1 = string1.toLowerCase().replaceAll(" ", "").split("").sort().join("")
    let modifiedString2 = string2.toLowerCase().replaceAll(" ", "").split("").sort().join("")
    console.log(modifiedString1 === modifiedString2);
}
anagram("hello","world")
anagram("Listen","Silent")
anagram("listen","silent")
anagram("conversation","voices rant on")

