main = function() {
    console.log("Ready");
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };

    document.querySelector('#blueButton').onclick = (event) => {
        console.log("blue");
        changeColor("blue");
    }

    document.querySelector('#purpleButton').onclick = (event) => {
        console.log("purple");
        changeColor("purple");
    }

    document.querySelector('#greenButton').onclick = (event) => {
        console.log("green");
        changeColor("green");
    }

    document.querySelector('#redButton').onclick = (event) => {
        console.log("red");
        changeColor("red");
    }
}

updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`;
}

changeColor = function(color) {
    document.querySelector("#coloredBox").style.backgroundColor=color;
    document.querySelector("#coloredBox").innerHTML = `${color}`;
}

let counter = 0;

main();