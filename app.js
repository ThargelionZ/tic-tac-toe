
document.addEventListener("DOMContentLoaded", () => {

    const winBanner = document.createElement("h1");
    winBanner.innerHTML = "You Won!";

    const gameContent = document.querySelector(".game-content");
    const resetButton = document.querySelector(".button");

    let squares = Array.from(document.querySelectorAll(".grid-square"));
    let isXTurn = true;
    let winState = false;

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if(!winState) {
                if(square.innerHTML === "" && isXTurn) {
                    square.innerHTML = "X";
                    isXTurn = false;
                } else if(square.innerHTML === "" && !isXTurn) {
                    square.innerHTML = "O";
                    isXTurn = true;
                }
                winCheck("X");
                winCheck("O");
            }
        });
    });

    resetButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.innerHTML = "";
        });
        winState = false;
        winBanner.remove();
        isXTurn = true;
    });

    function winCheck(letterChecked) {

        // Horizontal Check
        for(let index = 0; index < 7; index += 3) {
            if(squares[index].innerHTML === letterChecked && squares[index + 1].innerHTML === letterChecked && squares[index + 2].innerHTML === letterChecked) {
                winState = true;
                gameContent.append(winBanner);
            }
        }

        // Vertical Check
        for(let index = 0; index < 3; index++) {
            if(squares[index].innerHTML === letterChecked && squares[index + 3].innerHTML === letterChecked && squares[index + 3 * 2].innerHTML === letterChecked) {
                winState = true;
                gameContent.append(winBanner);
            }
        }

        // Diagonal Check
        if(squares[0].innerHTML === letterChecked && squares[4].innerHTML === letterChecked && squares[8].innerHTML === letterChecked) {
            winState = true;
            gameContent.append(winBanner);
        } else if(squares[2].innerHTML === letterChecked && squares[4].innerHTML === letterChecked && squares[6].innerHTML === letterChecked) {
            winState = true;
            gameContent.append(winBanner);
        }
    }


});
