$(window).on('load', function(){
  $('section').removeClass('fadeout');
});

$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('section').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 800);
    }
    return false;
  });

  $('.portfolio_introduction').hover(
    function(){
      $(this).animate({"opacity":"0.5"});
    },
    function(){
      $(this).animate({"opacity":"1"});
  });

  $('.portfolio_introduction').each(function(){
    $(this).on('click', function(){
      var target = $(this).data("target");
      $('#' + target).fadeIn();
    })
  });

  $('.close_modal').click(function(){
    $('.modal').fadeOut();
  });

  $('.modal').click(function(event){
    // var clickedElement = $(this);
    if($(this).hasClass('modal')){
        $('.modal').fadeOut(500);
    }
  });
});
