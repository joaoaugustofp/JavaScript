/* Digitar um número inteiro (prompt)/ parseInt
verificar se o número é PAR ou ÍMPAR
Mostrar o número digitar e mensagem PAR ou IMPAR */

const saida=document.querySelector(".saida");
let numero=parseInt(prompt("Digite um numero"));

if(numero%2 ==0){
    saida.innerHTML=`${numero} - PAR`;
}
else{
    saida.innerHTML=`${numero} - ÍMPAR`;
}