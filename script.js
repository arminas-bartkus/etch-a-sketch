const container = document.querySelector(".container");
const div = document.querySelectorAll("div");
const changeBtn = document.querySelector(".change");
let lastTenArray = [];
// i loop, creates n (16) divs and makes container their parent
// j loop, creates n (16 divs and makes sub container their parent)
// styles.css adds flexbox properties to arrange these divs correctly
// via orientation and margin forming a grid

function createGrid(n = 16) {

    for (i = 1; i <= n; i++) {

        let subContainer = document.createElement("div")
        subContainer.className = "subContainer";
        container.appendChild(subContainer);

        for (j = 1; j<= n; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridSquare";
            subContainer.appendChild(gridSquare);
        }
    }

}
function addListeners() {


    gridSquare.forEach(square => {
        square.addEventListener("mouseover", function() {
           
           // Code for generating a random colour for each element
           // that is moused over

            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            let backgroundArg = "background: " + "#" + randomColour;
            
            square.setAttribute("style", backgroundArg)
        
        if (lastTenArray.length < 10) {
            lastTenArray.push(square);
        }
        else {
            lastTenArray.unshift(square);
            lastTenArray.splice(10,1);
        }

        lastTenArray[5].style.opacity = 0.5

        });
        
    });
}

createGrid();
let gridSquare = document.querySelectorAll(".gridSquare");
addListeners();

changeBtn.addEventListener("click", function() {

    let newGridSize = "";
   
    while (newGridSize < 1 || newGridSize > 100) {
         newGridSize = prompt("Enter a grid size (1-100)")
    }
    //Clear existing grid
    container.innerHTML = ""

    createGrid(newGridSize);
    gridSquare = document.querySelectorAll(".gridSquare");
    addListeners();

});


