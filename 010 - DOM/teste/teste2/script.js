

    
    
    
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");
    let button = document.querySelector("#Submit");
    let resultado = document.querySelector("#resultado");
    
   
    function corrigirFormatoAltura(valor) {
        // Verifica se o valor tem apenas números
        if (/^\d+$/.test(valor)) {
            // Converte para o formato desejado (por exemplo, 170 para 1.70)
            return (Number(valor) / 100).toString();
        }
        // Caso contrário, assume que o valor está no formato correto
        return valor;
    }
   
   
   
   
   
   
   
    function calcularImc() {
        let kg = Number(peso.value);
        let metros = Number(altura.value);
        let res = kg / (metros * metros);
        resultado = (resultado / 100)
        
       
        
       
        
        
        
        if (isNaN(kg) || isNaN(metros) || kg <= 0 || metros <= 0) {
            alert("Dados Inválidos!");
            resultado.innerHTML = "Digite um valor válido!";
            resultado.style.background ='red'
            resultado.style.fontSize ='30px'
            
            return;
        }
        
        const formatoNumerico = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        };
    
        
        
        
       
        if (res < 18.5) {
            resultado.style.borderRadius ='8px'
            resultado.style.background = "red";
            resultado.style.padding ='10px'
            resultado.innerHTML = `Seu índice de gurdura corporal é de ${res.toLocaleString(undefined,formatoNumerico)} "Desnutrição"`;
            
        } else if (res >= 18.5 && res < 24.9) {
            resultado.innerHTML = `Seu índice de gurdura corporal é de ${res.toLocaleString(undefined,formatoNumerico)} "Normal"`;
        } else if (res >= 25 && res < 29.9) {
            resultado.innerHTML = `Seu índice de gurdura corporal é de ${res.toLocaleString(undefined,formatoNumerico)} "Sobrepeso"`;
            
        } else if (res >= 30 && res < 39.9) {
            resultado.innerHTML = `Seu índice de gurdura corporal é de ${res.toLocaleString(undefined,formatoNumerico)} "Obsidade"`;
        } else if (res >= 40) {
            resultado.innerHTML = `Seu índice de gurdura corporal é de ${res.toLocaleString(undefined,formatoNumerico)} "Obsidade Morbida"`;
        } else {
            resultado.innerHTML = 'Valores fora da faixa considerada';
        }
       
    }
    
    
    button.addEventListener("click", calcularImc);
    
    
    
   



   







