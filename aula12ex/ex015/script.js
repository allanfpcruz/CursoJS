function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var nAno = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (nAno.value == 0 || nAno.value > anoAtual) {
        window.alert('[ERRO] Ano inválido')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = anoAtual - Number(nAno.value)
        var genero = fsex[0].checked?'Homem':'Mulher'
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (idade >= 0 && idade < 10) {
            if (genero == 'Homem'){
                img.setAttribute('src','bebehomem.jpg')
                //crianca homem
            } else {
                img.setAttribute('src','bebemulher.jpg')
                //criaça mulher
            }
        } else if (idade >=10 && idade < 24) {
            if (genero == 'Homem') {
                img.setAttribute('src','jovemhomem.jpg')
                // jovem homem
            } else {
                img.setAttribute('src','jovemmulher.jpg')
                // jovem mulher
            }
        } else if (idade >= 24 && idade < 60) {
            if (genero == 'Homem') {
                img.setAttribute('src','adultohomem.jpg')
                //adulto homem
            } else {
                img.setAttribute('src','adultomulher.jpg')
                //adulto mulher
            }
        } else {
            if (genero == 'Homem') {
                img.setAttribute('src','idosohomem.jpg')
                //idoso homem
            } else {
                img.setAttribute('src','idosomulher.jpg')
                //idoso mulher
            }
        }
    }
    
    res.innerHTML=(`<p>${genero} com ${idade} anos.</br></p>`) 
    res.appendChild(img)
}