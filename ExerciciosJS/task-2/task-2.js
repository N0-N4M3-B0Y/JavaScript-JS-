let tempCelcius = parseInt(prompt("Digite a temperatura em Cº"));

let tempFar = (tempCelcius * 1.8 + 32)

document.getElementById('info').innerHTML = `A temperatuda digitada de ${tempCelcius}Cº, convertida para fahrenheit sera ${tempFar}F`