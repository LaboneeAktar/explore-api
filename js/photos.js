function showPicture() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayComment(data))
}

function displayComment(photos) {
    const photoContainer = document.getElementById('image-container');
    for (const photo of photos) {
        // console.log(comment);
        const photoDiv = document.createElement('div');
        // photoDiv.classList.add('comment-design');
        photoDiv.innerHTML = `
            <h3>Title: ${photo.title}</h3>
            <img src="${photo.url}"/>
            <img src="${photo.thumbnailUrl}"/>
        `;
        photoContainer.appendChild(photoDiv);
    }
}

showPicture();