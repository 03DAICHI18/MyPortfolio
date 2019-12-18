$(function () {
  // ・・・・・ブロックフェードイン・・・
  $('.fadeInopacity , .fadeIn').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollIn');
    }
});

  // ・・・・・キャプチャ画像の説明文・・・・・
// li要素をマウスオーバー
$(".work__capture-img").hover(function(){
  // キャプション部分の表示：フェードイン
      $(this).children(".caption").stop().fadeIn(500);
  // キャプションのテキスト位置：top70% から 40% へ移動
      $(this).children(".caption").children(".modal-link").stop().animate({"top" : "40%"}, 500);
      
  }, function(){
  // キャプション部分の非表示：フェードアウト
      $(this).children(".caption").stop().fadeOut(500);
  // キャプションのテキスト位置：top50% から 70%へ移動
      $(this).children(".caption").children(".modal-link").stop().animate({"top":"70%"}, 500);
  });
      

// ・・・・・モーダルウィンドウ・・・・・
  // クリックで表示制御
  var scrollPos;
  $('.open').on('click' , function(){
      $("html , body").addClass("no_scroll");    // 背景固定させるクラス付与
      scrollPos = $(window).scrollTop();

      $('.overlay , .modal-window').fadeIn(1000);
      return false;
      });
      
  $('.close , .overlay').on('click' , function(){
      $("html , body").removeClass("no_scroll");    // 背景固定させるクラス削除
      $(window).scrollTop(scrollPos);

      $('.overlay , .modal-window').stop().fadeOut(500);
      return false;

  });
})