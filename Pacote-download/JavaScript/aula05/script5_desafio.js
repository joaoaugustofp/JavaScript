/*  Digitar duas notas (av1 e av2)
    média=(av1+av2)
    calcular a média das notas av1 e av2
    com o valor mostrar e verificar se o aluno está Aprovado ou Reprovado
    condição para ser aprovado, média >=6 */

    let av1, av2, média;
    const saida=document.querySelector(".saida");
    av1 = parseFloat(prompt("Digite a Nota da Av1"));
    av2 = parseFloat(prompt("Digite a Nota da Av2"));
    média= (av1+av2)/2; 
    if (média>=6) {
        saida.innerHTML=`Média: ${média} - O aluno está aprovado`;
    }
    else if (média<3) {
        saida.innerHTML=`Média: ${média} - O aluno está reprovado`;
    }
    else {
        saida.innerHTML=`Média: ${média} - O aluno está de recuperação`;  
    }