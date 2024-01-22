function soma(...valores) {
    let tam = valores.length, res = 0
    for ( let v of valores) {
        res += v
    }
    return res
}

console.log(soma(10, 5))