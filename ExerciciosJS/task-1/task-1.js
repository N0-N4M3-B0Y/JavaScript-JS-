const idadeDirigir = 18;
const idadeVotar = 16;

let idadeAtual;

let anoAtual = new Date();

let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "));

idadeAtual = (anoAtual.getFullYear() - anoNascimento);

if (idadeAtual >= idadeDirigir) {
document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, pode dirigir e votar meu bom.`
}

else if (idadeAtual >= idadeVotar && idadeAtual <= idadeDirigir) {
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, pode votar mas não dirigir meu casa.`
}

else {
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, sai do meio pivéte`
}