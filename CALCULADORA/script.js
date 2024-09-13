let operaçao = ""

function insert(numero1)
{
     var x = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML =  x + numero1;
} 
    
function clean() 
{
     document.getElementById('Resultado').innerHTML = "";
}
function escolherOperaçao(operaçao){
    operation = operaçao
}

function calcular()

{

}
function cal()
{  
    
     var Resultado = document.getElementById('Resultado').innerHTML;
     switch('x')
     {
       case '*':
        z = z * numero1

     }
          document.getElementById('Resultado').innerHTML =  eval(Resultado)
    }

    function trocar()
    {
       switch('x')
       {
         case '*':
          z = z * numero1

       }
    }
         
function multiplicacao(numero1){ 
     var numero1 = document.getElementById('Resultado').innerHTML;
     document.getElementById('Resultado').innerHTML =  numero1 + '*';
}
function soma(numero1){ 
     var numero1 = document.getElementById('Resultado').innerHTML;
     document.getElementById('Resultado').innerHTML =  numero1 + '+';
}
function menos(numero1){ 
     var numero1 = document.getElementById('Resultado').innerHTML;
     document.getElementById('Resultado').innerHTML =  numero1 + '-';
}
function divisao(numero1){ 
     var numero1 = document.getElementById('Resultado').innerHTML;
     document.getElementById('Resultado').innerHTML =  numero1 + '/';
}

    
     
function voltar() {
     const body = document.documentElement
     if(
        body.classList.contains('ligado')){
        body.classList.remove('ligado')
        }
        else {
            body.classList.add('ligado')
        }
     }    
    