let nomeEnable = document.getElementById("nomeEnable")
let perguntaJogar = document.getElementById("perguntaJogar")
let jogPerg = document.getElementById("jogPerg")

function funcaoNome (){
    
    document.getElementById("formNome").style.display= "none"
    let nameExample = document.getElementById("name-example").value;
    nomeEnable.innerHTML = `<p>Olá <b>${nameExample}</b></p>`
    document.getElementById("jogar").style.display="block"
    
    
}
function funcaoNao (){
document.getElementById("nomeEnable") .style.display="none"
document.getElementById("jogar") .style.display="none"
alert("Até logo!!!")

}

function funcaoSim (){
    document.getElementById('primPergunta').value=''
    document.getElementById("primPergunta").style.color="black"
    document.getElementById("segNao").style.color="black"
    document.getElementById("segSim").style.color="black"
    document.getElementById("terPergunta").style.color="black"
    //document.getElementsByName("resposta").style.color="black"
    document.getElementById("checkbox0").style.color="black"
    document.getElementById("checkbox1").style.color="black"
    document.getElementById("checkbox2").style.color="black"
    document.getElementById("checkbox3").style.color="black"
    document.getElementById("jogar").style.display="none"
    document.getElementById("questionario").style.display="block"
    document.getElementById("resultado").style.display="none"
}

function primeira ()
{   
    let respostasCorretas = 0
    let primPergunta = document.getElementById("primPergunta").value;
    if(primPergunta=="script")
    {
    document.getElementById("primPergunta").style.color="green"
    respostasCorretas ++
    }
    else
    document.getElementById("primPergunta").style.color="red"
    return respostasCorretas
}
function segunda ()
{   let respostasCorretas = 0
    let respRadio = document.getElementById("respRadio"); 
    if(respRadio.respostaRadio.value=="n"){
        respostasCorretas++
        document.getElementById("segNao").style.color="green"
        }
        else
        document.getElementById("segSim").style.color="red"

    return respostasCorretas
}
function terceira ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}


function funcaoRespostas (){ 
   total = ( primeira () + segunda () + terceira () )
    total *=( 100 /3).toFixed()
 let resultado = document.getElementById("resultado")
 document.getElementById("resultado").style.display="block"
 document.getElementById("resultado").style.fontSize ="30px"
resultado.innerHTML += `<b>${total.toFixed()}%</b>`
jogPerg.innerHTML = (`Gostaria de repetir?`)
document.getElementById("primPergunta").setAttribute('readOnly', true)
//document.getElementsByName("resposta").setAttribute('readOnly',true)
document.getElementById("segNao").setAttribute('readOnly', true)
funcaoNome();
}


