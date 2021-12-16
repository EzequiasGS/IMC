
const calcular = document.getElementById('calcular');

// Declarando as variáres dentro da função, para não serem globais. Vamos usar todos esses dados ao clicar em calcular.
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    //Fazendo a validação para saber se todos os campos estão preenchidos.
    if (nome !== '' && altura !== '' && peso !== ''){
        //Criando uma variável para armazenar o calculo do IMC.  Usando o toFixed para exibir apenas 2 casas decimais
        const valorIMC = (peso/(altura * altura)).toFixed(2 );

        //Criando uma variável para armazenar o estado da pessoa.
        let estado = '';
        if (valorIMC < 18.5){
            estado = 'Abaixo do Peso';
        }else if (valorIMC < 25){
            estado = 'Peso Normal';
        }else if (valorIMC < 30){
            estado = 'Sobrepeso';
        }else if (valorIMC < 35){
            estado = 'Obesidade Grau I';
        }else if (valorIMC < 40){
            estado = 'Obesidade Grau II';
        }else{
            estado = 'Obesidade Grau III. ATENÇÃO!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${estado}`;

    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc);