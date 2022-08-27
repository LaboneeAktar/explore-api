function showComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

function displayComment(comments) {
    const commentContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        // console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-design');
        commentDiv.innerHTML = `
            <h3>Name: ${comment.name}</h3>
            <h4>Email: ${comment.email}</h4>
            <p>Body: ${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}

showComment();