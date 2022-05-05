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

let buttonClickSound = new Audio("./Button Click Sound.mp3");

let breaks = document.getElementById("breaks");

let circleImg = document.getElementById("circleImg");
let circleImgA = document.getElementById("circleImgA");
let rectImg = document.getElementById("rectImg");
let rectImgA = document.getElementById("rectImgA");
let squareImg = document.getElementById("squareImg");
let squareImgA = document.getElementById("squareImgA");
let triImg = document.getElementById("triImg");
let triImgA = document.getElementById("triImgA");
let parImg = document.getElementById("parImg");
let parImgA = document.getElementById("parImgA");
let trapImg = document.getElementById("trapImg");
let trapImgA = document.getElementById("trapImgA");

let circleImg2 = document.getElementById("circleImg2");
let circleImgP = document.getElementById("circleImgP");
let rectImg2 = document.getElementById("rectImg2");
let rectImgP = document.getElementById("rectImgP");
let squareImg2 = document.getElementById("squareImg2");
let squareImgP = document.getElementById("squareImgP");

let cylinderImg = document.getElementById("cylinderImg");
let cylinderImgV = document.getElementById("cylinderImgV");
let cuboidImg = document.getElementById("cuboidImg");
let cuboidImgV = document.getElementById("cuboidImgV");
let cubeImg = document.getElementById("cubeImg");
let cubeImgV = document.getElementById("cubeImgV");
let pyramidImg = document.getElementById("pyramidImg");
let pyramidImgV = document.getElementById("pyramidImgV");
let prismImg = document.getElementById("prismImg");
let prismImgV = document.getElementById("prismImgV");

let cylinderImg2 = document.getElementById("cylinderImg2");
let cylinderImgSA = document.getElementById("cylinderImgSA");
let cuboidImg2 = document.getElementById("cuboidImg2");
let cuboidImgSA = document.getElementById("cuboidImgSA");
let cubeImg2 = document.getElementById("cubeImg2");
let cubeImgSA = document.getElementById("cubeImgSA");

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

let rounder;

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

    breaks.style.display = "none";

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

    rounder = 2;
}

function keyArea() {
    buttonClickSound.play();

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

    breaks.style.display = "block";

    circleImg.style.display = "block";
    circleImgA.style.display = "none";
    rectImg.style.display = "block";
    rectImgA.style.display = "none";
    squareImg.style.display = "block";
    squareImgA.style.display = "none";
    triImg.style.display = "block";
    triImgA.style.display = "none";
    parImg.style.display = "block";
    parImgA.style.display = "none";
    trapImg.style.display = "block";
    trapImgA.style.display = "none";

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
    buttonClickSound.play();

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

    breaks.style.display = "block";

    circleImg2.style.display = "block";
    circleImgP.style.display = "none";
    rectImg2.style.display = "block";
    rectImgP.style.display = "none";
    squareImg2.style.display = "block";
    squareImgP.style.display = "none";

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
    buttonClickSound.play();

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

    breaks.style.display = "block";

    cylinderImg.style.display = "block";
    cylinderImgV.style.display = "none";
    cuboidImg.style.display = "block";
    cuboidImgV.style.display = "none";
    cubeImg.style.display = "block";
    cubeImgV.style.display = "none";
    pyramidImg.style.display = "block";
    pyramidImgV.style.display = "none";
    prismImg.style.display = "block";
    prismImgV.style.display = "none";

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
    buttonClickSound.play();

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

    breaks.style.display = "block";

    cylinderImg2.style.display = "block";
    cylinderImgSA.style.display = "none";
    cuboidImg2.style.display = "block";
    cuboidImgSA.style.display = "none";
    cubeImg2.style.display = "block";
    cubeImgSA.style.display = "none";

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
    buttonClickSound.play();

    radius = parseFloat(prompt("Enter the radius of the circle"));

    if (isNaN(radius) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(pi * (radius ** 2), rounder);

        document.getElementById("display").innerHTML = "Area of circle = \u03C0r^2 = " + pi + " * " + radius + "^2 = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyAreaRectangle() {
    buttonClickSound.play();
    
    length = parseFloat(prompt("Enter the length of the rectangle"));
    width = parseFloat(prompt("Enter the width of the rectangle"));

    if (isNaN(length) === true || isNaN(width) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(length * width, rounder);

        document.getElementById("display").innerHTML = "Area of rectangle = lw = " + length + " * " + width + " = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyAreaSquare() {
    buttonClickSound.play();

    side = parseFloat(prompt("Enter the side of the square"));

    if (isNaN(side) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(side ** 2, rounder);

        document.getElementById("display").innerHTML = "Area of square = s^2 = " + side + "^2 = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyAreaTriangle() {
    buttonClickSound.play();

    height = parseFloat(prompt("Enter the height of the triangle"));
    base = parseFloat(prompt("Enter the base of the triangle"));

    if (isNaN(height) === true || isNaN(base) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(0.5 * height * base, rounder);

        document.getElementById("display").innerHTML = "Area of triangle = 0.5bh = 0.5 * " + base + " * " + height + " = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyAreaParallelogram() {
    buttonClickSound.play();

    height = parseFloat(prompt("Enter the height of the parallelogram"));
    base = parseFloat(prompt("Enter the base of the parallelogram"));

    if (isNaN(height) === true || isNaN(base) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(height * base, rounder);

        document.getElementById("display").innerHTML = "Area of parallelogram = bh = " + base + " * " + height + " = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyAreaTrapezium() {
    buttonClickSound.play();

    topLength = parseFloat(prompt("Enter the top length of the trapezium (a)"));
    bottom = parseFloat(prompt("Enter the bottom length of the trapezium (b)"));
    height = parseFloat(prompt("Enter the height of the trapezium"));

    if (isNaN(topLength) === true || isNaN(bottom) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        area = rounded(0.5 * height * (topLength + bottom), rounder);

        document.getElementById("display").innerHTML = "Area of trapezium = 0.5h(a+b) = 0.5 * " + height + "(" + topLength + " + " + bottom + ") = " + "<font color='red'>" + area + "</font>" + " (" + rounder + " d.p.)";
    }


}

function keyPerimeterCircle() {
    buttonClickSound.play();

    radius = parseFloat(prompt("Enter the radius of the circle"));

    if (isNaN(radius) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        perimeter = rounded(2 * pi * radius, rounder);

        document.getElementById("display").innerHTML = "Circumference of circle = 2\u03C0r = " + "2 * " + pi + " * " + radius + " = " + "<font color='red'>" + perimeter + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyPerimeterRectangle() {
    buttonClickSound.play();

    length = parseFloat(prompt("Enter the length of the rectangle"));
    width = parseFloat(prompt("Enter the width of the rectangle"));

    if (isNaN(length) === true || isNaN(width) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        perimeter = rounded(2 * (length + width), rounder);

        document.getElementById("display").innerHTML = "Perimeter of rectangle = 2(l+w) = 2(" + length + "+" + width + ") = " + "<font color='red'>" + perimeter + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyPerimeterSquare() {
    buttonClickSound.play();

    side = parseFloat(prompt("Enter the side of the square"));

    if (isNaN(side) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        perimeter = rounded(4 * side, rounder);

        document.getElementById("display").innerHTML = "Perimeter of square = 4s = 4 * " + side + " = " + "<font color='red'>" + perimeter + "</font>" + " (" + rounder + " d.p.)";
    }
}

function keyVolumeCylinder() {
    buttonClickSound.play();

    radius = parseFloat(prompt("Enter the radius of the cylinder"));
    height = parseFloat(prompt("Enter the height of the cylinder"));

    if (isNaN(radius) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        volume = rounded(pi * (radius ** 2) * height, rounder);

        document.getElementById("display").innerHTML = "Volume of cylinder = \u03C0r^2h = " + pi + " * " + radius + "^2" + " * " + height + " = " + "<font color='red'>" + volume + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyVolumeCuboid() {
    buttonClickSound.play();

    length = parseFloat(prompt("Enter the length of the cuboid"));
    width = parseFloat(prompt("Enter the width of the cuboid"));
    height = parseFloat(prompt("Enter the height of the cuboid"));

    if (isNaN(length) === true || isNaN(width) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    }  else {
        volume = rounded(length * width * height, rounder);

        document.getElementById("display").innerHTML = "Volume of cuboid = lwh = " + length + " * " + width + " * " + height + " = " + "<font color='red'>" + volume + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyVolumeCube() {
    buttonClickSound.play();

    side = parseFloat(prompt("Enter the side of the cube"));

    if (isNaN(side) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        volume = rounded(side ** 3, rounder);

        document.getElementById("display").innerHTML = "Volume of cube = s^3 = " + side + "^3 = " + "<font color='red'>" + volume + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyVolumePyramid() {
    buttonClickSound.play();

    base = parseFloat(prompt("Enter the base area of the pyramid"));
    height = parseFloat(prompt("Enter the height of the pyramid"));

    if (isNaN(base) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        volume = rounded((1/3) * base * height, rounder);

        document.getElementById("display").innerHTML = "Volume of pyramid = bh/3 = " + base + " * " + height + " / 3 = " + "<font color='red'>" + volume + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keyVolumePrism() {
    buttonClickSound.play();

    cross_section = parseFloat(prompt("Enter the area of the cross-section of the prism (could be the area of any shape)"));
    length = parseFloat(prompt("Enter the length of the prism"));

    if (isNaN(cross_section) === true || isNaN(length) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        volume = rounded(cross_section * length, rounder);

        document.getElementById("display").innerHTML = "Volume of prism = area of cross-section * l = " + cross_section + " * " + length + " = " + "<font color='red'>" + volume + "</font>" + " (" + rounder + " d.p.)";
    }
}

function keySACylinder() {
    buttonClickSound.play();

    radius = parseFloat(prompt("Enter the radius of the cylinder"));
    height = parseFloat(prompt("Enter the height of the cylinder"));

    if (isNaN(radius) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        sa = rounded(((2 * pi * (radius ** 2)) + (2 * pi * radius * height)), rounder);

        document.getElementById("display").innerHTML = "Surface Area of cylinder = (2\u03C0r^2) + (2\u03C0rh) = (2 * " + pi + " * " + radius + "^2) + (2 * " + pi + " * " + radius + " * " + height + ") = " + "<font color='red'>" + sa + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keySACuboid() {
    buttonClickSound.play();

    length = parseFloat(prompt("Enter the length of the cuboid"));
    width = parseFloat(prompt("Enter the width of the cuboid"));
    height = parseFloat(prompt("Enter the height of the cuboid"));

    if (isNaN(length) === true || isNaN(width) === true || isNaN(height) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        sa = rounded(2 * ((length * width) + (width * height) + (length * height)), rounder);

        document.getElementById("display").innerHTML = "Surface Area of cuboid = 2((lw) + (wh) + (lh)) = 2(" + length + " * " + width + ") + (" + width + " * " + height + ") + (" + length + " * " + height + ") = " + "<font color='red'>" + sa + "</font>" + " (" + rounder + " d.p.)";
    }
}
function keySACube() {
    buttonClickSound.play();

    side = parseFloat(prompt("Enter the side of the cube"));

    if (isNaN(side) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        sa = rounded(6 * (side ** 2), rounder);

        document.getElementById("display").innerHTML = "Surface Area of cube = 6s^2 = 6 * " + side + "^2 = " + "<font color='red'>" + sa + "</font>" + " (" + rounder + " d.p.)";
    }
}

function keyRound() {
    buttonClickSound.play();

    rounder = parseInt(prompt("Enter the number of decimal places the answer should be rounded to. Default: 2"));

    if (isNaN(rounder) === true) {
        document.getElementById("display").innerHTML = "Error. Please reload the page and try again";
    } else {
        document.getElementById("display").innerHTML = "Round = " + rounder + " decimal places";
    }
}
function rounded(number, decimal) {
    decimal = Math.pow(10, decimal);
    return Math.round(number * decimal) / decimal;
}

function mouseOverCircle() {
    circleImg.style.display = "none";
    circleImgA.style.display = "block";
}
function mouseLeaveCircle() {
    circleImg.style.display = "block";
    circleImgA.style.display = "none";
}
function mouseOverRect() {
    rectImg.style.display = "none";
    rectImgA.style.display = "block";
}
function mouseLeaveRect() {
    rectImg.style.display = "block";
    rectImgA.style.display = "none";
}
function mouseOverSquare() {
    squareImg.style.display = "none";
    squareImgA.style.display = "block";
}
function mouseLeaveSquare() {
    squareImg.style.display = "block";
    squareImgA.style.display = "none";
}
function mouseOverTri() {
    triImg.style.display = "none";
    triImgA.style.display = "block";
}
function mouseLeaveTri() {
    triImg.style.display = "block";
    triImgA.style.display = "none";
}
function mouseOverPar() {
    parImg.style.display = "none";
    parImgA.style.display = "block";
}
function mouseLeavePar() {
    parImg.style.display = "block";
    parImgA.style.display = "none";
}
function mouseOverTrap() {
    trapImg.style.display = "none";
    trapImgA.style.display = "block";
}
function mouseLeaveTrap() {
    trapImg.style.display = "block";
    trapImgA.style.display = "none";
}

function mouseOverCircleP() {
    circleImg2.style.display = "none";
    circleImgP.style.display = "block";
}
function mouseLeaveCircleP() {
    circleImg2.style.display = "block";
    circleImgP.style.display = "none";
}
function mouseOverRectP() {
    rectImg2.style.display = "none";
    rectImgP.style.display = "block";
}
function mouseLeaveRectP() {
    rectImg2.style.display = "block";
    rectImgP.style.display = "none";
}
function mouseOverSquareP() {
    squareImg2.style.display = "none";
    squareImgP.style.display = "block";
}
function mouseLeaveSquareP() {
    squareImg2.style.display = "block";
    squareImgP.style.display = "none";
}

function mouseOverCylinder() {
    cylinderImg.style.display = "none";
    cylinderImgV.style.display = "block";
}
function mouseLeaveCylinder() {
    cylinderImg.style.display = "block";
    cylinderImgV.style.display = "none";
}
function mouseOverCuboid() {
    cuboidImg.style.display = "none";
    cuboidImgV.style.display = "block";
}
function mouseLeaveCuboid() {
    cuboidImg.style.display = "block";
    cuboidImgV.style.display = "none";
}
function mouseOverCube() {
    cubeImg.style.display = "none";
    cubeImgV.style.display = "block";
}
function mouseLeaveCube() {
    cubeImg.style.display = "block";
    cubeImgV.style.display = "none";
}
function mouseOverPyramid() {
    pyramidImg.style.display = "none";
    pyramidImgV.style.display = "block";
}
function mouseLeavePyramid() {
    pyramidImg.style.display = "block";
    pyramidImgV.style.display = "none";
}
function mouseOverPrism() {
    prismImg.style.display = "none";
    prismImgV.style.display = "block";
}
function mouseLeavePrism() {
    prismImg.style.display = "block";
    prismImgV.style.display = "none";
}

function mouseOverCylinderSA() {
    cylinderImg2.style.display = "none";
    cylinderImgSA.style.display = "block";
}
function mouseLeaveCylinderSA() {
    cylinderImg2.style.display = "block";
    cylinderImgSA.style.display = "none";
}
function mouseOverCuboidSA() {
    cuboidImg2.style.display = "none";
    cuboidImgSA.style.display = "block";
}
function mouseLeaveCuboidSA() {
    cuboidImg2.style.display = "block";
    cuboidImgSA.style.display = "none";
}
function mouseOverCubeSA() {
    cubeImg2.style.display = "none";
    cubeImgSA.style.display = "block";
}
function mouseLeaveCubeSA() {
    cubeImg2.style.display = "block";
    cubeImgSA.style.display = "none";
}