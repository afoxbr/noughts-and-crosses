//Below module is what displays game grid
const gameBoard = (() => {
    const gridContents = ["x", "o", "o", "x", "o", "x", "o", "x", "o"];
    const generateBoard = () => {for (i = 0; i < 9; i++) {
        document.getElementById([i]).innerHTML = gridContents[(i)];
    }};
    generateBoard();
    return {
        generateBoard,
        gridContents,
    };
})();

//Factory function to make player objects
const player = (name, symbol) => {
    return {
        name,
        symbol,
    };
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

//The machinery that makes the game move
const playGame = (() => {
    //New game button, empties grid
    document.getElementById("newGame").addEventListener("click", function() {
        for (i = 0; i < 9; i++) {
            gameBoard.gridContents[i] = "";
        };
        gameBoard.generateBoard();
    });
    //Below section is core functionality
    //Couldn't make a loop work, will attempt again later
    const clickBoard = () => {
        let lastClick = "X"; 
        document.getElementById("0").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[0] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[0] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("1").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[1] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[1] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("2").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[2] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[2] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("3").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[3] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[3] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("4").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[4] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[4] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("5").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[5] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[5] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("6").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[6] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[6] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("7").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[7] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[7] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
        document.getElementById("8").addEventListener("click", function() {
            if (lastClick == "X") {
                gameBoard.gridContents[8] = "O";
                lastClick = "O";
            } else if (lastClick == "O") {
                gameBoard.gridContents[8] = "X";
                lastClick = "X"
            };
            gameBoard.generateBoard();
        });
    };
    clickBoard();
    return {
        clickBoard,
    };
})();

