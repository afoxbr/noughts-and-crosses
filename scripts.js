const gameBoard = (() => {
    const gridContents = ["x", "o", "o", "x", "o", "x", "o", "x", "o"];
    for (i = 1; i < 10; i++) {
        document.getElementById([i]).innerHTML = gridContents[(i - 1)];
    };
})();

