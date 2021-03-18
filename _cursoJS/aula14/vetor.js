let num = [5, 8, 2]; //declarando o array com seus valores
console.log(num);
num[3] = 6; //adicionar valor no indice 3
num.push(7); //acrescentar valor através do metodo push sem se preocupar com o indice
console.log(num.length); //atributo length indica quantos elementos/cumprimento tem o array
num.sort(); //organiza de forma crescente os elementos de um array
for (let index = 0; index < num.length; index++) { //estrutura pra varrer o array
    console.log(`A posição ${index} tem o valor ${num[index]}`);    
}
for (let pos in num) { //modo simplificado de exibir o array
    console.log(num[pos]);
}
console.log(num.indexOf(8)) //retorna a key do valor indicado. Caso não tenha o valor no array, retorna '-1'