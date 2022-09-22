let timerE1=document.getElementById("timer");
let defuserE1=document.getElementById("defuser");
let countDown=10;



let intervelId=setInterval(function(){
    countDown=countDown-1;
    timerE1.textContent=countDown;
    if(countDown===0){
        timerE1.textContent="BOOM!!";
        timerE1.style.color="red";
        clearInterval(intervelId);
    }
},1000);


defuserE1.addEventListener("keydown",function(event){
    let bombDefuserText=defuserE1.value;
    if(countDown!==0 && bombDefuserText==="defuse" && event.key==="Enter"){
        timerE1.textContent="YOYO!! You did it!!";
       // timerE1.style.color="green";
        clearInterval(intervelId);
    }
});