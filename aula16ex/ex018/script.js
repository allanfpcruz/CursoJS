var num = window.document.querySelector('input#txtnum')
var res = window.document.querySelector('div#resul')
var sel = window.document.querySelector('select#sele')
var val = []

function numCorreto(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function estaNaLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){    
    if (numCorreto(num.value) && !estaNaLista(num.value, val)) {
        val.push(Number(num.value))
        var item  = window.document.createElement('option')
        item.setAttribute('id','txtitem')
        item.text += `Valor ${Number(num.value)} adicionado`
        sel.appendChild(item)        
    } else {
        window.alert('Digite um número válido')
    }
} 

function finalizar() {
    if (val.length == 0) {
        window.alert('Adicione valores para finalizar')
    } else {
        var totNum = val.length
        var maiorNum = val[0]
        var menorNum = val [0]
        var soma = 0
        var media = 0
        for(var cont in val) {
            soma += val[cont]
            if (val[cont] > maiorNum) {
                maiorNum = val[cont]
            } 
            if (val[cont] < menorNum) {
                menorNum = val[cont]
            }
        }
        media = soma/totNum

        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${totNum} números adicionados</p>`
        res.innerHTML+=`<p>O maior número é ${maiorNum}</p>`
        res.innerHTML+=`<p>O menor número é ${menorNum}</p>`
        res.innerHTML+=`<p>A soma dos números é ${soma}</p>`
        res.innerHTML+=`<p>A média dos números é ${media}</p>`
    }
}

function limpar() {
    res.innerHTML=''
    val = []
    document.querySelector('option#txtitem').remove()
}