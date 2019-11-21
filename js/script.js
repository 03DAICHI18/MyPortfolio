$(function(){
 // メインビジュアルスライド
var page=0;
var lastPage =parseInt($("#slideshow li").length-1);
$("#slideshow li").css("display","none");
$("#slideshow li").eq(page).css("display","block");

function changePage(){
  $("#slideshow li").fadeOut(1000);
  $("#slideshow li").eq(page).fadeIn(1000);
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

