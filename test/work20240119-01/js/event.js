/*
var btn = document.getElementById('sample');

imgElem.onmouseover = function() {
	this.src = '../images/HotCompanyInfoSearch.png';
};

imgElem.onmouseout = function() {
	this.src = '../images/PaleCompanyInfoSearch.png';
};
*/
const btn = document.getElementById('sample');


/*
btn.addEventListener('onmouseover', () => {
  // コンソルにコメントを残す
  console.log('onmouseoverされた！');
});
*/

// 「企業情報を検索する用のボタン」にマウスが入ってきた時に実行する
btn.addEventListener('mouseenter', () => {
  // コンソルにコメントを残す
  console.log('mouseenterが発生した！');
});

// 「企業情報を検索する用のボタン」からマウスが外れた時に実行する
btn.addEventListener('mouseleave', () => {
  // コンソルにコメントを残す
  console.log('mouseleaveが発生した！');
});
