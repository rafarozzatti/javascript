let n = 0, max = 1000, pares = 0

/*while (n < max) {
    console.log("CFB Cursos - " + n)
    if (n > 10) {
        break
    }
    n++
}
console.log("Fim do programa")*/

for (let i = 0; i < max; i++) {
    if (i%2 == 0) {
        continue
    }
    pares++
}
console.log("quantidade de pares: " + pares)
console.log("Fim do programa")