function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formano.value.length == 0 || formano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(formano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex [0].checked) {
                genero = 'um Homem'
                if (idade >=0 && idade < 12){
                    img.setAttribute('src', 'img/menino.png')
                    document.body.style.background='#a18e71'
                    genero = 'um Menino'

                } else if (idade < 21){
                    img.setAttribute('src', 'img/jovemh.png')
                    document.body.style.background='#cca071'

                } else if (idade < 50){
                    img.setAttribute('src', 'img/homem.png')
                    document.body.style.background='#6c4d3e'

                } else {
                    img.setAttribute('src', 'img/idoso.png')
                    document.body.style.background='#1d1104'
                }


            } else if (fsex [1].checked) {
                genero = 'uma Mulher'
                if (idade >=0 && idade < 12){
                    img.setAttribute('src', 'img/menina.png')
                    document.body.style.background='#dab2b4'
                    genero = 'uma Menina'

                } else if (idade < 21){
                    img.setAttribute('src', 'img/jovemm.png')
                    document.body.style.background='#c96761'

                } else if (idade < 50){
                    img.setAttribute('src', 'img/mulher.png')
                    document.body.style.background='#c23d5d'

                } else {
                    img.setAttribute('src', 'img/idosa.png')
                    document.body.style.background='#7a0c00'
                }
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
            res.appendChild(img)
        }
function limpar(){
    var res = document.getElementById('res')
    var formano = document.getElementById('txtano')
    res.innerHTML = ''
    formano.value = ''
    formano.focus()
    document.body.style.background='#e3e3e3'
}