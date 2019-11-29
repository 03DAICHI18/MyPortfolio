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

        $('.fadeIn').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollIn');
            }
        });
    });

// ・・・ページ内スクロール・・・
$('a[href^="#"]').click(function(event) {
    // クリックした要素のhref属性の値を取得
    var anchor = $(this).attr("href"); 
    // 表示位置を取得
    var position = $(anchor).offset().top -50; 
    // アニメーションの効果の作成
    $('body,html').animate({ scrollTop : position }, 500); 
    return false;
});
});
