main = function() {
    console.log("Ready");

    document.querySelector("#owlButton").onclick = (event) => {
        
        console.log("change owl");
        if (a == 0) {
            a = 1;
            console.log(a);
            document.querySelector("#cardOwl").src = "images/pigwidgeon.png"
            document.querySelector("#cardTitle").innerHTML = "PigWidgeon";
            console.log("change pig");
        } 
        else  {
            document.querySelector("#cardOwl").src = "images/hedwig.png"
            document.querySelector("#cardTitle").innerHTML = "Hedwig";
            console.log("change hed");
            a = 0;
            console.log(a);

        }
    };
}   
let a = 0;
main();

