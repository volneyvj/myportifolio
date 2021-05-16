


document.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log("IronGenerator JS imported successfully!");
    },
    false
);


let showNavBar = false;

function showNav() {
    const links = document.querySelectorAll(".nav-links li");

    showNavBar = !showNavBar;

    if (showNavBar) {
        console.log(showNavBar)
        document.getElementById("navbar").classList.toggle("clicked");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
    }
}

let showMoreAbout = false;

function showMore() {

    showMoreAbout = !showMoreAbout;


    if (showMoreAbout) {
        console.log(showMoreAbout)
        document.getElementById("showMoreAbout").style.visibility = "";
        document.getElementById("showRead").style.visibility = "hidden";
        document.getElementById("about").classList.toggle("about_more");

    }
    else {
        console.log(showMoreAbout)
        document.getElementById("showMoreAbout").style.visibility = "hidden";
        document.getElementById("showRead").style.visibility = "";
        document.getElementById("about").classList.toggle("about_more");
    }
}
