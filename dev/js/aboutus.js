
// 「企業情報」検索ボタンのHTML要素を検索する
const btn_info = document.getElementById( 'btn-company' );
// 「企業情報」ボタンにマウスインしたらボタンの画像を書き換える
btn_info.addEventListener( 'mouseenter', () => {
  btn_info.setAttribute( 'src', 'TouchCompanyInfoSearch.png' );
});
// 「企業情報」ボタンからマウスが出て行ったときボタンの画像を元に戻す
btn_info.addEventListener( 'mouseleave', () => {
  btn_info.setAttribute( 'src', 'PaleCompanyInfoSearch.png' );
});

// 「オフィス」検索ボタンのHTML要素を検索する
const btn_office = document.getElementById( 'btn-office' );
// 「オフィス」ボタンにマウスインしたらボタンの画像を書き換える
btn_office.addEventListener( 'mouseenter', () => {
  btn_office.setAttribute( 'src', 'TouchOfficeInfoSearch.png' );
});
// 「オフィス」ボタンからマウスが出て行ったときボタンの画像を元に戻す
btn_office.addEventListener( 'mouseleave', () => {
  btn_office.setAttribute( 'src', 'PaleOfficeInfoSearch.png' );
});

// 「開発・テスト」検索ボタンのHTML要素を検索する
const btn_dev = document.getElementById( 'btn-dev' );
// 「開発・テスト」ボタンにマウスインしたらボタンの画像を書き換える
btn_dev.addEventListener( 'mouseenter', () => {
  btn_dev.setAttribute( 'src', 'TouchSystemInfoSearch.png' );
});
// 「開発テスト」ボタンからマウスが出て行ったときボタンの画像を元に戻す
btn_dev.addEventListener( 'mouseleave', () => {
  btn_dev.setAttribute( 'src', 'PaleSystemInfoSearch.png' );
});

// 「代表プロフィール」検索ボタンのHTML要素を検索する
const btn_profile = document.getElementById( 'btn-profile' );
// 「代表プロフィール」ボタンにマウスインしたらボタンの画像を書き換える
btn_profile.addEventListener( 'mouseenter', () => {
  btn_profile.setAttribute( 'src', 'TouchProfileInfoSearch.png' );
});
// 「代表プロフィール」ボタンからマウスが出て行ったときボタンの画像を元に戻す
btn_profile.addEventListener( 'mouseleave', () => {
  btn_profile.setAttribute( 'src', 'PaleProfileInfoSearch.png' );
});

// 「モットー」検索ボタンのHTML要素を検索する
const btn_motto = document.getElementById( 'btn-motto' );
// 「モットー」ボタンにマウスインしたらボタンの画像を書き換える
btn_motto.addEventListener( 'mouseenter', () => {
  btn_motto.setAttribute( 'src', 'TouchMottoInfoSearch.png' );
});
// 「モットー」ボタンからマウスが出て行ったときボタンの画像を元に戻す
btn_motto.addEventListener( 'mouseleave', () => {
  btn_motto.setAttribute( 'src', 'PaleMottoInfoSearch.png' );
});