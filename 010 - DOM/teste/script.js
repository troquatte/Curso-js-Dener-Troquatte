"use strict";

function atualizaRelogio(){
 
 const agora = new Date();
 const hora = agora.getHours();
 const minuto = agora.getMinutes();
 const segundo = agora.getSeconds();

 document.querySelector(".hora").innerHTML = hora < 10? "0" + hora: hora;
 document.querySelector(".minuto").innerHTML = minuto < 10? "0" + minuto: minuto;
 document.querySelector(".segundo").innerHTML = segundo < 10? "0" + segundo: segundo;

};

function iniciarRelogio(){
   atualizaRelogio();

   setInterval(atualizaRelogio, 1000);


}

iniciarRelogio();
  

