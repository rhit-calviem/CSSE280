//1
for(let i = 2; i <=10; i+=2){
    console.log(i);
}
//2
console.log("")
for(let i=5; i>0; i--){
    console.log(i);
}
//3
console.log("");
const numbers = [1,2,3,4,5];
let s=0;
for(const num of numbers){
    s+=num;
}
console.log(s);

//4
console.log("");
const student = {name:"john", age:20, grade:"A"};
for(const key in student){
    console.log(`${key}:${[student[key]]}`);
}
//5
console.log("");
const book={title:"Harry Potter", author:"JK Rowling", year:1997};
for(const key in book){
    console.log(`${key}`);
}
//6
console.log("");
const colors=['red','green','blue', 'yellow'];
for(const col of colors){
    console.log(col);
}

//7
console.log("");
const number = [1,2,3,4,5];
let s1=0;
for(const num of number){
    s1+=num;
}
console.log(s1);

//8
console.log("");
const temperatures = [32,68,75,82,56];
temperatures.forEach(function(number) {
    number=(number-32)*5/9
    console.log(number);
});


//9
console.log("");
const cities = ["NY", "LA", "CH", "HU"];
const population = {"NY":8398748, "LA":3990456, "CH":2705994, "HU":2320268}
cities.forEach(function(c){
   for(const key in population){
    if(key == c){
        console.log(`${[population[c]]}`);
    }
   } 
})
//10
console.log("");

for(let i = 0; i<5; i++){
    let x = "";
    for(let j = 0; j<i+1; j++){
        x+="*";
    }
    console.log(x+"\n");
}

