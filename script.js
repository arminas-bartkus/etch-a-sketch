const container = document.querySelector(".container");
const div = document.querySelectorAll("div");
const changeBtn = document.querySelector(".change");
let lastTenArray = Array(10);
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
        
            // resets border, removes 11th item
            lastTenArray.unshift(square);

            lastTenArray[10].setAttribute("style","border:1px; border-style:solid; opacity: 0.2")
            lastTenArray.splice(10,1);
            
            // loop that adjusts fades opacity gradually of the
            // last 10 squares moused over

            for (i = 0; i <= 9; i++) {
                
                lastTenArray[i].style.opacity = 0.1 + (i * 0.1)
            }
            
        });
        
    });
}

// Web page intialisation

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

    // Produces and sets logic for new grid

    createGrid(newGridSize);
    gridSquare = document.querySelectorAll(".gridSquare");
    addListeners();

});


