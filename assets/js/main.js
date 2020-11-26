$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $(".scrollTop").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    $(window).scroll(function () {

    });
    /* Mobile menu */
    $(".sidebar-mobile-main-toggle").click(function () {
        $(".header_mobile__menu").toggleClass("isActive");
    });

    $(".menu-close, .header_mobile__menu .body_overlay").click(function () {
        $(".header_mobile__menu").removeClass("isActive");
    });

    /* Menu */
    $(".category-name").one("click", function (e) {
        /*if($(this).parents("header").hasClass("sidebar-xs")){
            var $this=$(this);
            $("header").addClass("open");
            $(".category").removeClass("sub-menu-open");
            setTimeout(function () {
                $this.parent(".category").addClass("sub-menu-open");
            },300);
        }else{*/
            e.preventDefault();
            $(".category").removeClass("sub-menu-open");
            $(this).parent(".category").addClass("sub-menu-open");
        /*}*/

    });

    $(".sub-menu-close").click(function () {
        $(this).parents(".category").removeClass("sub-menu-open");
        if($("header").data("xs") === true ){
            $("header").addClass("sidebar-xs");
        }
    });

    /* Mobile Filter menu */
    $(".mobile-filter .btn").click(function () {
        $(".mobile_filter_menu").toggleClass("isActive");
    });

    $(".menu-close, .mobile_filter_menu .body_overlay").click(function () {
        $(".mobile_filter_menu").removeClass("isActive");
    });

    $(".address-list .list-item").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .find(".address-info")
                .slideUp(200);
            $(".address-list .list-item h5").find("i")
                .removeClass("icon-circle-down2")
                .addClass("icon-circle-right2");
        } else {
            $(".address-list .list-item h5").find("i")
                .removeClass("icon-circle-down2")
                .addClass("icon-circle-right2");
            $(".address-list .list-item").removeClass("active");
            $(this).addClass("active");
            $(".address-info").slideUp(200);
            $(this)
                .find(".address-info")
                .slideDown(200);
        }
    });

    var navClass = 'nav-sidebar',
        navItemClass = 'nav-item',
        navItemOpenClass = 'nav-item-open',
        navLinkClass = 'nav-link',
        navSubmenuClass = 'nav-group-sub',
        navSlidingSpeed = 250;

    // Configure collapsible functionality
    $('.' + navClass).each(function () {
        $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
            e.preventDefault();

            var $target = $(this),
                $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);
            if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            } else {
                $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
            }

            if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            }
        });
    });

    $(".menu-button").click(function () {
        if ($(this).parents(".header-top-main").hasClass("fixed") || $(this).parents(".header-top-main").hasClass("closed-menu")) {
            $('.category-list-wrapper .category-list').slideToggle("slow");
        }
    });

    /* hide search bar */
    $(document).mouseup(function (e) {
        var container = $(".result-wrapper");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".search-result-wrapper").removeClass("result-show");
            $(".search-input").val('');
        }
    });

    /*Search */
    $('.search-input').keyup(function () {
        lookup(this.value);
        $(".category").removeClass("sub-menu-open");
    });

    function lookup(searchinput) {
        if (searchinput.length === 0) {
            $(".search-result-wrapper").removeClass("result-show");
        } else {
            $(".search-result-wrapper").addClass("result-show");
            $('.loading-wrapper').fadeOut("fast");
            /*$.ajax({
                url: "",
                method: "POST",
                data: searchinput,
                beforeSend: function () {
                    $('.loading-wrapper').fadeIn();
                },
                success: function (response) {
                    $(".search-result-wrapper").fadeIn();
                    $('.loading-wrapper').fadeOut("fast");
                }
            });*/
        }
    }

    $(".close-search-result").click(function () {
        $(".search-result-wrapper").removeClass("result-show");
        if($("header").data("xs") === true ){
            $("header").addClass("sidebar-xs");
        }
        $(".search-input").val('');
    });

    $("header[data-xs='true'] .search-input-wrapper").click(function () {
        $("header").removeClass("sidebar-xs");
        $(".category").removeClass("sub-menu-open");
        $(".search-input").focus();
    });

    $('.dropdown-slide').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
    });

    $('.dropdown-slide').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
    });

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {
                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }
                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation();
    });


    $('.custom-select').select2({
        minimumResultsForSearch: Infinity
    });

    /* Slides */

    /* top slide */
    if($().owlCarousel){
        $('.main-slider').owlCarousel({
            animateOut: 'fadeOut',
            smartSpeed: 1200,
            autoplay: true,
            autoplayTimeout: 6000,
            items: 1,
            margin: 0,
            loop: true,
            dots: true,
            nav: true,
            navText:['<img src="assets/images/1x/left.png" width="20"/>','<img src="assets/images/1x/right.png"  width="20"/>'],
        });

        $('.carousel-products').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            smartSpeed: 700,
            autoplayHoverPause: true,
            margin: 10,
            nav: true,
            navText: ['<img src="assets/images/1x/white_left.png" width="15"/>','<img src="assets/images/1x/white_right.png"  width="15"/>'],
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });

    }

    function s(e) {
        var t = $("input[name=" + e + "]").val();
        return "" !== t ? 0 : t;
    }

    if($().slider){
        $(".slider-range").slider({
            range: !0,
            min: 0,
            max: 2500,
            step: 10,
            values: [s("min_price"), s("max_price")],
            slide: function (e, t) {
                $("input[name=min_price]").val(t.values[0]);
                $("input[name=max_price]").val(t.values[1]);
            },
        });
    }

    $("input[name=min_price]").change(function (e) {
        var t = $(this).val(),
            a = $("input[name=max_price]").val();
        if(t > a){
            $(this).val(t);
            $("input[name=max_price]").val(a);
            $(".slider-range").slider({ values: [t, a] });
        }
    });

    $("input[name=max_price]").change(function (e) {
        var t = $(this).val(),
            a = $("input[name=min_price]").val();
        if(t < a){
            $(this).val(a);
            $(".slider-range").slider({ values: [a, t] });
        }
    });

    if (!$().lightSlider) {
        return;
    } else {
        $('.product-images-wrapper').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            thumbItem: 4,
            slideMargin: 0,
            enableDrag: false,
            currentPagerPosition: 'left',
            onSliderLoad: function (el) {
                el.lightGallery({
                    selector: '.product-images-wrapper .lslide',
                    counter: false,
                    download: true,
                    autoplay: false,
                    autoplayControls: false,
                    actualSize: false,
                    fullScreen: false,
                    share: false,
                    auto: false,
                    pager: false,
                    loadYoutubeThumbnail: true,
                    youtubeThumbSize: 'default',
                    loadVimeoThumbnail: true,
                    vimeoThumbSize: 'thumbnail_medium',
                    startClass: '',
                    enableSwipe: true,
                    enableDrag: true,
                    speed: 500
                });
            }
        });
    }

    function count_up($this){
        var current_count=$this.prev("input[type='number']").val();
        $this.prev("input[type='number']").val(++current_count);
        return current_count;
    }

    function count_down($this){
        var current_count=$this.next("input[type='number']").val();
        if($this.parent().hasClass("not-less-than-one") && current_count>1){
            $this.next("input[type='number']").val(--current_count);
        }else if(!$this.parent().hasClass("not-less-than-one") && current_count>0){
            $this.next("input[type='number']").val(--current_count);
        }
        return current_count;
    }

    $(document).on("click", ".sub-product-count .count_up, .sub-product-count .count_down", function () {
        var current_price_block=$(".price-current span"),
            old_price_block=$(".price-old span"),
            pr_price=$(this).parents(".sub-item-price-block").data("module-price"),
            pr_old_price=$(this).parents(".sub-item-price-block").data("module-old-price"),
            input_disabled=$(this).parent(".sub-product-count").find(".count-input").prop("disabled"),
            state=$(this).parents(".sub-item-wrapper").attr("data-state");

        if(!input_disabled){
            if($(this).hasClass("count_up")){
                var current_count=count_up($(this));
                $(this).parents(".sub-item-wrapper").attr("data-state", 1);
                current_price_block.text(((parseFloat(current_price_block.text()) + parseFloat(pr_price))));
                old_price_block.text(((parseFloat(old_price_block.text()) + parseFloat(pr_old_price))));
            }else if($(this).hasClass("count_down")){
                var current_count=count_down($(this));
                if(current_count > 0){
                    $(this).parents(".sub-item-wrapper").attr("data-state", 1);
                    current_price_block.text((parseFloat(current_price_block.text()) - parseFloat(pr_price)));
                    old_price_block.text(((parseFloat(old_price_block.text()) - parseFloat(pr_old_price))));
                }else if(current_count == 0 && state == "1"){
                    $(this).parents(".sub-item-wrapper").attr("data-state", 0);
                    current_price_block.text((parseFloat(current_price_block.text()) - parseFloat(pr_price)));
                    old_price_block.text((parseFloat(old_price_block.text()) - parseFloat(pr_old_price)));
                }
            }
        }


    });

    $(".sub-item-included input[type='checkbox']").on("change", function () {
        var isEnabled = $(this).prop("checked");
        var input_number=$(this).parents(".sub-item-wrapper").find(".count-input");
        var sub_pr_price=$(this).parents(".sub-item-wrapper").find(".sub-item-price-block").attr("data-module-price");
        var sub_pr_old_price=$(this).parents(".sub-item-wrapper").find(".sub-item-price-block").attr("data-module-old-price");
        var product_price=$(".price-current span");
        var product_old_price=$(".price-old span");

        var total_sub_price=input_number.val()*sub_pr_price;
        var total_sub_old_price=input_number.val()*sub_pr_old_price;

        if(isEnabled){
            input_number.prop("disabled", false);
            input_number.parent(".sub-product-count").css("background", "#ffffff");
            product_price.text(((parseFloat(product_price.text()) + parseFloat(total_sub_price))));
            product_old_price.text(((parseFloat(product_old_price.text()) + parseFloat(total_sub_old_price))));
        }else{
            input_number.prop("disabled", true);
            input_number.parent(".sub-product-count").css("background", "#f0f0f0");
            product_price.text(((parseFloat(product_price.text()) - parseFloat(total_sub_price))));
            product_old_price.text(((parseFloat(product_old_price.text()) - parseFloat(total_sub_old_price))));
        }


    })


});
