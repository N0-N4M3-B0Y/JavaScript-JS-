/* Crie um programa que imprima todos os divisores de um número (n), e tenha todos os números de 1 até (n),
*/

let n = prompt('Insira um número');
let i = 1


for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
        console.log(`${i} é divisor`)
    } else (
        console.log(`${i} não é divisor`)
    )
};