/***
 * 検索用ボタンに関する処理
 ***/

/* 検索ボタン要素の取得 */
//　企業情報を検索する用のボタン
const btnSearchEnterpriseInfo = document.getElementById('button-company-info');


btnSearchEnterpriseInfo.onmouseover = function () {
  console.count('onmouseoverが発生しました！');
  this.src = "../images/Page-aboutus/TouchCompanyInfoSearch.png";
};

// 「企業情報を検索する用のボタン」がクリックされたときに実行する
btnSearchEnterpriseInfo.addEventListener('onmouseover', () => {
  // コンソルにコメントを残す
  console.log('onmouseover！');
  this.src = "../images/Page-aboutus/TouchCompanyInfoSearch.png";
});

// 「企業情報を検索する用のボタン」がクリックされたときに実行する
btnSearchEnterpriseInfo.addEventListener('click', () => {
  // コンソルにコメントを残す
  console.log('クリックされた！');
});

// 「企業情報を検索する用のボタン」にマウスが入ってきた時に実行する
btnSearchEnterpriseInfo.addEventListener('mouseenter', () => {
  // コンソルにコメントを残す
  console.log('mouseenterが発生した！');
});

// 「企業情報を検索する用のボタン」からマウスが外れた時に実行する
btnSearchEnterpriseInfo.addEventListener('mouseleave', () => {
  // コンソルにコメントを残す
  console.log('mouseleaveが発生した！');
});
