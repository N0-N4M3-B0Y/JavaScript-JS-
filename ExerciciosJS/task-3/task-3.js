//Definindo valores
let nome = prompt("Informe seu Nome & Sobrenome:")
let genero = prompt("Digite seu seu Gênero: <br> Para masculino Digite: (M) <br> Para feminino Digite:(F)");
let idade = prompt("Infomr sua idade atual: ")
let tempoContribuicao = prompt("Informe por quanto tempo você tem contribuido em sua empresa em anos:");

let tempoMin;
let idadeMin;

//De Finindo valor minimo De acordo com o Gênero

if (genero = "M" || "m") {
    tempoMin = 35
    idadeMin = 65
}

else {
    tempoMin = 30
    idadeMin = 62
};

//Validadndo se o Usuário Está Apto a se aposentar

if (idade >= idadeMin && tempoContribuicao >= tempoMin){
    document.getElementById('info').innerHTML = `Nome: ${nome} <br> Idade: ${idade} <br> Tempo Total contribuido: ${tempoContribuicao} anos <br> Está Apto a se aposentar`
}

else {
    document.getElementById('info').innerHTML = `Nome: ${nome} <br> Idade: ${idade} <br> Tempo Total contribuido: ${tempoContribuicao} anos <br> Não está Apto a se aposentar`
}