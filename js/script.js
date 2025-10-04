$(document).ready(function(){

    // 1. AOS (Animate on Scroll) 라이브러리 초기화
    AOS.init({
        duration: 1000, // 애니메이션 지속 시간
        once: true,     // 애니메이션이 한 번만 실행되도록 설정
    });

    // 2. 스크롤 시 네비게이션 바 스타일 변경
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.scroll-indicator, .scroll-hint').css('opacity', 0); // fade out indicator & hint
        } else {
            $('.navbar').removeClass('scrolled');
            $('.scroll-indicator, .scroll-hint').css('opacity', 1); // show indicator & hint at top
        }
    });

    // 3. 네비게이션 메뉴 클릭 시 부드러운 스크롤 이동 (고정 내비 오프셋 보정)
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var $target = $(hash);
            if ($target.length) {
                var navHeight = $('.navbar').outerHeight() || 0;
                // 초소형 기기에서는 네비가 2줄이 될 수 있어 여유값 +8
                var extra = window.matchMedia('(max-width: 576px)').matches ? 8 : 0;
                var top = $target.offset().top - navHeight - extra;
                $('html, body').animate({ scrollTop: top }, 800);
            }
        }
    });

    // 4. 모바일 메뉴에서 링크 클릭 시 메뉴 닫기
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // 5. Scroll indicator click follows same smooth scrolling rules
    $('.scroll-indicator').on('click', function(event) {
        var href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            var $target = $(href);
            if ($target.length) {
                var navHeight = $('.navbar').outerHeight() || 0;
                var extra = window.matchMedia('(max-width: 576px)').matches ? 8 : 0;
                var top = $target.offset().top - navHeight - extra;
                $('html, body').animate({ scrollTop: top }, 800);
            }
        }
    });

});
