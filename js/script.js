$(function(){
    // ・・・・・・・・・・・トップ位置でフィックスすると色を透過させるヘッダー・・・・・・・・・・・・・・・・
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
    
    // ・・・・・・・・・・・・・・・・・・ブロックフェードイン・・・・・・・・・・・・・・・・
            $('.fadeInopacity').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('scrollIn');
                }
            });
    
            $('.fadeIn').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200){
                    $(this).addClass('scrollIn');
                }
            });
    });

    // ・・・・・・・・・・・・・・・・・・ページ内スクロール・・・・・・・・・・・・・・・・・・
        $('a[href^="#"]').click(function(event) {
            // クリックした要素のhref属性の値を取得
            var anchor = $(this).attr("href"); 
            // 表示位置を取得
            var position = $(anchor).offset().top; 
            // アニメーションの効果の作成
            $('body,html').animate({ scrollTop : position }, 500); 
            return false;
        });    
    
    // ・・・・・・・・・・・・・・・・・・キャプチャ画像の説明文・・・・・・・・・・・・・・・・・・
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
    
    
    // ・・・・・・・・・・別ページ遷移時にフェードインさせる・・・・・・・・・・
        $(window).on('load', function(){
            $('body').removeClass('fadeout');
            $('.content-block__page').css('opacity' , 0);
            $('.content-block__page').animate({opacity: 1},2000);
            return false;
            });
            
    // ・・・・・・・・・・ブログのスライドショー・・・・・・・・・・
        var slideWidth = $('.slide').outerWidth();	// .slideの幅を取得して代入
        var slideNum = $('.slide').length;	// .slideの数を取得して代入
        var slideSetWidth = slideWidth * slideNum;	// .slideの幅×数で求めた値を代入
        $('.slideSet').css('width', slideSetWidth);	// .slideSetのスタイルシートにwidth: slideSetWidthを指定

        var slideCurrent = 0;	// 現在地を示す変数 
        // アニメーションを実行する独自関数
        var sliding = function(){
            // slideCurrentが0以下だったら
            if( slideCurrent < 0 ){
                slideCurrent = slideNum - 1;

            // slideCurrentがslideNumを超えたら
            }else if( slideCurrent > slideNum - 1 ){	// slideCUrrent >= slideNumでも可
                slideCurrent = 0;
        }
        
            $('.slideSet').stop().animate({
                left: slideCurrent * -slideWidth
            });
        } 
        // 前へボタンが押されたとき
        $('.slider-prev').click(function(){
            slideCurrent--;
            sliding();
        });

        // 次へボタンが押されたとき
        $('.slider-next').click(function(){
            slideCurrent++;
            sliding();
        });

});