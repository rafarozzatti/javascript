const valores = [10, 8, 9, 2]
const it_Valores = valores[Symbol.iterator]()

const texto = "YouTube"
const it_texto = texto[Symbol.iterator]()

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())