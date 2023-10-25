const apiUrl = 'https://64486933e7eb3378ca2e0f51.mockapi.io/api/users';

//     document.getElementById('loadTestimonial').addEventListener('click', () => {
//         // Fetch data from the API
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Select a random user from the data
//                 const randomUser = data[Math.floor(Math.random() * data.length)];

//                 // Update the HTML elements with user data
//                 document.getElementById('image').src = randomUser.avatar;
//                 document.getElementById('name').textContent = randomUser.name;
//                 document.getElementById('message').textContent = randomUser.message;
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     });

//     // Load an initial testimonial when the page loads
//     window.addEventListener('load', () => {
//         document.getElementById('loadTestimonial').click();
//     });

// Provide a function to create a random number for API ids
function getRandomInt() {
    // Return a random number between 0 and 9 (0 to 9 because we have 10 API messages)
    return Math.floor(Math.random() * 10);
}

// TODO: Remove previous HTML content from the card text. The content should be ""
function clearText() {
    document.getElementById('name').textContent = '';
    document.getElementById('message').textContent = '';
}

// TODO: Replace periods with exclamation signs, add a new line, and return the processed text
function processText(text) {
    return text.replace(/\./g, '!\n');
}

// TODO: Create a for loop over the text array. Append span tags and update code
function appendText(textArray) {
    textArray.forEach(sentence => {
        const spanElement = document.createElement('span');
        spanElement.textContent = sentence;
        document.getElementById('message').appendChild(spanElement);
    });
}

// TODO: Split text at new lines, create an array of sentences, and return the array
function textToArray(text) {
    return text.split('\n');
}

function updateClient() {
    let id = getRandomInt();

    clearText();

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const randomUser = data[id];
            
            // Update the HTML elements with user data
            document.getElementById('image').src = randomUser.avatar;
            document.getElementById('name').textContent = randomUser.name;

            // Part 2: Text processing steps - processText, textToArray, appendText
            const processedText = processText(randomUser.message);
            const textArray = textToArray(processedText);
            appendText(textArray);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Set up the button click event handler
document.getElementById('loadTestimonial').addEventListener('click', () => {
    updateClient();
});

// Call the updateClient function when the page loads
window.addEventListener('load', () => {
    updateClient();
});
