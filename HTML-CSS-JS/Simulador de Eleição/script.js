let num = document.getElementById('txtnum')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let candidatos = { 0:0, 1:0, 2:0, 3:0}
let nomes = {1: 'Ana Peróba', 2: 'Pedro Cabeção', 3: 'Sargento Pimentel'}
let imagens = {1:'img/peroba.png', 2:'img/cabecao.png', 3:'img/sargento.png'} //Mapa de imagens



function isNumero(n){
    if(Number(n)>=0 && Number(n) <=3){
        return true
    } else {
        return false
    }
}


function adicionar(){
    let voto = Number(num.value)

    if(isNumero(voto)){
        candidatos[voto]++
        let item = document.createElement('option')
            if(voto === 0){
            item.text = `[VOTO NULO]`       
            }else if(voto === 1){
            item.text = `[VOTO] Candidata ${nomes[voto]}`    
        }else{
        item.text = `[VOTO] Candidato ${nomes[voto]}`
        }
        list.appendChild(item)
        num.value=''
        num.focus()
    }else{
        window.alert('Digite o número de um candidato válido ou 0 para votar Nulo')
    }
}

function verificar(){
    let tot = candidatos[0] + candidatos[1] + candidatos[2] + candidatos[3]

    if(tot === 0){
        window.alert('É necessário pelo menos 1 voto registrado!')
        return
    }
        res.innerHTML = ''
        res.innerHTML +=`<p>O total de votos computados foi de ${tot}.</p>`
        res.innerHTML +=`<p>O total de votos nulos foi de ${candidatos[0]} voto(s).</p>`
        res.innerHTML +=`<p>${nomes[1]} recebeu um total de ${candidatos[1]} voto(s).</p>`
        res.innerHTML +=`<p>${nomes[2]} recebeu um total de ${candidatos[2]} voto(s).</p>`
        res.innerHTML +=`<p>${nomes[3]} recebeu um total de ${candidatos[3]} voto(s).</p>`
        
        let maiorvoto = Math.max(candidatos[1], candidatos[2], candidatos[3])
        let vencedores = []

        for(let i=1; i<=3; i++){
            if(candidatos[i] === maiorvoto){
                vencedores.push(nomes[i])
            }
        }   
            if(vencedores.length === 1) {
            let vencedornome = vencedores[0]
            let idvencedor = Object.keys(nomes).find(key=> nomes[key]=== vencedornome)
            res.innerHTML += `<p><strong>O Candidato vencedor é ${vencedornome} com ${maiorvoto} votos válidos</strong></p>`
            document.getElementById('vencedor').innerHTML=`
            <h3>Vencedor:</h3>
            <img src="${imagens[idvencedor]}" alt="${vencedornome}" width="150px">
            <p><strong>${vencedornome}</strong></p>`
               
            }else {
            res.innerHTML += `<p><strong>[EMPATE] Os vencedores foram ${vencedores.join(' e ')}</strong></p>`
            document.getElementById('vencedor').innerHTML=''
        }  
    
    }

function limpar(){
    res.innerHTML = ''
    candidatos = {0:0, 1:0, 2:0, 3:0}
    list.innerHTML = ''
    num.value = ''
    document.getElementById('vencedor').innerHTML= ''
}