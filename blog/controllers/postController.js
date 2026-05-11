const postModel = require('../models/postModel')

exports.index = (req, res) => {
    const posts = postModel.getAllPosts()
    res.render('index', { posts })
}

exports.show = (req, res) => {
    const post = postModel.getPostById(req.params.id)
    if (!post) return res.status(404).send('Post não encontrado')
    res.render('post', { post })
}

exports.showCreatePage = (req, res) => {
    res.render('newPostForm')
}

exports.createPost = (req, res) => {
    const { title, content } = req.body
    postModel.createPost(title, content)
    res.redirect('/')
}

exports.showEditPage = (req, res) => {
    const post = postModel.getPostById(req.params.id)
    if (!post) return res.status(404).send('Post não encontrado')
    res.render('editPostForm', { post })
}

exports.updatePost = (req, res) => {
    const { title, content } = req.body
    postModel.updatePost(req.params.id, title, content)
    res.redirect('/')
}
