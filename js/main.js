$(document).ready(function () {
    $('.callback-form__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        draggable: false,
        swipe: false,
        // prevArrow: '<bu class="slick-prev"></div>',
        // nextArrow: '<div class="slick-next"></div>',
        appendArrows: $('.callback-form___row-arrows'),
    });
    $('button.slick-next').css({'display': 'none'});
    var input_a = $('.input_a');
    var input_b = $('.input_b');
    var input_c = $('.input_c');
    $('.container-registration-form__callback-form').on('change', function () {
        if (input_a.val().length) {
            input_a.addClass('field-is-filled');
        } else {
            input_a.removeClass('field-is-filled');
        }
    });
    $('.container-registration-form__callback-form').on('change', function () {
        if (input_b.val().length) {
            input_b.addClass('field-is-filled');
        } else {
            input_b.removeClass('field-is-filled');
        }
    });
    $('.container-registration-form__callback-form').on('change', function () {
        if (input_c.val().length) {
            input_c.addClass('field-is-filled');
        } else {
            input_c.removeClass('field-is-filled');
        }
    });
    $('.container-registration-form__callback-form').on('change', function () {
        if (input_a.hasClass('field-is-filled') && input_b.hasClass('field-is-filled') && input_c.hasClass('field-is-filled')) {
            $('.callback-form__slider').slick('slickGoTo', '1');
            $('button.slick-next').css({'display': 'block'});
            $('button.slick-prev').css({'display': 'block'});
        } else {
            $('button.slick-next').css({'display': 'none'});
            $('button.slick-prev').css({'display': 'block'});
        }
    });
    $('#reset-btn').click(function () {
        $('.callback-form__slider').slick('slickGoTo', '0');
        $('#selected-categories').empty();
    })
    if (window.jQuery) {
        let jQversion = $.fn.jquery;
        console.log("enabled jQuery version " + jQversion);
    } else {
        console.log("jQuery not found!");
    }
    $('.category-sliders__slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(window).scroll(function () {
        var cls = $('.container-rulers__row');
        if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()) {
            cls.addClass('animated fadeInDown');
        }
    });
    $(window).scroll(function () {
        var cls = $('#l');
        if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()) {
            cls.addClass('animated fadeInLeft');
        }
    });
    $(window).scroll(function () {
        var cls = $('#r');
        if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()) {
            cls.addClass('animated fadeInRight');
        }
    });
    $(window).scroll(function () {
        var cls = $('.content__person-text');
        if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()) {
            cls.addClass('animated fadeIn');
        }
    });
    $(window).scroll(function () {
        var cls = $('.container-registration-form__callback-form');
        if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()) {
            cls.addClass('animated fadeInUp');
        }
    });
    (function () {
        let menuIsOpened = false;
        $('#MobBtn').on('click', function () {
            var $burger = $(this);
            var $firstLine = $burger.find('#f');
            var $secondLine = $burger.find('#s');
            var $thirdLine = $burger.find('#t');
            var $menu = $('.container-menu__m-menu-list');
            menuIsOpened = !menuIsOpened;
            $secondLine.toggle();
            $menu.toggleClass('animated fadeInUp');
            if (menuIsOpened) {
                $firstLine.css({
                    margin: '0',
                    transform: 'rotate(45deg)',
                    transition: '250ms'
                });
                $thirdLine.css({margin: '0', transform: 'rotate(-45deg)'});
            } else {
                $firstLine.css({margin: '4px 0', transform: 'unset'});
                $thirdLine.css({margin: '4px 0', transform: 'unset'});
            }
        });
    });
    function selectCategories(nominateId) {
        let content = '';
        switch (nominateId) {
            case "0":
                $('#categories').html('<p class="red-alert">Не выбрана номинация</p>');
                break;
            case "4":
            case "14":
            case "43":
            case "45":
            case "50":
            case "291":
            case "310":
            case "292":
            case "35":
            case "43":
            case "119":
            case "150":
            case "161":
            case "175":
            case "179":
            case "177":
            case "187":
            case "163":
            case "157":
            case "159":
            case "185":
            case "181":
            case "252":
            case "274":
            case "277":
            case "279":
            case "266":
            case "281":
            case "236":
            case "234":
            case "9":
                $('#categories').html('<p class="info-alert no-categories">Для данной номинации не предусмотрены категории</p>');
                break;
            case "246":
            case "243":
            case "249":
            case "254":
            case "268":
            case "260":
            case "257":
            case "263":
            case "271":
                var categories = ['<option value="001"><div class="categories-item">юниоры</div></option>', '<option value="002"><div class="categories-item">мастера</div></option>', '<option value="003"><div class="categories-item">студенты</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "6":
            case "11":
            case "1":
            case "18":
            case "21":
            case "24":
            case "104":
            case "283":
                var categories = ['<option value="011"><div class="categories-item">студенты</div></option>', '<option value="012"><div class="categories-item">юниоры</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "59":
            case "65":
            case "61":
            case "57":
            case "305":
            case "306":
            case "16":
                var categories = ['<option value="021"><div class="categories-item">студенты</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "293":
            case "40":
            case "52":
            case "47":
            case "304":
                var categories = ['<option value="031"><div class="categories-item">юниоры</div></option>', '<option value="032"><div class="categories-item">мастера</div></option>', '<option value="033"><div class="categories-item">тренера</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "27":
            case "31":
            case "63":
                var categories = ['<option value="041"><div class="categories-item">студенты</div></option>', '<option value="042"><div class="categories-item">юниоры</div></option>', '<option value="043"><div class="categories-item">мастера</div></option>', '<option value="043"><div class="categories-item">тренера</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "229":
                var categories = ['<option value="051"><div class="categories-item">юниоры</div></option>', '<option value="052"><div class="categories-item">мастера</div></option>', '<option value="053"><div class="categories-item">профи</div></option>', '<option value="054"><div class="categories-item">эксперты</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "152":
            case "121":
            case "165":
            case "170":
            case "183":
            case "94":
            case "135":
            case "70":
            case "145":
            case "85":
                var categories = ['<option value="061"><div class="categories-item">студенты</div></option>', '<option value="062"><div class="categories-item">юниоры</div></option>', '<option value="063"><div class="categories-item">мастера</div></option>', '<option value="064"><div class="categories-item">профи</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "131":
            case "90":
                var categories = ['<option value="071"><div class="categories-item">профи</div></option>', '<option value="072"><div class="categories-item">юниоры</div></option>', '<option value="073"><div class="categories-item">мастера</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            case "37":
                var categories = ['<option value="081"><div class="categories-item">студенты</div></option>', '<option value="082"><div class="categories-item">мастера</div></option>'];
                $.each(categories, function (index, value) {
                    content += value;
                });
                var categoriesList = '<select class="category__input">' + content + '</select>';
                $('#categories').html(categoriesList);
                break;
            default:
                $('#categories').html('<p class="red-alert">Незарегистрированная номинация!</p>');
        }
    }
    $('select#nominates').change(function () {
        console.log("select");
        var nominateId = $('select#nominates').val();
        selectCategories(nominateId);
    });
    $('#select-category').click(function () {
        function checkCategory(found_category) {
            if (found_category) {
                let category = $('.category__input option:selected').text();
                return category;
            } else {
                let category = "Без категории";
                return category;
            }
        }
        let found_category = $('select').is('.category__input');
        let item = '<span class="check-categories__item">' + $('#nominates option:selected').text() + ' ' + checkCategory(found_category) + ' <img src="img/q.png"></span>';
        $('#selected-categories').append(item);
    });
    $('#MobBtn').click(function () {
        if($('.container-menu__m-menu-list').is(':visible')){
            $('.container-menu__m-menu-list').hide(300);
            $('#f').removeClass('rotate-f');
            $('#s').css({'display': 'block'});
            $('#t').removeClass('rotate-t');
        }
        if($('.container-menu__m-menu-list').is(':hidden')){
            $('.container-menu__m-menu-list').show(300);
            $('#f').addClass('rotate-f');
            $('#s').css({'display': 'none'});
            $('#t').addClass('rotate-t');
        }
    });
    // let textareaContent = [];
    // $('.reg_form_button').click(function () {
    //     let category = $('.category__input option:selected').text();
    //     let nomination = $("#nominates option:selected").text();
    //     $('.rezult').append('<div class="list__item"><span class="n">' + nomination + '</span><span class="c">' + category + '</span><img src="q.png" width="10" height="10" class="img"></div>');
    //     textareaContent.push(nomination + ' => ' + category);
    //     $('#nominates').val(textareaContent);
    // });
    // $('.rezult').on('click', 'img', function () {
    //     let c = $(this).siblings('.c').text();
    //     let n = $(this).siblings('.n').text();
    //     let t = n + ' => ' + c;
    //     let i = $.inArray(t, textareaContent);
    //     textareaContent[i] = '';
    //     $(this).parent().remove();
    //     $('#nominates').val(textareaContent);
    // });
    // $('.container-menu__m-menu-list').addClass('animated fadeInUp');
    // $('#MobBtn').children('#f').css({'margin': '0', 'transform': 'rotate(45deg)'});
    // function () {
    //     $('.container-menu__m-menu-list').removeClass('animated fadeInUp');
    //     $('#MobBtn').children('#f').css({'margin':'4px 0','transform':'unset'});
    // }
});