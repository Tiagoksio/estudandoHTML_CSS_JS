// Função anônima
const func_anon = function (params) {
    //bloco
    //Quando o "this" é usado dentro de uma function, ele é atrelado ao seu escopo contexto
}
// Arrow Function ES6
const func_arrow = () => {
    //Quando usado o "this", ele é atrelado a um contexto global
}
// Exemplos
const multiplica = (n1, n2) => n1 * n2
multiplica(5, 3)

const vetor = [1,2,3,4,5]
vetor.map(valor => valor * 2)

var cores = [
    { id: 1, nome: 'Amarelo' },
    { id: 2, nome: 'Verde' },
    { id: 3, nome: 'Azul' },
    { id: 4, nome: 'Branco' },
    { id: 5, nome: 'Preto' }
]

cores.forEach(cor => console.log(cor.nome))
