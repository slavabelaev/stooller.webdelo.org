/**
 * Created by dmitricercel on 10/31/17.
 */

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}
function pathPrepareByLength ($el, length) {
    $el.css("stroke-dasharray", length);
    $el.css("stroke-dashoffset", length);
}

var stoollerToStripe$ = $("#stooller-to-stripe");
var clientToStripe$   = $("#client-to-stripe");
var vendortToStripe$  = $("#vendor-to-stripe");
var clientToStooller$ = $("#client-to-stooller");
var stripeBg$         = $("#stripe-bg-rect");

var stoollerCircle$   = $("#stooller-circle");
var clientCircle$     = $("#client-circle");
var vendorCircle$     = $("#vendor-circle");

var noop$ = $("#noop");



var circleLineLength = 147.65;
pathPrepare(stoollerToStripe$);
pathPrepare(clientToStripe$);
pathPrepare(vendortToStripe$);
pathPrepare(stripeBg$);
pathPrepareByLength(stoollerCircle$, circleLineLength);
pathPrepareByLength(clientCircle$, circleLineLength);
pathPrepareByLength(vendorCircle$, circleLineLength);


// pathPrepare(clientToStooller$);

var creditPath = {
    autoRotate: false,
    type: "soft",
    values: [
        {x: 410, y: 40},
        {x: 412, y: 30},
        {x: 414, y: 20},
        {x: 416, y: 10},
        {x: 418, y: -43}
    ]
};

var stoollerCoinPath = {
    autoRotate: false,
    type: "soft",
    values: [
        {x: 460, y: 10},
        {x: 523, y: 124}
    ]
};
var vendorCoinPath = {
    autoRotate: false,
    type: "soft",
    values: [
        {x: 490, y: 10},
        {x: 590, y: 124}
    ]
};

var coinToStoollerPath = {
    autoRotate: false,
    type: "soft",
    values: [
        {x: 523, y: 154},
        {x: 523, y: 194},
        {x: 523, y: 362}
    ]
};

var coinToVendorPath = {
    autoRotate: false,
    type: "soft",
    values: [
        {x: 590, y: 154},
        {x: 590, y: 194},
        {x: 600, y: 204},
        {x: 817, y: 205}
    ]
};

    var stripeTimeline = new TimelineMax({
        onUpdate: function(){
            $('.timer').text( secondsToMMSS(stripeTimeline.duration()-stripeTimeline.time()) );
        },
        onComplete: function () {
            $('.timer').text( secondsToMMSS(stripeTimeline.duration()) );
            $('.payments-pause').fadeOut(100, function () {
                $('.payments-repeat').fadeIn();
            });
        }
    })
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-0', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-0', 0.3, { opacity: 0 })
    .to('#basket-container', 0.3, { x:560 })
    .add([
        TweenMax.to(clientToStooller$, 0.3, { opacity: 0 }),
        TweenMax.to('#basket-container', 0.3, { opacity: 0 }),
        TweenMax.to('#stooller-container', 1, { x:0, y:276, ease: CustomEase.create("custom", "M0,0 C0.266,0.412 0.066,0.14 0.066,0.152 0.066,0.2 0.78,1 1,1") }),
        TweenMax.to('#client-container', 1, { x:0, y:0 })
    ])
    .to(stoollerToStripe$, 0.4, {strokeDashoffset: 0, strokeDasharray: stoollerToStripe$[0].getTotalLength(), ease:Linear.easeNone})
    .to(stoollerCircle$, 0.2, {strokeDashoffset: 0, strokeDasharray: circleLineLength, ease:Linear.easeNone})
    .to('#stripe-logo', 0.2, { opacity: 1 })
    .to(stripeBg$, 0.2, {strokeDashoffset: 0, strokeDasharray: stripeBg$[0].getTotalLength()+1, ease:Linear.easeNone})
    .to(clientCircle$, 0.2, {strokeDashoffset: 0, strokeDasharray: circleLineLength, ease:Linear.easeNone})
    .to(clientToStripe$, 0.4, {strokeDashoffset: 0, strokeDasharray: clientToStripe$[0].getTotalLength(), ease:Linear.easeNone})
    .to('#credit-container', 0.6, { opacity: 1 })
    .to('#message-1', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-1', 0.3, { opacity: 0 })
    .to('#credit-container', 0.5, {css:{bezier:creditPath}, ease:Power1.easeInOut})
    .to('#message-2', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-2', 0.3, { opacity: 0 })
    .to(vendorCircle$, 0.2, {strokeDashoffset: 0, strokeDasharray: circleLineLength, ease:Linear.easeNone})
    .to('#message-3', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-3', 0.3, { opacity: 0 })
    .to(vendortToStripe$, 0.4, {strokeDashoffset: 0, strokeDasharray: vendortToStripe$[0].getTotalLength()+1, ease:Linear.easeNone})
    .to('#vendor-container', 0.6, { opacity: 1 })
    .to('#message-4', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-4', 0.3, { opacity: 0 })
    .add([
        TweenMax.to('#coin-of-dollar-stooller', 0.1, {opacity: 1}),
        TweenMax.to('#coin-of-dollar-vendor', 0.1, {opacity: 1})
    ])
    .add([
        TweenMax.to('#coin-of-dollar-stooller', 0.5, {css:{bezier:stoollerCoinPath}, ease:Power1.easeInOut}),
        TweenMax.to('#coin-of-dollar-vendor', 0.5, {css:{bezier:vendorCoinPath}, ease:Power1.easeInOut})
    ])
    .add([
        TweenMax.to('#coin-stooller-bg', 0.1, {opacity: 1, ease:Linear.easeNone}),
        TweenMax.to('#coin-vendor-bg', 0.1, {opacity: 1, ease:Linear.easeNone}),
        TweenMax.to('#message-5', 0.3, { opacity: 1 })
    ])
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-5', 0.3, { opacity: 0 })
    .add([
        TweenMax.to('#coin-of-dollar-stooller', 0.5, {css:{bezier:coinToStoollerPath}, ease:Power1.easeInOut}),
        TweenMax.to('#coin-of-dollar-vendor', 0.5, {css:{bezier:coinToVendorPath}, ease:Power1.easeInOut})
    ])
    .to('#message-6', 0.3, { opacity: 1, onComplete: function (){stripeTimelineControl.pause();}})
    .to(noop$, 2, {strokeWidth:3, ease:Linear.easeNone})
    .to('#message-6', 0.3, { opacity: 0 })
    .stop();

$('.timer').text(secondsToMMSS(stripeTimeline.duration()));

function secondsToMMSS(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    // round seconds
    seconds = parseInt(seconds);

    var result  = (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
}

var controls = function () {
    var playButton   = $('.payments-play'),
        pauseButton  = $('.payments-pause'),
        repeatButton = $('.payments-repeat'),
        timer        = $('.timer'),
        timeline ;

    this.setTimeline = function ( line ) {
        timeline = line;
        return this;
    };

    this.play = function () {
        timeline.play();
        playButton.fadeOut(100, function () {
            pauseButton.fadeIn(300);
        });

        timer.addClass('active');
        return this;
    };

    this.pause = function () {
        timeline.pause();
        pauseButton.fadeOut(100, function () {
            playButton.fadeIn(300);
        });
        timer.removeClass('active');
        return this;
    };

    this.repeat = function () {
        timeline.seek(0).play();
        repeatButton.fadeOut(100, function () {
            pauseButton.fadeIn(300);
        });
        timer.addClass('active');
        return this;
    };
};

var stripeTimelineControl = new controls();
$(function(){
    stripeTimelineControl.setTimeline(stripeTimeline);
    $('.payments-play').click(stripeTimelineControl.play);
    $('.payments-pause').click(stripeTimelineControl.pause);
    $('.payments-repeat').click(stripeTimelineControl.repeat);
});