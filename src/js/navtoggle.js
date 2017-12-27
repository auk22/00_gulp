(function() {
  // ヘッダーの高さを取得
  var hHeight = $('.l-header').outerHeight();

  // ハンバーガーアイコン制御
  $('#nav-toggle').click(function(){
    $(this).toggleClass('is-open');
    // if($(this).hasClass('is-open')){
    //   $(this).next().fadeIn();
    //   $('.c-nav__bgcover').fadeIn();
    // } else {
    //   $(this).next().fadeOut();
    //   $('.c-nav__bgcover').fadeOut();
    // }
  })

  // 閉じるボタン、メニュー外をタップで閉じる
  $('.c-nav__item--close, .c-nav__bgcover').click(function(){
    if($('#nav-toggle').hasClass('is-open')){
      if($('#nav-accordion').hasClass('is-open')){
        $('#nav-accordion').toggleClass('is-open');
        $('#nav-accordion').next().slideToggle();
      }
      $('#nav-toggle').toggleClass('is-open');
      $('#nav-toggle').next().fadeOut();
      $('.c-nav__bgcover').fadeOut();
    }
  })

  // アコーディオンメニュー
  $('#nav-accordion').click(function(){
    $(this).toggleClass('is-open');
    $(this).next().slideToggle();
  })
})();
