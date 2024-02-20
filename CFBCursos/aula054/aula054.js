const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "Barcelona")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)

if(mapa.has("canal")) {
    caixa.innerHTML = "A chave existe na coleção"
} else {
    caixa.innerHTML = "A chave não está na coleção"
}
//caixa.innerHTML = mapa.get(10)