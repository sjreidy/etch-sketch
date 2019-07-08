const funColorsBtn = document.getElementById("funColors");
const boringBtn = document.getElementById("blackAndWhite");

var numOfSides = 16;
var container = document.getElementById('container');


function createDivs(numOfSides){
    var cellSize = 600/numOfSides;
    for(let i=0; i<numOfSides*numOfSides; i++){
        var innerCell = document.createElement("div");
        innerCell.style.height = `${cellSize}px`;
        innerCell.style.width = `${cellSize}px`;
        innerCell.classList.add("innerCell");
        document.getElementById('container').appendChild(innerCell);
    };
    hover();
};

function hover(){
    var innerCells = document.querySelectorAll('.innerCell');
    innerCells.forEach(function(cell, index){
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = "black";
        });
    });
};

function clearGrid(){
    numOfSides = prompt("How many squares would you like per side this time?");
    container.innerHTML = '';
    createDivs(numOfSides);
};

function funColors(){
    let funCells = document.querySelectorAll(".innerCell");
    funCells.forEach(function(cell, index){
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        })
    });
}

function boringColors(){
    let boringCells = document.querySelectorAll(".innerCell");
    boringCells.forEach(function(cell, index){
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = "black";
        })
    })
}

createDivs(numOfSides);
document.getElementById("clearGrid").onclick = function() {clearGrid()};
funColorsBtn.addEventListener("click", e=> {
    funColors();
});
boringBtn.addEventListener("click", e=> {
    boringColors();
});






