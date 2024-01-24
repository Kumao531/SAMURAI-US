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
  /* メールアドレス */
  $('#email-obj').blur(function () {
    inputCheck();
  });
  /* 問合せ回答欄 */
  $('#textarea-obj').blur(function () {
    inputCheck();
  });

  // 選択欄のイベントが発生したときにチェックする
  $('#textarea-obj').changed(function () {
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
    let error = false;

    // 名前の入力がないとき
    if ($('#username-obj').val() == '') {
      // 背景を赤にする
        $('#username-obj').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "名前を入力してください。\n";
    }
    // エラーでなければ背景色を戻す
    else {
      $('#username-obj').css('background-color', '#ffffff');
    }


    /* お問い合わせの種類が「その他」なら、その他の理由の確認をする */
    /*if ($('#inquiries-purpose').val() == "その他") {
      console.log('その他');
      if ($('#other-reason').val() == '') {
        // 背景を赤にする
        $('#other-reason').css('background-color', '#f79999');
        // エラー状態を記録する
        error = true;
        message += "お問い合わせの「その他」の理由をご記入ください。\n";
      } else {
        $('#other-reason').css('background-color', '#ffffff');
      }
    } else {
        $('#other-reason').css('background-color', '#ffffff');
    }*/

/*
    // 性別の選択状態のチェックと、選択さえたものを取り出す
    var sex_flag = false;  // radioボタンの選択の有無を記録するフラグ
    var sex_node = document.getElementsByName('sex');  // ラジオボタンの配列を取り出す
    var what_sex = "";  // 性別の値を記録する
    for (var i = 0; i < sex_node.length; ++i) {
      if (sex_node[i].checked) {
        what_sex = sex_node[i].value;
        console.log('what_sex=' + what_sex);
        sex_flag = true;
      }
    }
    // 性別の選択がないとき
    if ( !sex_flag ) {
      // 背景を赤にする
        $('#title-sex').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "性別を選択してください。\n";
    }
    // エラーでなければ背景色を戻す
    else {
      $('#title-sex').css('background-color', '#ffffff');
    }
*/

    // メールアドレスの入力がないとき
    if ($('#email-obj').val() == '') {
      // 背景を赤にする
      $('#email-obj').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "電子メールアドレスを入力してください。\n";
    }
    // エラーでなければ背景色を戻す
    else {
      $('#email-obj').css('background-color', '#ffffff');
    }

    // 弊社を知ったきっかけの回答が1つも入力されていないときには
    if ( $('[name="whereis"]:checked').length == 0) {
      // 入力指示タイトルランの背景色を赤にする
      $('#question-01').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "ミカゲ．ＩＴ．ラボを知ったきっかけを1つ以上指定してください。\n";
    }
    // エラーでなければ背景色を戻す
    else {
      $('#question-01').css('background-color', '#ffffff');
    }

    // 要望内容欄の入力がないとき
    if ($('#textarea-obj').val() == '') {
      // 背景を赤にする
      $('#textarea-obj').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "お問い合わ内容の入力してください。\n";
    }
    // 要望の入力が800文字を超えた場合
    else if ($('#textarea-obj').val().length > 100) {
      // 背景を赤にする
      $('#textarea-obj').css('background-color', '#f79999');
      // エラー状態を記録する
      error = true;
      message += "お問い合わ内容は800文字以下にしてください。\n";
    }
    // エラーでなければ背景色を戻す
    else {
      $('#textarea-obj').css('background-color', '#ffffff');
    }


  }


});
