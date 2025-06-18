if(document.querySelector("main .up") !== null) {
    let cleanString = document.querySelector("main .up").innerHTML.replace("✅ &nbsp; ", "")
    document.querySelector("main .up").innerHTML = cleanString
}
