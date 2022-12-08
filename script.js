function calcular(){
    let altura = document.getElementsByClassName('Altura')[0].value;
    const peso = document.getElementsByClassName('Peso')[0].value;
    const resultado = document.getElementsByClassName('res')[0];
    //caulando o IMC com os dados inseridos 
    altura /= 100
    const IMC = peso/(altura**2)
    //validando se os dados foram preenchidos corretamente
    if(!altura || !peso){
        resultado.innerHTML = `<p>Dados inválidos!</p>`
    }
    // fazer a alteção da linha 16
    else if(IMC<18.5){
        resultado.innerHTML=`O seu IMC é de ${IMC.toFixed(2)}`
    } else if(IMC>18.5 && IMC<24.99){
        resultado.innerHTML= `O seu IMC é de ${IMC.toFixed(2)}`
    }else if(IMC>25 && IMC<29.99){
        resultado.innerHTML=`O seu IMC é de ${IMC.toFixed(2)}`
    }else if(IMC>30 && IMC<39.99){
        resultado.innerHTML=`O seu IMC é de ${IMC.toFixed(2)}`
    }else if(IMC>40){
        resultado.innerHTML=`O seu IMC é de ${IMC.toFixed(2)}`
    }
}