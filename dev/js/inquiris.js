$(function () {

  // 「送信」ボタンがクリックの時の処理
  $('#check-btn').on('click', function (event) {

    // デフォルトに設定された送信処理を拒否
    event.preventDefault();

    // 入力チェック処理をした結果、エラーがあるかどうかを判定
    let result = inputCheck();
  });


  // フォーカスが外れた時（blur）に入力フォームをチェックする
  /* お名前 */
  $('#username-obj').blur(function () {
    inputCheck();
  });
  /* 電話番号 */
  $('#username-obj').blur(function () {
    inputCheck();
  });


  // お問い合わせのフォームの入力チェック
  function inputCheck() {

    console.log('関数inputCheckが呼び出されました');

    // エラー結果を格納する変数
    let result;
    // エラーメッセージを記録する変数
    let message = "";
    // エラーがなければ false 、エラーがあれば true
    let error = "false";

    // 名前の入力がないとき
    if ($('#username-obj').val() == '') {
      // 背景を赤にする
      $('#username-obj').css('background-color', '#f79999');
      // エラー状態を記録する
      error = tre;
      message += "名前を入力してください。\n";
    } else {
      // エラーがなければ（なくなったら）背景色を戻す
      // $('#name').css('background-color', '#f79999');
    }



  }

});
