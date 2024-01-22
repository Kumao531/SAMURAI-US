$(function () {

  $('#id-text').blur(function () {
    inputCheck();
  });
  $('#id-tel').blur(function () {
    inputCheck();
  });

  function inputCheck() {

    // 名前の入力がないとき
    if ($('#id-text').val() == '') {
      // 背景を赤にする
      $('#id-text').css('background-color', '#f79999');
    }
    // 電話番号の入力がないとき
    if ($('#id-tel').val() == '') {
      // 背景を赤にする
      $('#id-tel').css('background-color', '#f79999');

    }
  }

});