const el = document.querySelector('.clock');
el.addEventListener('onload', horaAtual);

function horaAtual() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;

    document.querySelector('.clock').innerHTML = time

    document.querySelector('#container').innerHTML = time
    setTimeout('horaAtual()',1000);
}

horaAtual();