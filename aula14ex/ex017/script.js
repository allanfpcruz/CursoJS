function gerador() {
    var num = window.document.querySelector('input#txtnum')
    var resp = window.document.querySelector('select#resp')
    if (num.value.length == 0) {
        window.alert ('Digite um número')
    } else {
        var n = Number(num.value)
        resp.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            resp.appendChild(item)
        }
        /*while (cont <= 10){
            var item = window.document.createElement('option')
            item.text = `${cont} x ${n} = ${cont*n}`
            item.value= `tab${cont}`
            tab.appendChild(item)
            cont++
        }*/
    }
}