$(function () {

// ・・・・・元のページに戻った際にフェードインさせる・・・
  $(window).on('load', function(){
    $('body').removeClass('fadeout');
    $('.content-block').css('opacity' , 0);
    $('.content-block').animate({opacity: 1},2000);
  });

  $(function() {
    $('#work .link-button').on('click', function(e){
      e.preventDefault(); // ナビゲートをキャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得
      if (url !== '') {
        $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
        setTimeout(function(){
          window.location = url;  // 0.8秒後に取得したURLに遷移
        }, 800);
      }
      return false;
    });
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
      

// ・・・・・・・・・・・・・モーダルウィンドウ・・・・・・・・・・・・・
    // モーダル表示
    var scrollPos;
    $('.open').on('click' , function(){
        $("html , body").addClass("no_scroll");    // 背景固定させるクラス付与
        scrollPos = $(window).scrollTop();
        $('.overlay').fadeIn(1000);   // オーバーレイフェードイン
        var id = $(this).data('id');   // 何番目のキャプション（モーダルウィンドウ）か認識
        $('.modal-window[data-id="modal' + id + '"]').fadeIn(1000);

        return false;
        });

// モーダル非表示
    $('.close , .overlay').on('click' , function(){
        $("html , body").removeClass("no_scroll");    // 背景固定させるクラス削除

        $(window).scrollTop(scrollPos);
        $('.overlay , .modal-window').stop().fadeOut(500);
        return false;
    });
})