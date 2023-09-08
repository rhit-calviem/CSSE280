function paint(color){
    console.log(color);
    const circle = document.getElementById('circleID');
    //circle.style = 'background-color:${color}';
    circle.style.backgroundColor = color;
    console.log(circle);
    console.log('Script Loaded...');
}