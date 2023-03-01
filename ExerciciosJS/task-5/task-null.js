let num = prompt('Digite um numero')

for(let i = 1; i < 10; i++) {
    let Nnum = prompt('Digite mais um número');
    if(Nnum > num) {
        num = Nnum
    } else (num = num);
}


    document.getElementById('info').innerHTML =`O maior número foi ${num}`
