$(function(){
    //wow js
    new WOW ().init()

///ハンバーガーメニュー

jQuery(".drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery(".drawer-icon").toggleClass("is-active");
  jQuery(".drawer-content").toggleClass("is-active");
  jQuery(".drawer-background").toggleClass("is-active");
  return fault;
});

//スムーススクロール

jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery(".header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  console.log(id);
  console.log(position);
  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    300
  );
});

new WOW().init();

//トップの点滅文字

$(function(){
  $(".typed").typed({
    strings:["Welcome to my portfolio.","Let's scroll down.","Welcome to my portfolio."],
    typeSpeed:100,
    startDelay:1000,
    backSpeed:20,
    loop:true,
    loopCount:1,
    showCursor:false,
    backDelay:500
  });
});




//スクロールバー出現

jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".to-top").addClass("is-show");
  } else {
    jQuery(".to-top").removeClass("is-show");
  }
});

//トップボタンの選択

jQuery(".header__nav li a").on("click", function () {
  jQuery(".header__nav li a").removeClass("is-active");
  jQuery(this).addClass("is-active");
});

jQuery(".qa-box__q").on("click", function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children(".qa-box__icon").toggleClass("is-open");
});

//モーダルの出現

jQuery('.js-close-button').on('click',function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-button').on('click',function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});
})