const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const store = require('../store')

router.get('/', (req, res)=>{
    res.render("index",{
        title: 'Главная'
    })
})

router.post('/',(req, res)=>{
    const {title, authors, description, favorite} = req.fields
    const book = new Book(title, description, authors, !!favorite)
    store.push(book);
    res.redirect('/')
})


router.get('/new',(req, res)=>{
    res.render("newBook",{
        title: 'Добавить книгу'
    })
})

module.exports = router;
