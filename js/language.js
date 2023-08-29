'use strict'

const buttonChangeLanguageEUA = document.getElementById('change-language-eua')
const buttonChangeLanguagePT = document.getElementById('change-language-pt')
const buttonChangeLanguageEUAMobile = document.getElementById('change-language-eua-mobile')
const buttonChangeLanguagePTMobile = document.getElementById('change-language-pt-mobile')

function changeLanguageToEnglish () {
    
    const flagPT = document.getElementById('change-language-pt')
    const flagEUA = document.getElementById('change-language-eua')
    const english = document.getElementsByClassName('english')
    const portugues = document.getElementsByClassName('portugues')

    for (let i=0;i<english.length;i++){
        english[i].style.display = 'block'
    }

    for (let i=0;i<portugues.length;i++){
        portugues[i].style.display = 'none'
    }

    flagEUA.style.display = 'none'
    flagPT.style.display = 'block'
    flagPT.style.height = '100%'

}

function changeLanguageToPortuguese () {
    
    const flagEUA = document.getElementById('change-language-eua')
    const flagPT = document.getElementById('change-language-pt')
    const english = document.getElementsByClassName('english')
    const portugues = document.getElementsByClassName('portugues')

    for (let i=0;i<english.length;i++){
        english[i].removeAttribute('style')
    }

    for (let i=0;i<portugues.length;i++){
        portugues[i].removeAttribute('style')
    }

    flagPT.style.display = 'none'
    flagEUA.style.display = 'block'
    flagEUA.style.height = '100%'

}

buttonChangeLanguageEUA.addEventListener('click', changeLanguageToEnglish)
buttonChangeLanguagePT.addEventListener('click', changeLanguageToPortuguese)
buttonChangeLanguageEUAMobile.addEventListener('click', changeLanguageToEnglish)
buttonChangeLanguagePTMobile.addEventListener('click', changeLanguageToPortuguese)