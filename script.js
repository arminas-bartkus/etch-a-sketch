const container = document.querySelector(".container")
const div = document.querySelectorAll("div");
// i loop, creates n (16) divs and makes container their parent
// j loop, creates n (16 divs and makes sub container their parent)
// styles.css adds flexbox properties to arrange these divs correctly
// via orientation and margin forming a grid

for (i = 1; i <= 16; i++) {

    let subContainer = document.createElement("div")
    subContainer.className = "subContainer";
    container.appendChild(subContainer);

    for (j = 1; j<= 16; j++) {
        let gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        subContainer.appendChild(gridSquare);
    }
}

    let gridSquare = document.querySelectorAll(".gridSquare");
    let gridSquareArr = Array.from(gridSquare);

        gridSquareArr.forEach((square) => {

            square.setAttribute("className", ".blue")



            square.addEventListener("onmouseenter", () => {
        
            })
        
        });
    
    // .onmouseover = function(square) {
    //     square.style.backgroundColor = "blue";
    // };

    // gridSquareArr.forEach((square) => {

    //     console.log(square);


        // square.addEventListener("onmouseenter", function() {
        //     console.log(square);
        // })
    // });

  

// Square.forEach.addEventListener("onmouseenter", function(event) {
    
//     console.log(event)
//     console.log(Square);
//     Square.style.color = "blue;"
// })
