const express = require('express')
const path = require('path')
const session = require('express-session')
const router = require('./router')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
    secret: 'blog-admin-secret',
    resave: false,
    saveUninitialized: false
}))

// Disponibiliza isAdmin para todas as views
app.use((req, res, next) => {
    res.locals.isAdmin = req.session.isAdmin || false
    next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
