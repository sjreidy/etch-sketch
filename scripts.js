
let numOfSides = 16;

function createDivs(numOfSides){
    var cellSize = 600/numOfSides;
    for(let i=0; i < numOfSides*numOfSides; i++){
        var innerCell = document.createElement("div");
        innerCell.style.height = `${cellSize}px`;
        innerCell.style.width = `${cellSize}px`;
        innerCell.classList.add("innerCell");
        document.getElementById('container').appendChild(innerCell);
    }
}

createDivs(16);