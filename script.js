version = "1.3.2";

document.title = "SrNweo | " + version;

dsc = document.getElementById("discord");

dsc.addEventListener("click", getDscTag)

function getDscTag() {
    navigator.clipboard.writeText("SrNweo#3982");
    alert("My tag has been copied to your clipboard!");
}