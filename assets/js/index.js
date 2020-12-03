// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.
let h1 = document.querySelector("h1");
let header = h1.closest("header");
header.style.border = "5px solid black";


// If the .info section contains an .info-package, select all package-titles and give the title's previous element a border
let info = document.querySelector(".info");
let infoPackage = document.querySelector(".info-package");
if (info.contains(infoPackage)){
    let packageTitle = document.querySelectorAll(".package-title");
    packageTitle.forEach(el => el.previousElementSibling.style.border = "2px solid black");
}