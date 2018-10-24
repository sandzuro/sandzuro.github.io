function openBoxes (langBox, idx, duration, langBoxes) {
  if (idx === 0) {
    left = 0
  } else if (idx === 8) {
    left = 0
  } else {
    left = left + langBoxes[idx - 1].getBoundingClientRect().width - 1
  }

  if (langBox.dataset.lang === 'arrow') {
    langBox.querySelector('svg').style.transform = 'rotate(180deg)'
  }

  langBox.style.left = left + 'px'
  langBox.style.opacity = 1
  langBox.style.visibility = 'visible'
  setTimeout(function(){
    langBox.style.zIndex = '3'
  }, duration)
}

function closeBoxes(langBox, idx, duration) {
  if (idx === 0) return
  if (idx === 8) return

  if (langBox.dataset.lang === 'arrow') {
    if (window.innerWidth > 766 && window.innerWidth < 1365) {
      langBox.style.left = '100%'
    } else if (window.innerWidth > 1366) {
      langBox.style.left = 'calc(100% - 15px)'
    } else {
      langBox.style.right = '7px'
      langBox.style.left = 'auto'
    }
    langBox.querySelector('svg').style.transform = 'rotate(0deg)'
  } else {
    langBox.style.left = '0px'
    langBox.style.zIndex = '-1'
  }

  setTimeout(function(){
    if (langBox.dataset.lang !== 'arrow') {
      langBox.style.opacity = 0
      langBox.style.visibility = 'hidden'
    }
  }, duration)
}

(function() {
  const langSelectors = [].slice.call(document.querySelectorAll('[data-lang-selector]'))
  langSelectors.forEach(function(langSelector,langSelectorIdx) {
    var langBoxes = [].slice.call(langSelector.querySelectorAll('[data-lang]'))

    langBoxes.forEach(function(langBox,langBoxIdx) {
      var newLang
      langBox.addEventListener('click', function(ev) {
        if (ev.target.classList.contains('selected') || langBox.dataset.lang === 'arrow') {
          //do nothing
        } else {
          newLang = ev.target.textContent

          langSelectors.filter(function(item,idxTest) { return idxTest !== langSelectorIdx; }).forEach(function(otherLangSelector) {
            var otherLangBoxes = [].slice.call(otherLangSelector.querySelectorAll('[data-lang]'))
            otherLangBoxes[0].innerHTML = newLang
            otherLangBoxes[langBoxIdx].innerHTML = langSelector.querySelector('.lang-selector_item.selected').textContent
          })
          ev.target.innerHTML = langSelector.querySelector('.lang-selector_item.selected').textContent
          langSelector.querySelector('.lang-selector_item.selected').innerHTML = newLang
        }
      })
    })

    langSelector.addEventListener('click', function(ev) {
      if (langSelector.classList.contains('is-open')) {
        var duration = 180

        langSelector.classList.remove('is-open')

        if (langSelector.dataset.langSelector === 'menu') {
          langBoxes.forEach(function(langBox, idx) {
            closeBoxes(langBox, idx, duration)
          })

          setTimeout(function() {
            //document.querySelector('[data-logo]').style.opacity = 1
            //document.querySelector('[data-logo]').style.visibility = 'visible'
          }, 180)
        } else {
          langBoxes.forEach(function(langBox, idx) {
            closeBoxes(langBox, idx, duration)
          })
        }
      } else {
        var duration = 180
        var left = 0

        langSelector.classList.add('is-open')

        if (langSelector.dataset.langSelector === 'menu') {
          //document.querySelector('[data-logo]').style.opacity = 0
          //document.querySelector('[data-logo]').style.visibility = 'hidden'
          setTimeout(function() {
            langBoxes.forEach(function(langBox, idx){
              openBoxes(langBox, idx, duration, langBoxes)
            })
          }, 180)
        } else {
          langBoxes.forEach(function(langBox, idx){
            openBoxes(langBox, idx, duration, langBoxes)
          })
        }
      }
    })
  })
})();
