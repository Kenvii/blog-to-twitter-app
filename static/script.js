document.getElementById('generateBtn').addEventListener('click', function() {
    const content = document.getElementById('blogContent').value;
    fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('twitterPost').textContent = data.twitter_post;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
