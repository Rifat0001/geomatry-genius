//Function for add hover background change 
// for triangle
function changeStyle1() {
    let element = document.getElementById("background1");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// for rectangle
function changeStyle2() {
    let element = document.getElementById("background2");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// for parallelogram
function changeStyle3() {
    let element = document.getElementById("background3");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// for rhombus
function changeStyle4() {
    let element = document.getElementById("background4");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// for pentagon
function changeStyle5() {
    let element = document.getElementById("background5");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// for ellipse
function changeStyle6() {
    let element = document.getElementById("background6");
    element.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}

// start the interactions part 
// function to get the value of input field 
function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    return elementValue;
}

//  function to get value from innerText
function getTextValue(elementId) {
    const element = document.getElementById(elementId);
    elementValue = element.innerText;
    return elementValue;
}

// function to display calculation on container
function setTheValue(elementName, valueOfArea, elementId) {
    const resultContainer = document.getElementById('table-container');
    if (isNaN(valueOfArea) || valueOfArea <= 0) {
        alert("Please enter a valid number")
        return;
    }
    serial++;
    disableBtn(elementId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${elementName}</td>
    <td ><span id="area-value">${valueOfArea}</span>cm<sup>2</sup> </td>
    <td>
    <button class="btn btn-primary" id="convert">Convert to m<sup>2</sup></button>
    </td>
    `;
    resultContainer.appendChild(tr);
}

// function for disable button 
function disableBtn(elementId) {
    document.getElementById(elementId).setAttribute('disabled', true);
}

let serial = 0;

// it is for triangle 
document.getElementById('first-card').addEventListener('click', function () {
    const width = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const triangleArea = 0.5 * width * height;
    setTheValue('Triangle', triangleArea, 'first-card');

})

// it is for rectangle 
document.getElementById('second-card').addEventListener('click', function () {
    const width = getInputValue('rectangle-base');
    const height = getInputValue('rectangle-height');
    const area = width * height;
    setTheValue('Rectangle', area, 'second-card');
})

// it is for parallelogram
document.getElementById('third-card').addEventListener('click', function () {
    const width = getTextValue('parallelogram-base');
    const height = getTextValue('parallelogram-height');
    const area = width * height;
    setTheValue('Parallelogram', area, 'third-card');
})
// it is for parallelogram
document.getElementById('fourth-card').addEventListener('click', function () {
    const width = getTextValue('rhombus-base');
    const height = getTextValue('rhombus-height');
    const area = width * height;
    setTheValue('rhombus', area, 'fourth-card');
})
// it is for parallelogram
document.getElementById('fifth-card').addEventListener('click', function () {
    const width = getTextValue('pentagon-base');
    const height = getTextValue('pentagon-height');
    const area = 0.5 * width * height;
    setTheValue('pentagon', area, 'fifth-card');
})
// it is for parallelogram
document.getElementById('sixth-card').addEventListener('click', function () {
    const width = getTextValue('ellipse-base');
    const height = getTextValue('ellipse-height');
    const area = (3.1416 * width * height).toFixed(2);
    setTheValue('ellipse', area, 'sixth-card');
})
