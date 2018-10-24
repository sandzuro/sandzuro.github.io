var content;

function getLanguage() {
  (document.documentElement.lang == null) ? setLanguage('eng') : false;

  $.ajax({
    url:  './language/index/' +  document.documentElement.lang + '.json',
    dataType: 'json', async: false, dataType: 'json',
    success: function (data) {
      var intro = document.getElementById('intro')
      intro.innerHTML = data.intro
      content = data
    }
  });
}

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang)
  getLanguage()
}

(function() {
  getLanguage()
})()
