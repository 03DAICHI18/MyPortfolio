$(function(){
    // ・・・トップ位置でフィックスすると色を透過させるヘッダー・・・
    var Header = $('#Header');
    var About = $('#About');
    //ウィンドウ枠からのAbout位置を取得
    var AboutTop = About.offset().top;

// ＝＝＝＝＝＝＝＝ここからスクロール関連＝＝＝＝＝＝＝＝＝＝＝
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
        $('.fadeInopacity , .fadeIn').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollIn');
            }
        });

    // ・・・・ページナビのハイライト・・・・
    // 各コンテンツ位置とスクロール量の関係を調べる
    for(var i = 1; i <= 5; i++){
        if($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 100){
          // 現在のhighlightクラスを削除
            $("nav li").removeClass("highlight");
          // 新しくhighlightクラスを追加
            $("nav li:nth-child(" + i + ")").addClass("highlight");
        }
    }

    });
// ＝＝＝＝＝＝＝＝ここまでスクロール関連＝＝＝＝＝＝＝＝＝＝＝


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

    }, function(){
    // キャプション部分の非表示：フェードアウト
        $(this).children(".caption").stop().fadeOut(500);
    // キャプションのテキスト位置：top50% から 70%へ移動
        $(this).children(".caption").children(".modal-link").stop().animate({"top":"70%"}, 500);
    });
        

// ・・・・・モーダルウィンドウ・・・・・
    // クリックで表示制御
    $('.open').on('click' , function(){
        $("body").addClass("no_scroll");    // 背景固定させるクラス付与
        $(window).on('touchmove', (e) => {
        e.preventDefault();
        });
        $('.overray , .modal-window').fadeIn(1000);
        return false;
    });
        
    $('.close').on('click' , function(){
        $("body").removeClass("no_scroll");    // 背景固定させるクラス削除
        $(window).off('touchmove');
        $('.overray , .modal-window').stop().fadeOut(500);
        return false;
    });


});
