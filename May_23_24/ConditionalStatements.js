function runTests(testType)
{
    switch (testType)
    {
        case "Smoke": case "smoke": case "SMOKE":
            return "Its a smoke test";
            break;
        case "Sanity": case "sanity": case "SANITY":
            return "Its a sanity test";
            break;
        case "Regression": case "regression": case "REGRESSION":
            return "Its a regression test";
            break;
        default:
            return "Invalid Test Type";
            break;
    }
}
function launchBrowser(browserName)
{
    if(browserName == "Chrome" || browserName == "chrome" || browserName == "CHROME")
        console.log("It's a "+browserName+" Browser and " + runTests("smoke"))
    else if(browserName == "Firefox" || browserName == "firefox" || browserName == "FIREFOX" || browserName == "FireFox")
        console.log("It's a "+browserName+" Browser")
    else if(browserName == "EDGE" || browserName == "Edge" || browserName == "edge") 
        console.log("It's a "+browserName+" Browser")
    else
        console.log("Invalid Browser")
}

// This function returns the name of the browser and Test Type that needs to be performed
launchBrowser("chrome")
// This function returns the name of the browser
launchBrowser("edge")
// This function returns the Test Type
console.log(runTests("smoke"))

