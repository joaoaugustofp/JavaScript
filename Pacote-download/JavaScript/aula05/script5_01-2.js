let msg;//declaração da variável msg
const saida=document.querySelector(".saida");//class="saida"
const h1=document.querySelector("h1");//nome da tag <h1>
const teste=document.querySelector("#teste");//seletor de id="teste"

//#h2 id="h2"
msg="Hoje a aula mudou!";

saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML+=`<h2>${msg}`;

h1.innerHTML+=" - Javascript";

teste.innerHTML+="qq alteração!";