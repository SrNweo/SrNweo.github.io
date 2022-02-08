const btn = document.getElementById("btn");

const h3 = document.getElementById("h3");

const p = document.getElementById("p");

btn.addEventListener("click", prnNam);

function prnNam() {
    const name = document.getElementById("name").value;
    ShwNam(name);
}

function ShwNam(name) {
    h3.textContent = name;
    p.textContent = ("this doesn't work")
}