document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('blog-posts');

    loadPosts();

    postForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        if (title && author && content) {
            const post = {
                id: Date.now(),
                title: title,
                author: author,
                content: content,
                date: new Date().toLocaleDateString('pt-BR')
            };

            savePost(post);
            addPostToDOM(post);
            postForm.reset();
        }
    });

    function addPostToDOM(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post-card');
        
        postElement.innerHTML = `
            <div class="post-header">
                <h3>${post.title}</h3>
                <span class="post-date">${post.date}</span>
            </div>
            <p class="post-author">Por: <strong>${post.author}</strong></p>
            <p class="post-content">${post.content}</p>
        `;

        postsContainer.prepend(postElement);
    }

    function savePost(post) {
        // Busca os posts existentes no "banco de dados" do navegador ou cria um array vazio
        let posts = JSON.parse(localStorage.getItem('localixo_posts')) || [];
        posts.push(post);
        // Converte o array para texto JSON e salva no navegador sob a chave 'localixo_posts'
        localStorage.setItem('localixo_posts', JSON.stringify(posts));
    }

    function loadPosts() {
        let posts = JSON.parse(localStorage.getItem('localixo_posts')) || [];
        posts.forEach(post => addPostToDOM(post));
    }
});