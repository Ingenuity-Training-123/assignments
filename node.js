let btn= document.getElementById('btn');
let input= document.getElementById('userinp');
let output=document.getElementById('outtxt');
let number=Math.floor(Math.random()*100)
let countD=document.getElementById('count');
var btn_r = document.getElementById("btn-f");
let count=0;
let reel=0;
var end=0;
var store = [];
window.onkeypress=function(e){
    if(e.keyCode==13){
        check();
    }
}
console.log(number);
btn_r.addEventListener('click', function(){
     output.innerHTML="";
     count=0;
 });
 input.addEventListener('click', function(){
     reel=1;
 });
function check(){
    count++;
    countD.innerHTML= `Your attempts are: ${count}`;
     let ipt=document.getElementById('userinp').value;
    var x  = document.getElementById('userinp').value;
    store.push(x);
    document.getElementById('prev').innerHTML = "Previously Stored Values Are:" + store;
    if(reel==0 && end!=10)
    {
        countD.innerHTML= `Please enter the NUMBER`
        countD.style.color="red";
    } else if(count == 10) {
        document.getElementById('prev').innerHTML ="GAME OVER";
        document.getElementById('count').innerHTML ="";
        document.getElementById('userinp').style.display ="none";
        document.getElementById('btn').style.display ="none";
        document.getElementById('prev').style ="font-size: 45px; font-weight: bold; color: crimson;";
    }
    // else if(end==count){
    //     countD.innerHTML= `GAME OVER`=
    else{
        if(ipt==number){
            output.style.color="green";
            document.body.style.backgroundImage="url(up.jpg)";
            output.innerHTML=`You guessed the right number, the number is ${number}`
            document.getElementById('userinp').style.display ="none";
            document.getElementById('btn').style.display ="none";
            // document.getElementById('prev').style ="font-size: 45px; font-weight: bold; color: crimson;"
        }
    
     else if (ipt < number){
        output.innerHTML= "You guessed too low!!";
        document.body.style.backgroundImage="url(R.jpg)";
      
    };
    if(ipt>number){
        output.innerHTML="You guessed too high!!";
        document.body.style.backgroundImage="url(up2.jpg)";
      
    }}
}