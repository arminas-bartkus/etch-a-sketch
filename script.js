const container = document.querySelector(".container");
const div = document.querySelectorAll("div");
const changeBtn = document.querySelector(".change");
let lastTenArray = [];


// Web page intialisation

createGrid();
let gridSquare = document.querySelectorAll(".gridSquare");
addListeners();


// i loop, creates n (16) divs and makes container their parent
// j loop, creates n (16) divs and makes sub container their parent
// flexbox in styles.css arranges divs to form a n x n grid.


function createGrid(n = 16) {

    for (i = 1; i <= n; i++) {

        let subContainer = document.createElement("div");
        subContainer.className = "subContainer";
        container.appendChild(subContainer);

        for (j = 1; j<= n; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridSquare";
            subContainer.appendChild(gridSquare);
        };
    };
};


function addListeners() {


    gridSquare.forEach(square => {
        square.addEventListener("mouseover", function() {
           
           // Generate a random colour 

            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            let backgroundColorArg = "background: " + "#" + randomColour;
            
            // Increase opacity by 0.1 with every pass over the same element
            
            if (!square.classList.contains("touched")) {
                
                square.classList.add("touched")
                square.setAttribute("style", backgroundColorArg);
                square.style.opacity = 0.1; 
            }
        
            else {
                square.style.opacity =  parseFloat(square.style.opacity) + 0.1;
            }
            

        });
        
    });
};


changeBtn.addEventListener("click", function() {


    let newGridSize = "";
   
    while (newGridSize < 1 || newGridSize > 100 || newGridSize == "") {
         newGridSize = prompt("Enter a grid size (1-100)");
    }
    //Clear existing grid
    container.innerHTML = "";

    // Produces and sets logic for new grid
    createGrid(newGridSize);
    gridSquare = document.querySelectorAll(".gridSquare");
    addListeners();

});


