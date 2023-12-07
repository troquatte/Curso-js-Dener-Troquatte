/*"use strict";

const bottomCadastra = document.querySelector("#cadastra");


function cadastraFuncionarios(){
    const Setor = prompt("Digite o setor do Funcionário");
    const nomeFunc = prompt("Digite o nome do funcionário")

  


}







bottomCadastra.addEventListener("click", cadastraFuncionarios);
*/





function fatorialComLoop(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorialComLoop(1)); // Exemplo de uso