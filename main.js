const b=document.getElementById("b");
const p=document.getElementById("p");
let min=10000;
let max=99999;
let num;
b.onclick=function(){
    num=Math.floor((Math.random()*(max-min))+min);
    p.textContent=num;
}