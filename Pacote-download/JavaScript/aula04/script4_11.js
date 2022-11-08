let a,b,res;
a=9;
b=10;
res=(a<b);
document.write(`a = ${a} , b = ${b} <br>`);//a=9 , b=10
document.write(`a < b : ${(a<b)} <br>`);//true
document.write(`!( a < b) : ${!(a<b)}<br>`);//false
document.write("res : "+typeof(res));//boolean
