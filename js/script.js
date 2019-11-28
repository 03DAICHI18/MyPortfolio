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

});

