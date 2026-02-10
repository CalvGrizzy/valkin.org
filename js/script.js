const THEME_PATH = 'css/';

window.currentTheme = 'css/style.css';

function changeTheme(stylesheet) {
  document.getElementById('stylesheet').setAttribute('href', THEME_PATH + stylesheet);
  window.currentTheme = (THEME_PATH + stylesheet)
  localStorage.setItem('selectedTheme', stylesheet);
}

window.onload = function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    changeTheme(savedTheme);
  }
}