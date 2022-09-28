let tamil =document.getElementById("tamil");
let english =document.getElementById("english");
let maths = document.getElementById("maths");
let science=document.getElementById("science");
let social =document.getElementById("social");
let name = document.getElementById("name");

function tass(){
    let table =document.getElementById("table");
    let row =table.insertRow(table.length);
    let c1 =insertcell(0);
    let c2 =insertcell(1);
    let c3 =insertcell(2);
    let c4 =insertcell(3);
    let c5 =insertcell(4);
    let c6 =insertcell(5);
    let c7 =insertcell(6);

    c1.innerText=ame.value;
    c2.innerText=tamil.value;
    c3.innerText=english.value;
    c4.innerText=maths.value;
    c5.innerText=science.value;
    c6.innerText=social.value;
    c7.innerText=ame.value


    var output=parseInt(tamil.value)+parseInt(english.value)+
    parseInt(maths.value)+parseInt(science.value)+parseInt(social.value);
console.log(output) ;




}

let btn =document.getElementById("btn");
btn.addEventListener("click", function(){
    tass()
})