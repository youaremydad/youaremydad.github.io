function fetchVerse() {
    const fetchURL = "https://beta.ourmanna.com/api/v1/get?format=json&order=daily";
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch(fetchURL, options)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            let text = data.verse.details.text;
            let ref = data.verse.details.reference;
            let translation = data.verse.details.version;
            let sec = document.getElementById('verse-text');
            sec.innerHTML = `
                ${text}
                <br>
                <br>
                ${ref} ${translation}
            `;
        })
        .catch(err => {
            console.error(err);
            let sec = document.getElementById('verse-text');
            sec.innerHTML = 'Hmm... Try again in a moment by reloading the page.';
        });
};

function sendToVoid() {
    document.getElementById('into-void').value = "";
}

document.addEventListener("DOMContentLoaded", fetchVerse());
document.getElementById('void-form').addEventListener('submit', sendToVoid());