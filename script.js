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
           
           // Code for generating a random colour for each element
           // that is moused over

            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            let backgroundColorArg = "background: " + "#" + randomColour;
            
            square.setAttribute("style", backgroundColorArg);
        
          
          
           // adds moused over square to start of array, removes 11th square
            lastTenArray.unshift(square); 
            lastTenArray.splice(10,1);
            
            // loop that darkens square gradually

            for (i = 0; i <= 9; i++) {
                
                lastTenArray[i].style.opacity = 0.1 + (i * 0.1)
            };

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


