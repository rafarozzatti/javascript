// const c1 = document.querySelector("#c1") //Por Id
const cursos = [...document.querySelectorAll(".curso")] //Por Class

// c1.addEventListener("click", () => { //Alerta por função anônima
//     alert("clicou")
// })

// c1.addEventListener("click", (evt) => { //Adicionando o estilo destque no botão selecionado
//     const el = evt.target
//     el.classList.add("destaque")
// })

cursos.map((el) => { //Adicionando o estilo destaque em todos os botões
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado") //Indica qual foi clicaado
    })
})

// const msg() => { //Evento de alerta
//     alert("clicou")
// }

// c1.addEventListener("click", () => {
//     msg()
// })