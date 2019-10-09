// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
    let strArray;

    if (str === "") {
        return "";
    }

    if (str.indexOf('-') !== -1) {
        strArray = str.split('-')
    } else {
        strArray = str.split('_')
    }

    let ccString = strArray[0];

    for (let i = 1; i < strArray.length; i++) {
        ccString += capitalize(strArray[i])
    }
    return ccString
}

let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}


toCamelCase("the-stealth-warrior");
