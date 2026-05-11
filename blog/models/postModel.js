let posts = [
	{ id: "1", title: "Introdução ao Node.js", content: "Descubra como o Node.js revolucionou o desenvolvimento web com sua arquitetura orientada a eventos.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "2", title: "Construindo APIs com Node.js", content: "Aprenda a criar APIs RESTful robustas e escaláveis utilizando o Node.js e o framework Express.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "3", title: "Gerenciando Pacotes com npm", content: "Saiba como utilizar o npm para instalar, atualizar e gerenciar pacotes de maneira eficiente em projetos Node.js.", createdAt: new Date(), updatedAt: new Date() }
]

const postModel = {
    getAllPosts() {
        return posts
    },

    getPostById(id) {
        return posts.find(post => post.id === id)
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date()
        }

        posts.unshift(post)

        return post
    },

    updatePost(id, title, content) {
        const post = posts.find(post => post.id === id)

        if (!post) return null

        post.title = title
        post.content = content

        return post
    },

    deletePost(id) {
        const index = posts.findIndex(post => post.id === id)

        if (index === -1) return false

        posts.splice(index, 1)

        return true
    }
}

module.exports = postModel