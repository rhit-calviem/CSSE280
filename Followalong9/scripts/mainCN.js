document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataDisplay = document.getElementById("dataDisplay");

    fetchDataButton.addEventListener("click", function() {
        let userInput = document.getElementById("dataIndexInput").value;
        let category = "";
        category = userInput.toString();
  
        console.log("input: " + category);
        if(category) {
            fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(data => {
                dataDisplay.innerHTML = `<strong>ID:</strong> ${data.id} <br> <strong>
                link:</strong>${data.url} <br> 
                <strong>Joke:</strong> ${data.value} <br> <strong>`;
                $("#dataIndexModal").modal('hide');
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                dataDisplay.innerHTML = "Error fetching data. Please try again.";
            })
            .finally(() => {
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
        };
    });
})