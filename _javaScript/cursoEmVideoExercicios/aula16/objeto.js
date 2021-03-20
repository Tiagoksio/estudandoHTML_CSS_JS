let amigo = {nome: 'José', //declaração do objeto
sexo:'M',
peso: 85.4,
engordar(p=0){ //declaração do método
    console.log('Engordou')
    this.peso += p; //'this' palavra auto referente

}}
amigo.engordar(2) //chamar o metodo
console.log(`${amigo.nome} pesa ${amigo.peso}kg`) // declarar atributo utilizando o '.'