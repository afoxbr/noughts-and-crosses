//Below module is what displays game grid
const gameBoard = (() => {
    const gridContents = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
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
//Also keeps track of who is winning
const player = (name, symbol, domRef) => {
    let gameWon = false;
    let winCount = 0;
    document.addEventListener("click", () => {
        document.getElementById(domRef).innerHTML = `Rounds won: ${winCount}`
        if (((gameBoard.gridContents[0] == symbol) && (gameBoard.gridContents[1] == symbol) && (gameBoard.gridContents[2] == symbol))
        || ((gameBoard.gridContents[3] == symbol) && (gameBoard.gridContents[4] == symbol) && (gameBoard.gridContents[5] == symbol))
        || ((gameBoard.gridContents[6] == symbol) && (gameBoard.gridContents[7] == symbol) && (gameBoard.gridContents[8] == symbol))
        || ((gameBoard.gridContents[0] == symbol) && (gameBoard.gridContents[3] == symbol) && (gameBoard.gridContents[6] == symbol))
        || ((gameBoard.gridContents[1] == symbol) && (gameBoard.gridContents[4] == symbol) && (gameBoard.gridContents[7] == symbol))
        || ((gameBoard.gridContents[2] == symbol) && (gameBoard.gridContents[5] == symbol) && (gameBoard.gridContents[8] == symbol))
        || ((gameBoard.gridContents[0] == symbol) && (gameBoard.gridContents[4] == symbol) && (gameBoard.gridContents[8] == symbol))
        || ((gameBoard.gridContents[2] == symbol) && (gameBoard.gridContents[4] == symbol) && (gameBoard.gridContents[6] == symbol))) {
            alert(`${name} wins this round!`);
            for (i = 0; i < 9; i++) {
                gameBoard.gridContents[i] = " ";
            };
            gameBoard.generateBoard();
            winCount += 1;
            document.getElementById(domRef).innerHTML = `Rounds won: ${winCount}`
            return (gameWon = true);
        };
        if (winCount == 3) {
            alert(`GAME OVER!! ${name} wins best-of-three!`)
            winCount = 0;
        };
        if ((gameBoard.gridContents.includes(" ") == false) && (gameWon == false)) {
            alert("It's a tie!");
            for (i = 0; i < 9; i++) {
                gameBoard.gridContents[i] = " ";
            };
            gameBoard.generateBoard();
        }
    });
    return {
        name,
        symbol,
        domRef,
        winCount,
        gameWon,
    };
};

const player1 = player("Player 1", "X", "win1");
const player2 = player("Player 2", "O", "win2");

//The machinery that makes the game move
const playGame = (() => {
    //New game button, empties grid, resets winCounts
    document.getElementById("newGame").addEventListener("click", function() {
        player1.winCount = 0;
        player2.winCount = 0;
        for (i = 0; i < 9; i++) {
            gameBoard.gridContents[i] = " ";
        };
        gameBoard.generateBoard();
        player1.name = prompt("Player 1 enter your name:")
        document.getElementById("play1Name").innerHTML = player1.name;
        player2.name = prompt("Player 2 enter your name:")
        document.getElementById("play2Name").innerHTML = player2.name;
    });

    //Below section is core functionality
    //Couldn't make a loop work, will attempt again later
    const clickBoard = () => {
        let lastClick = "X"; 
        document.getElementById("0").addEventListener("click", function() {
            if (gameBoard.gridContents[0] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[0] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[0] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("1").addEventListener("click", function() {
            if (gameBoard.gridContents[1] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[1] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[1] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("2").addEventListener("click", function() {
            if (gameBoard.gridContents[2] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[2] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[2] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("3").addEventListener("click", function() {
            if (gameBoard.gridContents[3] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[3] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[3] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("4").addEventListener("click", function() {
            if (gameBoard.gridContents[4] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[4] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[4] = "X";
                    lastClick = "X"
                };
            } else{
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("5").addEventListener("click", function() {
            if (gameBoard.gridContents[5] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[5] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[5] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("6").addEventListener("click", function() {
            if (gameBoard.gridContents[6] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[6] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[6] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("7").addEventListener("click", function() {
            if (gameBoard.gridContents[7] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[7] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[7] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
        document.getElementById("8").addEventListener("click", function() {
            if (gameBoard.gridContents[8] == " ") {
                if (lastClick == "X") {
                    gameBoard.gridContents[8] = "O";
                    lastClick = "O";
                } else if (lastClick == "O") {
                    gameBoard.gridContents[8] = "X";
                    lastClick = "X"
                };
            } else {
                alert("Please select an empty box!")
            };
            gameBoard.generateBoard();
        });
    };

    //AI mode. AI is, of course, an Olympic gymnastics tier stretch. It's random
    //Nonfunctional at the moment. Will try to make it work
//    document.getElementById("aiGame").addEventListener("click", function() {
//        lastClick = "O";
//        player1.winCount = 0;
//        player2.winCount = 0;
//        for (i = 0; i < 9; i++) {
//            gameBoard.gridContents[i] = " ";
//        };
//        gameBoard.generateBoard();
//        player1.name = prompt("Player 1 enter your name:")
//        document.getElementById("play1Name").innerHTML = player1.name;
//        player2.name = "Calculon"
//        document.getElementById("play2Name").innerHTML = player2.name;
//        document.addEventListener("click", function() {
//            while (lastClick == "X") {
//                function getRandomInt(min, max) {
//                    min = Math.ceil(min);
//                    max = Math.floor(max);
//                    return Math.floor(Math.random() * (max-min) + min);
//                };
//                k = (getRandomInt(0, 9));
//                if (gameBoard.gridContents[k] == " ") {
//                    gameBoard.gridContents[k] = "O";
//                    lastClick = "O";
//                };
//            };
//        });
//    });
    clickBoard();
    return {
        clickBoard,
    };
})();

