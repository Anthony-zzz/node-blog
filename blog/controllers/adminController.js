const postModel = require('../models/postModel')

const ADMIN_PASSWORD = 'admin123'

exports.showAdminPage = (req, res) => {
    const posts = postModel.getAllPosts()
    res.render('admin', { posts })
}

exports.showLoginPage = (req, res) => {
    if (req.session.isAdmin) return res.redirect('/admin')
    res.render('login', { erro: null })
}

exports.login = (req, res) => {
    const { password } = req.body
    if (password === ADMIN_PASSWORD) {
        req.session.isAdmin = true
        return res.redirect('/admin')
    }
    res.render('login', { erro: 'Senha incorreta.' })
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}

exports.deletePost = (req, res) => {
    postModel.deletePost(req.params.id)
    res.redirect('/admin')
}

