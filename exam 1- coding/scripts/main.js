main = function() {
    console.log("Ready");

    document.querySelector("#owlButton").onclick = (event) => {
        const image = document.getElementById("cardImage");
        
        console.log("change owl");
        if (image.src = "images/hedwig.jpg") {
            image.src = "images/pigwidgeon.png";
        } else if(image.src = "images/pigwidgeon.png") {
            image.src = "images/hedwig.jpg";
        }
    };
}   



main();