document.addEventListener("DOMContentLoaded", function(event) {
    let allSystemElement = document.querySelector("main .up")
    if (allSystemElement !== null) {
        let cleanString = allSystemElement.innerHTML.replace("✅ &nbsp; ", "")
        let allSystemElement = allSystemElement.innerHTML = cleanString
    }
});
