const ochiq = document.querySelector(".fa-eye");
const yopiq = document.querySelector(".fa-eye-slash");
const input = document.querySelector(".parol");

yopiq.addEventListener("click", (e) => {
    e.preventDefault();

    yopiq.classList.add("bor");
    ochiq.classList.add("yuq");
    yopiq.classList.remove("yuq");
    ochiq.classList.remove("bor");
    input.setAttribute("type", "text")
});


ochiq.addEventListener("click", (e) => {
    e.preventDefault();

    yopiq.classList.add("yuq");
    ochiq.classList.add("bor");
    yopiq.classList.remove("bor");
    ochiq.classList.remove("yuq");
    input.setAttribute("type", "password")

});