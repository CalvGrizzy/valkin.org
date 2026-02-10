const THEME_PATH = 'css/';


function changeTheme(stylesheet) {
  document.getElementById('stylesheet').setAttribute('href', THEME_PATH + stylesheet);
  console.log(THEME_PATH + stylesheet)
  localStorage.setItem('selectedTheme', stylesheet);
}

window.onload = function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    changeTheme(savedTheme);
  }
}