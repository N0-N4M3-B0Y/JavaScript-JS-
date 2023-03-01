//estrutura de repetição

//o que é?

/* 
 É usada quando queremos realizar uma ação repetidas vezes:
 existem varios meios de relizar está ação para cada situação,
 sendo elas:
 */

 for(let i = 0; i < 10; i++) {

 }

// Palavra chave for
// Declara variavel
//condição
//incremento ou decremento
//--------------------------- 
//WHILE = ENQUANTO
 
var j = 0;
while(j < 10) {
    console.log(j);
    j++;
}
//---------------------------
//DO WHILE
do{
    console.log(i)
    i++
} while(i < 0)
//---------------------------
//FOR OF
let esportes = ['futzin', 'basq', 'Lolzin'];
    for(let esporte of esportes) {
        console.log(esporte);
    }

//--------------------------------------------
//FOR IN

let person ={
    nome: 'Motsu',
    idade: 21,
    peso: 62

};

for(let property in person) {
    console.log(property);
}