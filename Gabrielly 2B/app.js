function criaCartao(categoria,pergunta,resposta) {
   let container = document.getElementById('container')
   let cartao = document.createElement('article')
   cartao.className ='cartao'

   cartao.innerHTML=`
    <section id="container">
                     <article class="cartao">
                             <div class="cartao__conteudo">
                                     <h3>${categoria}</h3>
                                     <div class="cartao__conteudo__pergunta">
                                         Como resumir a sociologia?    
                                     </div>
                                     <div class="cartao__conteudo__resposta">
                                        <p>${pergunta}</p>    
                                     </div>
                             <div class="cartao__conteudo__resposta">
       `                         <p>${resposta}</p>
                    <div>
                        </div>
            
     let respostaEstaVisivel= false

s



  container.appendChild(cartao)
     
  
   
   
   
   
   
   




} 



 

