$(function(){
// ・・・トップ位置でフィックスすると色を透過させるヘッダー・・・
    var Header = $('#Header');
    var About = $('#About');
    //ウィンドウ枠からのAbout位置を取得
    var AboutTop = About.offset().top;
    $(window).scroll(function () {
    // ウィンドウ枠からのスクロール量を取得
        var winTop = $(this).scrollTop();
        //Aboutがウィンドウ枠より上にきたらopacityで透過
        if (winTop >= AboutTop) {
            Header.css('opacity' , '.8');
        //Aboutがウィンドウ枠より下であれば透過させない
        } else if (winTop <= AboutTop) {
            Header.css('opacity' , '1');
        }

// ・・・ブロックフェードイン・・・
        $('.fadeIn').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollIn');
            }
        });
    });


// ・・・・・ページ内スクロール・・・・・
    $('a[href^="#"]').click(function(event) {
        // クリックした要素のhref属性の値を取得
        var anchor = $(this).attr("href"); 
        // 表示位置を取得
        var position = $(anchor).offset().top; 
        // アニメーションの効果の作成
        $('body,html').animate({ scrollTop : position }, 500); 
        return false;
    });


// ・・・・・キャプチャ画像の説明文・・・・・
    // li要素をマウスオーバー
    $(".work__capture-img").hover(function(){
    // キャプション部分の表示：フェードイン
        $(this).children(".caption").stop().fadeIn(500);
    // キャプションのテキスト位置：top70% から 40% へ移動
        $(this).children(".caption").children(".modal-link").stop().animate({"top" : "40%"}, 500);
    // ポインタを変更
        $(this).css('cursor','pointer');
    
    }, function(){
    // キャプション部分の非表示：フェードアウト
        $(this).children(".caption").stop().fadeOut(500);
    // キャプションのテキスト位置：top50% から 70%へ移動
        $(this).children(".caption").children(".modal-link").stop().animate({"top":"70%"}, 500);
    });


// ・・・・・モーダルウィンドウ・・・・・
    // クリックで表示制御
    $('.open').click(function(){
        $('.overlay, .modal-window').fadeIn(1000);
        return false;
    });
        
    $('.close').click(function(){
        $('.overlay, .modal-window').fadeOut(500);
        return false;
    });

    // ウィンドウを常に中央に配置
    locateCenter();
    $(window).resize(locateCenter);

    function locateCenter() {
    var w = $(window).width();
    var h = $(window).height();
    var cw = $('.modal-window').outerWidth();
    var ch = $('.modal-window').outerHeight();

    $('.modal-window').css({'left': ((w - cw) / 2) ,'top': ((h - ch) / 2) });
    }
});
