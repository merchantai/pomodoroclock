var br=10, brtime = br;
var time = 25, pomotime = time;
var sessionSec = 0;
var interval;
var run; 
var type = "session";

//disable stop button
$('.btn-danger').attr("disabled", true);

// incriment ad decriment break time
$("#addbr").on("click",function(){
  br+=1;
  brtime = br;
  $("#break").html(brtime);
}); 

$("#subbr").on("click",function(){
  if(br>0){
    br-=1;
    brtime =br;
  $("#break").html(brtime);
  }
  });  
  
// incriment and decriment pomo time
$("#addtime").on("click",function(){
  time+=1;
  pomotime=time;
  $("#time").html(pomotime);
}); 

$("#subtime").on("click",function(){
  if(br>0){
    time-=1;
    pomotime = time
  $("#time").html(pomotime);
  }
}); 

// start timer functionn
 run = function(val){
  
   $('.btn-success').attr("disabled", true);
  $('.btn-info').attr("disabled", false);
  $('.btn-danger').attr("disabled", false);
   interval = setInterval(function(){
    if(val === 0 && sessionSec === 0){
      clearInterval(interval);
        $('.btn-success').attr("disabled", false);
        $('.btn-danger').attr("disabled", true);
      if(type == "session"){
        type = "break";
        $("#session").addClass("text-danger");
    $("#session").removeClass("text-success");
        sessionSec=0;
        run(brtime-1);
      }else{
        type = "session";
        $("#session").addClass("text-success");
    $("#session").removeClass("text-danger");
        sessionSec=0;
        run(pomotime-1);
      }
    } 
    $("#session").html(val +":"+ sessionSec);
    if(sessionSec === 0){
      val-=1;
      sessionSec = 59; 
    }else{
      --sessionSec;
    }
    
  } ,1000);
} 

//start button 

$(".btn-success").on("click",function(){
  if(type === "session"){
    $("#session").addClass("text-success");
    $("#session").removeClass("text-danger");
    run(pomotime);
  }else{
    $("#session").addClass("text-danger");
    $("#session").removeClass("text-success");
    run(brtime);
  }
});   


// stop button
$(".btn-danger").on("click",function(){
    $('.btn-success').attr("disabled", false);
  $('.btn-danger').attr("disabled", true);
  clearInterval(interval);
    br= brtime;
    time = pomotime;
    sessionSec = 0;  
    type = "session";
});