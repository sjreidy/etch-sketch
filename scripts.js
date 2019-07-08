var numOfSides = 18;
var container = document.getElementById('container');



function createDivs(numOfSides){
    var cellSize = 600/numOfSides;
    for(let i=0; i < numOfSides*numOfSides; i++){
        var innerCell = document.createElement("div");
        innerCell.style.height = `${cellSize}px`;
        innerCell.style.width = `${cellSize}px`;
        innerCell.classList.add("innerCell");
        document.getElementById('container').appendChild(innerCell);
        var innerCells = document.querySelectorAll('.innerCell');
        innerCells.forEach(function(cell, index) {
            cell.addEventListener('mouseover', function(){
                cell.style.backgroundColor = "black";
            });
        });
        
    }
}

function clearGrid(){
    numOfSides = prompt("How many squares would you like per side this time?");
    container.innerHTML = '';
    createDivs(numOfSides);
}

createDivs(numOfSides);
document.getElementById("clearGrid").onclick = function() {clearGrid()};









