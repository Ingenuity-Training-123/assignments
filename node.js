let btn= document.getElementById('btn');
let output=document.getElementById('outtxt');
let number=Math.floor(Math.random()*100)
let countD=document.getElementById('count');
let count=0;
console.log(number);
btn.addEventListener('click', function(){
    count++;
    countD.innerHTML= `Your attempts are: ${count}`;
    let ipt=document.getElementById('userinp').value;
    if(ipt==number){
        output.style.color="pink";
        document.body.style.backgroundColor="rgb(145, 255, 0)"  
        output.innerHTML=`You guessed the right number, the number is ${number}`
    } else if (ipt < number){
        output.innerHTML= "You guessed too low!!";
        document.body.style.backgroundColor="rgba(255, 159, 68, 0.74)"
    };
    if(ipt>number){
        output.innerHTML="You guessed too high!!";
        document.body.style.backgroundColor="rgba(243, 255, 68, 0.74)"
    }
});