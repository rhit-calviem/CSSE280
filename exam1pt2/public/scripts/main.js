main = function() {
    console.log("Ready");

    document.querySelector("#owlButton").onclick = (event) => {
        
        console.log("change owl");
        if (a == 0) {
            a = 1;
            document.querySelector("#cardOwl").src = "images/pigwidgeon.png"
            document.querySelector("#cardTitle").innerHTML = "PigWidgeon";
            console.log("Pigwidgeon");
        } 
        else  {
            document.querySelector("#cardOwl").src = "images/hedwig.png"
            document.querySelector("#cardTitle").innerHTML = "Hedwig";
            console.log("Hedwig");
            a = 0;

        }
    };
}   
let a = 0;
main();

