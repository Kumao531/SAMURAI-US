$(function () {

  // 「送信」ボタンがクリックの時の処理
  $('#check-btn').on('click', function (event) {

    // デフォルトに設定された送信処理を拒否
    event.preventDefault();

    // 入力チェック処理をした結果、エラーがあるかどうかを判定
    let result = inputCheck();
  });


  // フォーカスが外れた時（blur）に入力フォームをチェックする

  $('#username-obj').blur(function () {
    inputCheck();
  });


  // お問い合わせのフォームの入力チェック
  function inputCheck() {
    console.log('inputCheck関数の呼び出し');
  }

});
