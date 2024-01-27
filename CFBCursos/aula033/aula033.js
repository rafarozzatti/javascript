const query_divTodas = [...document.querySelectorAll("div, p")] // Por Tag
// const query_divTodas = [...document.querySelectorAll("div[claas]")] // Por Tag, com elementos que possuem class
// const query_divTodas = [...document.querySelectorAll("div > p")] // Por Tag, com elementos p dentro de div
const query_cursosTodos = [...document.querySelectorAll(".curso")] // Por Class
const query_cursosC1 = [...document.querySelectorAll(".c1")] // Por Class
const query_cursosC2 = [...document.querySelectorAll(".c2")] // Por Class
// const query_cursoEspecial = document.querySelector("#c1") // Por Id
const query_cursoEspecial = document.querySelectorAll("#c1")[0] // Por Id


console.log(query_divTodas)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el) => {
//     el.classList.add("destaque")
// })