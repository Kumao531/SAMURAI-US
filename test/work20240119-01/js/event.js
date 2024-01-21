const btn = document.getElementById('btn-info');

const url = location.href;
const path = location.pathname;

console.log('url(' + url + ')');
console.log('pathname(' + path + ')');

btn.addEventListener('mouseenter', () => {
  /*
  btn.setAttribute('src', '../images/TouchCompanyInfoSearch.png');
  */
  btn.setAttribute('src', 'TouchCompanyInfoSearch.png');
});

btn.addEventListener('mouseleave', () => {
  /*
  btn.setAttribute('src', '../images/PaleCompanyInfoSearch.png');
  */
  btn.setAttribute('src', 'PaleCompanyInfoSearch.png');
});
