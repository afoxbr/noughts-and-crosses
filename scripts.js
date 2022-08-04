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

const playGame = (() => {
    document.getElementById("newGame").addEventListener("click", function () {
        for (i = 0; i < 9; i++) {
            gameBoard.gridContents[i] = "";
        };
        gameBoard.generateBoard();
    });
})();