$(function(){
 // メインビジュアルスライド
var page=0;
var lastPage =parseInt($("#slideshow img").length-1);
$("#slideshow img").css("display","none");
$("#slideshow img").eq(page).css("display","block");

function changePage(){
  $("#slideshow img").fadeOut(1000);
  $("#slideshow img").eq(page).fadeIn(1000);
};

var Timer;
function startTimer(){
Timer =setInterval(function(){  
  if(page === lastPage){
    page = 0;
    changePage();
    } else {
      page ++;
      changePage();
      };
        },3000);
}

startTimer();
});

