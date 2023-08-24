'use strict'

const optionLivro = document.getElementById('book-option')

function showBooks () {

    optionLivro.classList.remove('overflow') 
 
 }
 
 function exit () {
 
     optionLivro.classList.add('overflow')
 
 }
 
 
optionLivro.addEventListener('mouseover', showBooks)
optionLivro.addEventListener('mouseenter', showBooks)
optionLivro.addEventListener('mouseleave', exit)
