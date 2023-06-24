var msg = window.document.querySelector ('div#msg')
var img = window.document.querySelector('img#imagem')
var saud = window.document.querySelector('div#saud')

function atual () {
    document.querySelector('input#txthora').remove()
    document.querySelector('input#txtfun').remove() //remover os elementos criados em selecionar
    var data = new Date()
    var hora = data.getHours() //pegar hora atual
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.jpg"
        document.body.style.background = "#ffe357"
        saud.innerHTML=("Bom dia")
        // dia
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.jpg"
        document.body.style.background = "#6adfa1"
        saud.innerHTML = ("Boa tarde")
        // tarde
    } else {
        img.src = "fotonoite.jpg"
        document.body.background = "#554166"
        saud.innerHTML=("Boa noite")
        //noite
    } 
}

function selecionar(){
    var par = window.document.querySelector('p#txtinp')
    var inp = window.document.createElement('input')
    inp.setAttribute('type', 'number')
    inp.setAttribute('id', 'txthora')
    par.appendChild(inp) //criar o input de selecionar hora
    
    var click = window.document.createElement('input')
    click.setAttribute('type', 'button')
    click.setAttribute('value', 'Veja')
    click.setAttribute('id','txtfun')
    click.setAttribute('onclick', 'ver()')
    par.appendChild(click) //criar o botão para a ação
}

function ver() {
    var aHora = window.document.querySelector('input#txthora')
    var hora = Number(aHora.value) //pegar a hora digitada pelo usuário

    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora > 0 && hora < 12) {
        img.src = "fotomanha.jpg"
        document.body.style.background = "#ffe357"
        saud.innerHTML=("Bom dia")
        // dia
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.jpg"
        document.body.style.background = "#6adfa1"
        saud.innerHTML = ("Boa tarde")
        // tarde
    } else if (hora >= 18 && hora <= 24){
        img.src = "fotonoite.jpg"
        document.body.style.background = "#2d2236"
        saud.innerHTML=("Boa noite")
        //noite
    } else {
        alert('Insira uma hora válida')
    }
}
