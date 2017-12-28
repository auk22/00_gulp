(function() {

  // ハンバーガーアイコン制御
  $('#nav-toggle').click(function(){
    $(this).toggleClass('is-open');
    if($('.nav-accordion').hasClass('is-open')){
      $('.nav-accordion').removeClass('is-open');
    }
  })

  // 閉じるボタン、メニュー外をタップで閉じる
  $('#nav-close').click(function(){
    // アコーディオンが開いてたら閉じる
    if($('.nav-accordion').hasClass('is-open')){
      $('.nav-accordion').removeClass('is-open');
    }
    $('#nav-toggle').toggleClass('is-open');
  })

  // アコーディオンメニュー
  $('.nav-accordion').click(function(){
    $(this).toggleClass('is-open');

  })
})();
