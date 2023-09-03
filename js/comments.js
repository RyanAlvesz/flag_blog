'use strict'

const comments = [

    {
        nome: 'lopes.jaoo',
        mensagem: 'Acho a SELIBI muito importante, pois dá visibilidade para escritores essenciais da literatura brasileira.',
        inglês: 'I think SELIBI is very important, as it gives visibility to essential writers of Brazilian literature.',
        id: 'joao'
    },

    {
        nome: 'ribeiro.leitor',
        mensagem: 'Li o livro Gente de estimação, achei muito bom principalmente pelo fato de ser um livro infantil, já o contexto da história é pesado. Acho o Pedro Bandeira muito criativo.',
        inglês: "I read the book Pet People, I thought it was very good mainly because it is a children's book, since the context of the story is heavy. I think Pedro Bandeira is very creative.",
        id: 'ribeiro'
    },

    {
        nome: 'g3edes',
        mensagem: 'Gosto da forma que ele escreve, mesmo com a minha idade, consegui gostar de um livro infantil.',
        inglês: "I like the way he writes, even at my age, I liked a children's book.",
        id: 'guedes'
    },

    {
        nome: 'kovaski',
        mensagem: 'Acho o papel da SELIBI muito importante, ela abre portas para falar e conhecer novos autores e seus trabalhos. Muito legal de fazer. 👊',
        inglês: 'I think the role of SELIBI is very important, it opens doors to talk and meet new authors and their work. Very cool to do. 👊',
        id: 'julia'
    },

    {
        nome: 'nicholascolmenero',
        mensagem: 'Eu adoro a SELIBI, um dos melhores momentos do ano.',
        inglês: 'I love SELIBI, one of the best moments of the year.',
        id: 'nicholas'
    },

    {
        nome: 'hbrielaf',
        mensagem: 'Adoro a Semana do Livro da Biblioteca do SESI, porque faz a gente conhecer autores nacionais que não conhecemos, fazemos trabalhos sobre e ainda talvez ganhamos um prêmio de quebra kkkkk.',
        inglês:`I love SESI's "Library Book Week" because it makes us meet national authors we don't know, we do work on and maybe even win a prize in addition hahahahaha`,
        id: 'gabriela'
    },

    {
        nome: 'mary.jane',
        mensagem: 'Acho que a SELIBI é uma grande opotunidade para conhecermos melhor a literatura brasileira e autores nacionais.',
        inglês: 'I think SELIBI is a great opportunity for us to get to know Brazilian literature and national authors better.',
        id: 'mariana'
    },

    {
        nome: 'sara_96',
        mensagem: 'Estou ansiosa para ver as produções, principalmente as do 3º ano.',
        inglês: "I'm looking forward to seeing the productions, especially the 3rd year ones.",
        id: 'sara'
    },

    {
        nome: 'paiva',
        mensagem: 'A selibi é muito importante pois apresenta para os alunos um pouco mais da literatura brasileira',
        inglês: 'Selibi is very important because it introduces students to a little more about Brazilian literature',
        id: 'paiva'
    }

] 

const createComment = (comments) => {

    const commentInfo = document.createElement('div')
    commentInfo.classList.add('comment-info')
    
    const user = document.createElement('div')
    user.classList.add('user')

    const icon = document.createElement('div')
    icon.classList.add('icon')
    icon.id = comments.id

    const username = document.createElement('span')
    username.classList.add('username')
    username.textContent = comments.nome

    const commentPT = document.createElement('p')
    commentPT.classList.add('comment')
    commentPT.classList.add('portugues')
    commentPT.textContent = comments.mensagem

    const commentEN = document.createElement('p')
    commentEN.classList.add('comment')
    commentEN.classList.add('english')
    commentEN.textContent = comments.inglês

    commentInfo.replaceChildren(user, commentPT, commentEN)
    user.replaceChildren(icon, username)

    return commentInfo

}
    
const showComments = (comments) => {

    const commentsContainer = document.getElementById('comments')
    const comment = createComment(comments)
    commentsContainer.appendChild(comment)

}

comments.forEach(showComments)

