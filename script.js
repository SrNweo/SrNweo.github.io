btn = document.getElementById("chb");

btn.addEventListener("click", sDM);

dme = 0;

dmc = window.localStorage.getItem("dm");

if (dmc == 1) {
    document.getElementById("chb").checked = true;

    dme = 0;

    htmlvar = document.getElementById("header");

    htmlvar.style.backgroundColor = "#000";

    htmlvar = document.getElementById("nav");

    htmlvar.style.backgroundColor = "#000";

    htmlvar.style.color = "#fff";

    htmlvar = document.getElementById("body");

    htmlvar.style.backgroundColor = "#000";
}

function sDM() {
    if (dme == 0) {
        htmlvar = document.getElementById("header");

        htmlvar.style.backgroundColor = "#000";

        htmlvar.style.transition = "1s";

        htmlvar = document.getElementById("nav");

        htmlvar.style.backgroundColor = "#000";

        htmlvar.style.color = "#fff";

        htmlvar.style.transition = "1s";

        htmlvar = document.getElementById("body");

        htmlvar.style.backgroundColor = "#000";

        htmlvar.style.transition = "1s";

        dme = 1;
        if (dmc == null) {
            if (
                confirm(
                    "Would you like to save your dark mode preferences from now on?"
                )
            ) {
                window.localStorage.setItem("dm", "1");
            } else {
                window.localStorage.setItem("dm", "0");
            }
        }
    } else {
        htmlvar = document.getElementById("header");

        htmlvar.style.backgroundColor = "#222";

        htmlvar.style.transition = "1s";

        htmlvar = document.getElementById("nav");

        htmlvar.style.backgroundColor = "#aaa";

        htmlvar.style.color = "#000";

        htmlvar.style.transition = "1s";

        htmlvar = document.getElementById("body");

        htmlvar.style.backgroundColor = "#fff";

        htmlvar.style.transition = "1s";

        dme = 0;
    }
}