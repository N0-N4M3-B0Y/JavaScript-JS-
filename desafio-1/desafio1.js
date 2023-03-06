const seconds = parseInt(prompt('Diga o tempo em Segundos'))

function converter (sec, min, h) {
    
    h = Math.floor(sec / 3600);
    min = Math.floor(sec / 60) % 60;
    sec = sec % 60
    document.getElementById('info').innerHTML = `Seu tempo total é ${h}:${min}:${sec} `
}

converter(seconds);
