function removeCheckMark() {
    let cleanString = document.querySelector("main .up").innerHTML.replace("✅ &nbsp; ", "")
    document.querySelector("main .up").innerHTML = cleanString
}

function pollForCheckMark() {
    if(document.querySelector("main .up") !== null) {
        removeCheckMark()
    } else {
        setTimeout(pollForCheckMark, 500)
    }
}

pollForCheckMark()
