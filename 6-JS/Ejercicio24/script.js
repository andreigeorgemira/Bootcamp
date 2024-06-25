document.getElementById('nextButton').addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('avatar').src = data.icon_url;
            document.getElementById('joke').textContent = data.value;
        })
        .catch(error => console.error('Error:', error));
}