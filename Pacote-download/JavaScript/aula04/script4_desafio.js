let av1, av2, média, resultado;
av1 = parseFloat(prompt("Digite a Nota da Av1"));
av2 = parseFloat(prompt("Digite a Nota da Av2"));
média= (av1+av2)/2;
resultado=(média>=6) ? "aprovado" : "reprovado";
document.write(`Você está ${resultado}<br>`);
/*
Solicitar a entrada de duas notas (av1 e av2)
Calcular a média das duas notas
Qual a condição para mostrar uma das mensagens abaixo:
media >= 6
"Aprovado"
"Reprovado"
*/
