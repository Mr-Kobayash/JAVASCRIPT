let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(` o Vetor tem ${num.length} Posições`)
console.log(`o primeiro valor do veto é ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {

    console.log(`O valor 8 está na posição ${pos}`)
}