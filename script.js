dsc = document.getElementById("discord");

dsc.addEventListener("click", getDscTag)

function getDscTag() {
    navigator.clipboard.writeText("SrNweo#3982");
    alert("My tag has been copied to your clipboard!");
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}