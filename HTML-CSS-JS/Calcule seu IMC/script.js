function calcular() {
   var peso = document.getElementById('txtpeso')
   var altura = document.getElementById('txtaltura')
   var res = document.getElementById('res')
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')

    if (peso.value.length == 0 || altura.value.length == 0 ){
        window.alert('[ERRO] Verifique os valores digitados')
    } else {

        var p = parseFloat(peso.value)
        var a = parseFloat(altura.value) //converte os valores inseridos em numero

        var imc = p /  (a*a)
        var classificacao = ""

        if (imc < 18.5){
            classificacao = "Você está abaixo do Peso ideal"
            img.setAttribute('src', 'IMG/abaixo.png')
            document.body.style.background='#775a35'
        } else if (imc < 25){
            classificacao = "Você está em seu Peso ideal"
            img.setAttribute('src', 'IMG/ideal.png')
            document.body.style.background='#38d59f'
        } else if (imc < 30){
            classificacao = "Você está com sobrepeso"
            img.setAttribute('src', 'IMG/sobrepeso.png')
            document.body.style.background='#c89568'
        } else {
            classificacao = "Você está com obesidade"
            img.setAttribute('src', 'IMG/obeso.png')
            document.body.style.background='#fc4252'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Seu IMC é de <strong> ${imc.toFixed(2)}</strong>. ${classificacao}` // adicionei tofixed(2) para limitar a 2 casas decimais.
    res.appendChild(img)
}