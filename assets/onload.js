window.onload = function() {
 let cleanString = document.querySelector(".up").innerHTML.replace("✅ &nbsp; ", "")
 document.querySelector(".up").innerHTML = cleanString
}