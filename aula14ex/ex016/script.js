function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados inválidos')
    } else {
        resp.innerHTML='Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0) {
            window.alert('Passo INVÁLIDO, considerando passo 1')
            p = 1
        }
        if (i<f) {
            for (var cont = i; cont <= f; cont += p) {
                resp.innerHTML += `${cont} 👉`
            } //crescente
        } else {
            for (var cont = i; cont >= f; cont -= p) {
                resp.innerHTML += `${cont} 👉`
            } //decrescente
        }
        resp.innerHTML += `🏁`
    }

}