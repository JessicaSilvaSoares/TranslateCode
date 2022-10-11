let selecao = document.getElementById('selecao')
let numero = document.getElementById('numero')
const radio = document.getElementById('radio')
const codificar = document.getElementById('radioCod')
const decodificar = document.getElementById('radioDecod')
const Cod = document.getElementById('botaoCod')
const Decod = document.getElementById('botaoDecod')
const txt = document.getElementById('texto2')

selecao.addEventListener('click', function (){
    if(selecao.value == 'cifraDeCesar'){
        numero.style.display = 'flex'
    }else{
        numero.style.display = 'none'
    }
})

radio.addEventListener('click', function (){
    if(codificar.checked){
        Cod.style.display = 'flex'
        Decod.style.display = 'none'
    }else if(decodificar.checked){
        Decod.style.display = 'flex'
        Cod.style.display = 'none'
    }
})

Cod.addEventListener('click', function(event){
    event.preventDefault()
    if(selecao.value === 'base64'){
        texto2.innerText = base64()
    }else if(selecao.value === 'cifraDeCesar'){
        texto2.innerText = cifraDeCesar()
    }
})

Decod.addEventListener('click', function(event){
    event.preventDefault()
    if(selecao.value === 'base64'){
        texto2.innerText = base64()
    }else if(selecao.value === 'cifraDeCesar'){
        texto2.innerText = cifraDeCesar()
    }
})




function base64(){
    let mensagem = document.getElementById('texto1').value
    if(codificar.checked){
        let codificado = btoa(mensagem)
        return codificado
    }else if(decodificar.checked) {
        let decodificado = atob(mensagem)
        return decodificado
    }
}

function cifraDeCesar(){
    let msg = document.getElementById('texto1').value
    let num = parseInt(document.getElementById('numero').value)
    let msgFinal = ''

    if(codificar.checked){
        for(let i = 0; i < msg.length; i++){
            if(msg[i] === msg[i].toUpperCase() && msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90){
                msgFinal += String.fromCharCode((msg.charCodeAt(i) - 65 + num) % 26 + 65)
            }else if(msg[i] === msg[i].toLowerCase() && msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122){
                msgFinal += String.fromCharCode((msg.charCodeAt(i) - 97 + num) % 26 + 97)
            }else{
                msgFinal += String.fromCharCode(msg.charCodeAt(i))
            }
        }
        return msgFinal;

    }else if(decodificar.checked){
        for(let i = 0; i < msg.length; i++){
            if(msg[i] === msg[i].toUpperCase() && msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90){
                msgFinal += String.fromCharCode((msg.charCodeAt(i) - 65 - num) % 26 + 65)
            }else if(msg[i] === msg[i].toLowerCase() && msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122){
                msgFinal += String.fromCharCode((msg.charCodeAt(i) - 97 - num) % 26 + 97)
            }else{
                msgFinal += String.fromCharCode(msg.charCodeAt(i))
            }
        }
        return msgFinal;
    }
}
