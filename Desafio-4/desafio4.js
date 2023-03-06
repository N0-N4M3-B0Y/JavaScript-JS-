function ImparOuPar(num) {

if (num % 2 == 0){
    document.getElementById('info').innerHTML = `Seu número é PAR`
} else ( 
    document.getElementById('info').innerHTML = `Seu número é IMPAR`
)
};

ImparOuPar(parseFloat(prompt('diga ae o num')));