

let filmes = {
    1:{
    nome:'Matrix',
    imagem: 'img/matrix.png',
    notas:[] },
    2:{
    nome:'Interestelar',
    imagem:'img/inter.png',
    notas:[] },
    3:{
    nome:'A Origem',
    imagem:'img/origem.png',
    notas:[] }
    }

let nota = document.getElementById('nota')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) > 0 &&  Number(n) < 6){
        return true
    } else{ return false
    }
}


function avaliar(){
    let filmeselect = Number(document.getElementById('filmes').value)
    let voto = Number(nota.value)


    if(isNumero(voto)){
        filmes[filmeselect].notas.push(voto)
        window.alert(`Nota ${voto} selecionada para o Filme ${filmes[filmeselect].nome}`)
        nota.value=''
        nota.focus()
    }else {
        window.alert('Digite uma Nota entre 1 e 5')
    }
}

function verificar(){
    let totalvotos = 0
    for(let i=1; i <= 3; i++){
        totalvotos += filmes[i].notas.length;
    }

    if(totalvotos === 0){
        window.alert('Nenhum voto registrado!');
        return;
    }

    let media = {}
    for(let i=1; i <=3; i++){
        let soma = 0
        let notas = filmes[i].notas
           if(notas.length > 0) {
                    for(let j = 0; j < notas.length; j++){
                    soma+= notas[j];
                    }
                    media[i] = soma / notas.length;
            }else {
            media[i] = 0
        }}

    res.innerHTML = '<h2>Resultados da Votação:</h2>'

        for(let i=1; i<=3;i++){
            res.innerHTML+= `<p>${filmes[i].nome}: ${filmes[i].notas.length} votos, média ${media[i].toFixed(2)}</p>`
        }

        let maiormedia = Math.max(...Object.values(media))

        let vencedores = []

        for(let i = 1; i <= 3;i++){
            if(media[i] === maiormedia){
                vencedores.push(i)
            }
        }

        if(vencedores.length===1){
            let v = vencedores[0]
            res.innerHTML += `<h3>Filme vencedor: ${filmes[v].nome}</h3>`
            res.innerHTML += `<p>com média <strong>${maiormedia.toFixed(2)}</strong></p>`
            res.innerHTML += `<img src="${filmes[v].imagem}" alt="${filmes[v].nome}" width="200px"></img>`
        } else{
            let nomesvencedores = vencedores.map(i=> filmes[i].nome).join(' e ')
            res.innerHTML += `<h3>Empate entre: ${nomesvencedores} com média ${maiormedia.toFixed(2)}</h3>`
        }

}