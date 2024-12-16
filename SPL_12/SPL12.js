class Sudoku {
    constructor() {
        this.board = this.generateBoard();
    }

    generateBoard() {
        let board = Array.from({ length: 9 }, () => Array(9).fill(0));
        this.fillBoard(board);
        return board;
    }

    fillBoard(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    const nums = this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    for (let num of nums) {
                        if (this.isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (this.fillBoard(board)) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    isValid(board, row, col, num) {
        return !this.checkRow(board, row, num) &&
               !this.checkCol(board, col, num) &&
               !this.checkBox(board, row, col, num);
    }

    checkRow(board, row, num) {
        return board[row].includes(num);
    }

    checkCol(board, col, num) {
        return board.some(row => row[col] === num);
    }

    checkBox(board, row, col, num) {
        const boxRowStart = Math.floor(row / 3) * 3;
        const boxColStart = Math.floor(col / 3) * 3;
        for (let r = boxRowStart; r < boxRowStart + 3; r++) {
            for (let c = boxColStart; c < boxColStart + 3; c++) {
                if (board[r][c] === num) return true;
            }
        }
        return false;
    }

    checkErrors() {
        let hasErrors = false;
        for (let i = 0; i < 9; i++) {
            if (this.checkRowErrors(i)) {
                console.error(`Ошибка в строке: ${i}`);
                hasErrors = true;
            }
            if (this.checkColErrors(i)) {
                console.error(`Ошибка в колонне: ${i}`);
                hasErrors = true;
            }
            if (this.checkBoxErrors(i)) {
                console.error(`Ошибка в квадрате: ${i}`);
                hasErrors = true;
            }
        }
        if (!hasErrors) {
            console.log('Ошибок нет.');
        }
    }

    checkRowErrors(row) {
        const seen = new Set();
        for (let num of this.board[row]) {
            if (num !== 0 && seen.has(num)) return true;
            if (num !== 0) seen.add(num);
        }
        return false;
    }

    checkColErrors(col) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const num = this.board[row][col];
            if (num !== 0 && seen.has(num)) return true;
            if (num !== 0) seen.add(num);
        }
        return false;
    }

    checkBoxErrors(box) {
        const seen = new Set();
        const boxRowStart = Math.floor(box / 3) * 3;
        const boxColStart = (box % 3) * 3;
        for (let row = boxRowStart; row < boxRowStart + 3; row++) {
            for (let col = boxColStart; col < boxColStart + 3; col++) {
                const num = this.board[row][col];
                if (num !== 0 && seen.has(num)) return true;
                if (num !== 0) seen.add(num);
            }
        }
        return false;
    }

    resetBoard() {
        this.board = Array.from({ length: 9 }, () => Array(9).fill(0));
        console.log("Доска сброшена.");
    }

    printBoard() {
        console.table(this.board);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

const sudoku = new Sudoku();
sudoku.printBoard();
sudoku.checkErrors();
sudoku.resetBoard();
sudoku.printBoard();