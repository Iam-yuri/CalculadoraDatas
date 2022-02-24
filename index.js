//declarando e iniciando variaveis
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
    //Criando um objeto para colocar os valores
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);

    //Checando os inputs de if e verificar se as datas são validas
    //Calculando a diferenças entre os if's
    if(date1.getTime() && date2.getTime()){
        //Calculando a diferença do tempo usando a função getTime
        //Calculando os números do getTime a partir de Janeiro 1.1970
        let timeDifference = date2.getTime() - date1.getTime();

        //Esse valores em milisegundo precisam ser convertidos em dias
        //Nós precisamos da diferença de números positivos e negativos
        let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
        output.innerHTML = `A diferença entre as duas datas é de <span>${dayDifference}</span> dias`;
    }
});