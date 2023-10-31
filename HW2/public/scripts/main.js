const apiUrl = 'https://64486933e7eb3378ca2e0f51.mockapi.io/api/users';

function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

function clearText() {
    document.getElementById('name').textContent = '';
    document.getElementById('message').textContent = '';
}

function processText(text) {
    text = text.replace(/\./g, '!!!');
    text = text.replace(/!!!/g, '!!!<br>');
    return text;
}


function appendText(textArray) {
    const cardText = document.getElementById('message');

    textArray.forEach(sentence => {
        const spanElement = document.createElement('span');
        spanElement.style.display = 'block';
        spanElement.innerHTML = sentence;
        cardText.appendChild(spanElement);
    });
}


function textToArray(text) {
    text = text.replace(/!!!$/, '!!!<br>');
    return text.split('\n');
}


function updateClient() {
    let id = getRandomInt();

    clearText();

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const randomUser = data[id];
            
            document.getElementById('image').src = randomUser.avatar;
            document.getElementById('name').textContent = randomUser.name;

            const processedText = processText(randomUser.message);
            const textArray = textToArray(processedText);
            appendText(textArray);
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.getElementById('loadTestimonial').addEventListener('click', () => {
    updateClient();
});


window.addEventListener('load', () => {
    updateClient();
});
