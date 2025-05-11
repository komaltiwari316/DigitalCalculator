let inputbox=document.querySelectorAll(".input")
let button=document.querySelector(".btn")
let ansbox=document.querySelector(".ans-box")
let reset=document.querySelector(".rest-btn")

let a=null;
let b=null;
let op=null;

inputbox.forEach((inBox,index)=>{
    inBox.addEventListener("input",()=>{
        if(index==0){
            a=parseInt(inBox.value);
        }else if(index==1){
            b=parseInt(inBox.value);
        }
        else if(index==2){
            op=inBox.value.trim();
        }
        console.log(`Value ${index + 1}:`,inBox.value);
    })
})



 const cal=()=>{
      if(isNaN(a) || isNaN(b) || !op){
         alert("Enter a valid Number");
      }else if (op === '+') {
        let res = a + b;
        ansbox.innerText = res;
    } 
    else if (op === '-') {
        let res = a - b;
        ansbox.innerText = res;
    } 
    else if (op === '*') {
        let res = a * b;
        ansbox.innerText =res;
    } 
    else if (op === '/') {
        let res = a / b;
        ansbox.innerText =res;
    } 
    else if (op === '%') {
        let res = a % b;
        ansbox.innerText =res;
    } 
 }

  const resetbtn=()=>{
    a=null;
    b=null;
    op=null;
    inputbox.forEach(int=>int.value="")
    ansbox.innerText=0;
  }
 button.addEventListener("click",cal)
 reset.addEventListener("click",resetbtn)