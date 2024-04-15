var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

function ajustaTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}


function cronometro(valor){

   if(tempo < 0){
        window.location.href='vitoria.html'
   }else{
     document.getElementById('cronometro').innerHTML = tempo
     tempo = tempo - valor
   }
}

function posicaoMosquito(){

  //removendo o mosquito
  if(document.getElementById('mosquito')){
      document.getElementById('mosquito').remove()

      if(vidas > 3){
         window.location.href="game_over.html"
      }
      else{
        document.getElementById('v'+vidas).src='imagens/coracao_vazio.png'
        vidas++
      }
  }
 var posicaoX = Math.floor(Math.random()* largura) -90
 var posicaoY = Math.floor(Math.random() * altura) - 90
 

 posicaoX = posicaoX  < 0 ? 0: posicaoX 
 posicaoY = posicaoY < 0  ? 0 : posicaoY

  var mosquito = document.createElement('img')
  mosquito.src ='imagens/mosquito.png'
  mosquito.className = tamanhMosquito() +' '+ ladoAleatorio()
  mosquito.style.left = posicaoX+'px'
  mosquito.style.top = posicaoY+'px'
  mosquito.style.position ='absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito)
}

function tamanhMosquito(){
  var classe = Math.floor(Math.random()*3)

  switch(classe){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio(){
  var classe =  Math.floor(Math.random()*2)
  console.log(classe)
  switch(classe){
      case 0:
        return 'ladoA'
      case 1:
        return 'ladoB'
  }
}

ajustaTela()

//criando um mosquito a cada um segundo
setInterval(posicaoMosquito,1000)
setInterval(cronometro,1000,1)