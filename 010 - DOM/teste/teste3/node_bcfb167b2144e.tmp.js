/*"use strict";

const bottomCadastra = document.querySelector("#cadastra");


function cadastraFuncionarios(){
    const Setor = prompt("Digite o setor do Funcionário");
    const nomeFunc = prompt("Digite o nome do funcionário")

  


}







bottomCadastra.addEventListener("click", cadastraFuncionarios);
*/

function fatorial(n){
   if(n <= 1){
   return 1
   } else{
    let resultado =1
     for(let i = 1; i < n; i--){
       resultado *= i     
    
    }
    return resultado
 }
} 
console.log(fatorial(5))