const caixa = document.querySelector("#caixa")

let cursos = ["HTML", "CSS", "JavaScript"]

cursos.push("C++")
cursos.unshift("Python")
cursos.pop()
cursos.shift()

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})