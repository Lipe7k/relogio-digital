const relogio = document.getElementById("relogio")

setInterval(() => {
    relogio.innerText = new Date().toLocaleTimeString("pt-br")
}, 1000)