// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.
let h1 = document.querySelector("h1");
let header = h1.closest("header");
// header.style.border = "5px solid black";


// If the .info section contains an .info-package, select all package-titles and give the title's previous element a border
let info = document.querySelector(".info");
let infoPackage = document.querySelector(".info-package");
if (info.contains(infoPackage)){
    let packageTitle = document.querySelectorAll(".package-title");
    packageTitle.forEach(el => el.previousElementSibling.style.border = "1px solid black");
}

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.
let labels = document.querySelectorAll("label");
labels.forEach(el => {
    if (el.matches(".mild")){
        el.style.borderBottom = "4px solid yellow";
    } else if (el.matches(".intense")){
        el.style.borderBottom = "4px solid orange";
    } else {
        el.style.borderBottom = "4px solid red";
    }
});

// Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children.
let navItems = Array.from(document.querySelector(".nav-list").children);
let siteMap = document.querySelector(".site-map");
navItems.forEach(el =>{
    let cloned = el.cloneNode(true);
    siteMap.appendChild(cloned);
});