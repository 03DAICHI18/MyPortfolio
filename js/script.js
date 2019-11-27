$(function(){
    // トップ位置でフィックスすると色を透過させるヘッダー

    var Header = $('#Header');
    //Headerの位置    
    var HeaderTop = Header.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がHeaderの位置より下だったらクラスfixedを追加
        if (winTop >= HeaderTop + 50) {
            Header.css('opacity' , '.8');
        } else if (winTop <= HeaderTop + 50) {
            Header.css('opacity' , '1');
        }
    });

});

