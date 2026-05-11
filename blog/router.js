const express = require('express')

const postController = require('./controllers/postController')
const adminController = require('./controllers/adminController')

const router = express.Router()

// Middleware: somente admin pode excluir
function soAdmin(req, res, next) {
    if (req.session.isAdmin) return next()
    res.status(403).render('403')
}

// Rotas públicas — qualquer um pode ler e criar posts
router.get('/', postController.index)
router.get('/posts/:id', postController.show)

router.get('/criar', postController.showCreatePage)
router.post('/criar', postController.createPost)

router.get('/editar/:id', soAdmin, postController.showEditPage)
router.post('/editar/:id', soAdmin, postController.updatePost)

// Rotas de autenticação admin
router.get('/admin/login', adminController.showLoginPage)
router.post('/admin/login', adminController.login)
router.post('/admin/logout', adminController.logout)

// Painel admin (qualquer um pode ver, mas excluir só admin)
router.get('/admin', adminController.showAdminPage)

// Somente admin pode excluir
router.post('/admin/delete/:id', soAdmin, adminController.deletePost)

module.exports = router
