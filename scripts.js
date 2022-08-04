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

const player = (name, symbol) => {
    return {
        name,
        symbol,
    };
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

const playGame = (() => {
    document.getElementById("newGame").addEventListener("click", function() {
        for (i = 0; i < 9; i++) {
            gameBoard.gridContents[i] = "k";
        };
        gameBoard.generateBoard();
    });
    const clickBoard = () => {for (i = 0; i < 9; i++) {
        document.getElementById([i]).addEventListener("click", function() {
            gameBoard.gridContents[i] = "k";
            gameBoard.generateBoard();
        });
    }};
    clickBoard();
    return {
        clickBoard
    };
})();

