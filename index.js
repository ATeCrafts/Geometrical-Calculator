let circle = document.getElementById("circle");
let rectangle = document.getElementById("rectangle");
let square = document.getElementById("square");
let triangle = document.getElementById("triangle");
let parallelogram = document.getElementById("parallelogram");
let trapezium = document.getElementById("trapezium");

let circleP = document.getElementById("circleP");
let rectangleP = document.getElementById("rectangleP");
let squareP = document.getElementById("squareP");

let cylinder = document.getElementById("cylinder");
let cuboid = document.getElementById("cuboid");
let cube = document.getElementById("cube");
let pyramid = document.getElementById("pyramid");
let prism = document.getElementById("prism");

let cylinderSA = document.getElementById("cylinderSA");
let cuboidSA = document.getElementById("cuboidSA");
let cubeSA = document.getElementById("cubeSA");

let radius;
const pi = Math.PI;
let length;
let width;
let side;
let height;
let base;
let topLength;
let bottom;
let cross_section;

let area;
let perimeter;
let volume;
let sa;

window.onload = windowLoad();

function windowLoad() {
    circle.style.display = "none";
    rectangle.style.display = "none";
    square.style.display = "none";
    triangle.style.display = "none";
    parallelogram.style.display = "none";
    trapezium.style.display = "none";

    circleP.style.display = "none";
    rectangleP.style.display = "none";
    squareP.style.display = "none";

    cylinder.style.display = "none";
    cuboid.style.display = "none";
    cube.style.display = "none";
    pyramid.style.display = "none";
    prism.style.display = "none";

    cylinderSA.style.display = "none";
    cuboidSA.style.display = "none";
    cubeSA.style.display = "none";

    document.getElementById("display").innerHTML = "Answer";

    radius = null;
    length = null;
    width = null;
    area = null;
    side = null;
    height = null;
    base = null;
    topLength = null;
    bottom = null;
    perimeter = null;
    volume = null;
    cross_section = null;
    sa = null;
}

function keyArea() {
    circleP.style.display = "none";
    rectangleP.style.display = "none";
    squareP.style.display = "none";

    cylinder.style.display = "none";
    cuboid.style.display = "none";
    cube.style.display = "none";
    pyramid.style.display = "none";
    prism.style.display = "none";

    cylinderSA.style.display = "none";
    cuboidSA.style.display = "none";
    cubeSA.style.display = "none";

    if (circle.style.display === "none") {
        circle.style.display = "block";
    } else {
        circle.style.display = "none";
    }

    if (rectangle.style.display === "none") {
        rectangle.style.display = "block";
    } else {
        rectangle.style.display = "none";
    }

    if (square.style.display === "none") {
        square.style.display = "block";
    } else {
        square.style.display = "none";
    }

    if (triangle.style.display === "none") {
        triangle.style.display = "block";
    } else {
        triangle.style.display = "none";
    }

    if (parallelogram.style.display === "none") {
        parallelogram.style.display = "block";
    } else {
        parallelogram.style.display = "none";
    }

    if (trapezium.style.display === "none") {
        trapezium.style.display = "block";
    } else {
        trapezium.style.display = "none";
    }
}
function keyPerimeter() {
    circle.style.display = "none";
    rectangle.style.display = "none";
    square.style.display = "none";
    triangle.style.display = "none";
    parallelogram.style.display = "none";
    trapezium.style.display = "none";

    cylinder.style.display = "none";
    cuboid.style.display = "none";
    cube.style.display = "none";
    pyramid.style.display = "none";
    prism.style.display = "none";

    cylinderSA.style.display = "none";
    cuboidSA.style.display = "none";
    cubeSA.style.display = "none";

    if (circleP.style.display === "none") {
        circleP.style.display = "block";
    } else {
        circleP.style.display = "none";
    }

    if (rectangleP.style.display === "none") {
        rectangleP.style.display = "block";
    } else {
        rectangleP.style.display = "none";
    }

    if (squareP.style.display === "none") {
        squareP.style.display = "block";
    } else {
        squareP.style.display = "none";
    }
}
function keyVolume() {
    circle.style.display = "none";
    rectangle.style.display = "none";
    square.style.display = "none";
    triangle.style.display = "none";
    parallelogram.style.display = "none";
    trapezium.style.display = "none";

    circleP.style.display = "none";
    rectangleP.style.display = "none";
    squareP.style.display = "none";

    cylinderSA.style.display = "none";
    cuboidSA.style.display = "none";
    cubeSA.style.display = "none";

    if (cylinder.style.display === "none") {
        cylinder.style.display = "block";
    } else {
        cylinder.style.display = "none";
    }

    if (cuboid.style.display === "none") {
        cuboid.style.display = "block";
    } else {
        cuboid.style.display = "none";
    }

    if (cube.style.display === "none") {
        cube.style.display = "block";
    } else {
        cube.style.display = "none";
    }

    if (pyramid.style.display === "none") {
        pyramid.style.display = "block";
    } else {
        pyramid.style.display = "none";
    }

    if (prism.style.display === "none") {
        prism.style.display = "block";
    } else {
        prism.style.display = "none";
    }
}
function keySA() {
    circle.style.display = "none";
    rectangle.style.display = "none";
    square.style.display = "none";
    triangle.style.display = "none";
    parallelogram.style.display = "none";
    trapezium.style.display = "none";

    circleP.style.display = "none";
    rectangleP.style.display = "none";
    squareP.style.display = "none";

    cylinder.style.display = "none";
    cuboid.style.display = "none";
    cube.style.display = "none";
    pyramid.style.display = "none";
    prism.style.display = "none";

    if (cylinderSA.style.display === "none") {
        cylinderSA.style.display = "block";
    } else {
        cylinderSA.style.display = "none";
    }

    if (cuboidSA.style.display === "none") {
        cuboidSA.style.display = "block";
    } else {
        cuboidSA.style.display = "none";
    }

    if (cubeSA.style.display === "none") {
        cubeSA.style.display = "block";
    } else {
        cubeSA.style.display = "none";
    }
}

function keyAreaCircle() {
    radius = parseFloat(prompt("Enter the radius of the circle"));
    area = pi * (radius ** 2);

    document.getElementById("display").innerHTML = "The area of the circle with radius " + radius + " is " + "<font color='red'>" + area + "</font>";
}
function keyAreaRectangle() {
    length = parseFloat(prompt("Enter the length of the rectangle"));
    width = parseFloat(prompt("Enter the width of the rectangle"));
    area = length * width;

    document.getElementById("display").innerHTML = "The area of the rectangle with length " + length + " and width " + width + " is " + "<font color='red'>" + area + "</font>";
}
function keyAreaSquare() {
    side = parseFloat(prompt("Enter the side of the square"));
    area = side ** 2;

    document.getElementById("display").innerHTML = "The area of the square with side " + side + " is " + "<font color='red'>" + area + "</font>";
}
function keyAreaTriangle() {
    height = parseFloat(prompt("Enter the height of the triangle"));
    base = parseFloat(prompt("Enter the base of the triangle"));
    area = 0.5 * height * base;

    document.getElementById("display").innerHTML = "The area of the triangle with height " + height + " and base " + base + " is " + "<font color='red'>" + area + "</font>";
}
function keyAreaParallelogram() {
    height = parseFloat(prompt("Enter the height of the parallelogram"));
    base = parseFloat(prompt("Enter the base of the parallelogram"));
    area = height * base;

    document.getElementById("display").innerHTML = "The area of the parallelogram with height " + height + " and base " + base + " is " + "<font color='red'>" + area + "</font>";
}
function keyAreaTrapezium() {
    topLength = parseFloat(prompt("Enter the top length of the trapezium (a)"));
    bottom = parseFloat(prompt("Enter the bottom length of the trapezium (b)"));
    height = parseFloat(prompt("Enter the height of the trapezium"));
    area = 0.5 * height * (topLength + bottom);

    document.getElementById("display").innerHTML = "The area of the trapezium with top length (a) " + topLength + ", bottom length (b) " + bottom + " and height " + height + " is " + "<font color='red'>" + area + "</font>";
}

function keyPerimeterCircle() {
    radius = parseFloat(prompt("Enter the radius of the circle"));
    perimeter = 2 * pi * radius;

    document.getElementById("display").innerHTML = "The circumference of the circle with radius " + radius + " is " + "<font color='red'>" + perimeter + "</font>";
}
function keyPerimeterRectangle() {
    length = parseFloat(prompt("Enter the length of the rectangle"));
    width = parseFloat(prompt("Enter the width of the rectangle"));
    perimeter = 2 * (length + width);

    document.getElementById("display").innerHTML = "The perimeter of the rectangle with length " + length + " and width " + width + " is " + "<font color='red'>" + perimeter + "</font>";
}
function keyPerimeterSquare() {
    side = parseFloat(prompt("Enter the side of the square"));
    perimeter = 4 * side;

    document.getElementById("display").innerHTML = "The perimeter of the square with side " + side + " is " + "<font color='red'>" + perimeter + "</font>"; 
}

function keyVolumeCylinder() {
    radius = parseFloat(prompt("Enter the radius of the cylinder"));
    height = parseFloat(prompt("Enter the height of the cylinder"));
    volume = pi * (radius ** 2) * height;

    document.getElementById("display").innerHTML = "The volume of the cylinder with radius " + radius + " and height " + height + " is " + "<font color='red'>" + volume + "</font>";
}
function keyVolumeCuboid() {
    length = parseFloat(prompt("Enter the length of the cuboid"));
    width = parseFloat(prompt("Enter the width of the cuboid"));
    height = parseFloat(prompt("Enter the height of the cuboid"));
    volume = length * width * height;

    document.getElementById("display").innerHTML = "The volume of the cuboid with length " + length + ", width " + width + " and height " + height + " is " + "<font color='red'>" + volume + "</font>";
}
function keyVolumeCube() {
    side = parseFloat(prompt("Enter the side of the cube"));
    volume = side ** 3;

    document.getElementById("display").innerHTML = "The volume of the cube with side " + side + " is " + "<font color='red'>" + volume + "</font>";
}
function keyVolumePyramid() {
    base = parseFloat(prompt("Enter the base area of the pyramid"));
    height = parseFloat(prompt("Enter the height of the pyramid"));
    volume = (1/3) * base * height;

    document.getElementById("display").innerHTML = "The volume of the pyramid with base area " + base + " and height " + height + " is " + "<font color='red'>" + volume + "</font>";
}
function keyVolumePrism() {
    cross_section = parseFloat(prompt("Enter the area of the cross-section of the prism (could be the area of any shape)"));
    length = parseFloat(prompt("Enter the length of the prism"));
    volume = cross_section * length;

    document.getElementById("display").innerHTML = "The volume of the prism with area of the cross-section " + cross_section + " and length " + length + " is " + "<font color='red'>" + volume + "</font>";
}

function keySACylinder() {
    radius = parseFloat(prompt("Enter the radius of the cylinder"));
    height = parseFloat(prompt("Enter the height of the cylinder"));
    sa = ((2 * pi * (radius ** 2)) + (2 * pi * radius * height));

    document.getElementById("display").innerHTML = "The surface area of the cylinder with radius " + radius + " and height " + height + " is " + "<font color='red'>" + sa + "</font>"; 
}
function keySACuboid() {
    length = parseFloat(prompt("Enter the length of the cuboid"));
    width = parseFloat(prompt("Enter the width of the cuboid"));
    height = parseFloat(prompt("Enter the height of the cuboid"));
    sa = 2 * ((length * width) + (width * height) + (length * height));

    document.getElementById("display").innerHTML = "The surface area of the cuboid with length " + length + ", width " + width + " and height " + height + " is " + "<font color='red'>" + sa + "</font>";
}
function keySACube() {
    side = parseFloat(prompt("Enter the side of the cube"));
    sa = 6 * (side ** 2);
    
    document.getElementById("display").innerHTML = "The surface area of the cube with side " + side + " is " + "<font color='red'>" + sa + "</font>";
}