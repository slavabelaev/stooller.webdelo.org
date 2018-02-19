if (window.innerWidth >= 768) {
    $('#main').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[
            'url-section-header',
            'url-about',
            'url-project-works',
            'url-intelligent-moving',
            'url-google-services-directions',
            'url-google-services-places',
            'url-google-services-calendar',
            'url-google-services-maps',
            'url-google-services-autocomplete',
            'url-twilio-sms-alerts',
            'url-stripe-payments',
            'url-amazon-web-services',
            'url-amazon-web-services-mailing',
            'url-amazon-web-services-rds'
        ],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: '#header, .footer',
        responsiveWidth: 768,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
            googleServices(nextIndex, direction);
            amazonServices(nextIndex, direction);
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
}

function googleServices(nextIndex, direction) {
    if ( nextIndex >= 4 && nextIndex <=10 ) {
        if ( nextIndex === 5 && direction === 'down' ) {
            $('.google-services-menu').animate({ top: '50%' }, 50, function () {
                $(this).addClass('active');
            });
        }
        if ( nextIndex === 4 && direction === 'up' ) {
            $('.google-services-menu').animate({top: '150%'}, 50, function () {
                $(this).removeClass('active');
            });
        }

        if ( nextIndex === 9 && direction === 'up' ) {
            $('.google-services-menu').animate({ top: '50%' }, 50, function () {
                $(this).addClass('active');
            });
        }
        if ( nextIndex === 10 && direction === 'down' ) {
            $('.google-services-menu').animate({ top: '-150%' }, 50, function () {
                $(this).removeClass('active');
            });
        }
        if ( nextIndex === 9 ) {
            $('#autocomplete-video').get(0).play();
        }
        $('.google-services-menu ol li').removeClass('active');
        $( $('.section').eq(nextIndex-1).find('.google-service').data('menu-item') ).addClass('active');
        console.log($('.section').eq(nextIndex-1).find('.google-service').data('menu-item'));
    }
}

function amazonServices(nextIndex, direction) {
    if ( nextIndex >= 11 ) {
        if ( nextIndex === 12 && direction === 'down' ) {
            $('.amazon-web-services-menu').animate({ top: '50%' }, 50, function () {
                $(this).addClass('active');
            });
        }
        if ( nextIndex === 11 && direction === 'up' ) {
            $('.amazon-web-services-menu').animate({top: '150%'}, 50, function () {
                $(this).removeClass('active');
            });
        }

        $('.amazon-web-services-menu ol li').removeClass('active');
        $( $('.section').eq(nextIndex-1).find('.amazon-service').data('menu-item') ).addClass('active');
        console.log($('.section').eq(nextIndex-1).find('.amazon-service').data('menu-item'));
    }
}