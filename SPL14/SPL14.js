const gridContainer = document.getElementById('sudoku-grid');
const generateNewBtn = document.getElementById('generate-new');
const checkSudokuBtn = document.getElementById('check-sudoku');
const generateSolutionBtn = document.getElementById('generate-solution');

let sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(''));
let solutionGrid = [];
let isChecking = false; 

function generateSolvedBoard() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(''));
    fillBoard(board);
    return board;
}

function fillBoard(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '') {
                let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                shuffleArray(numbers);

                for (let number of numbers) {
                    if (isSafe(board, row, col, number)) {
                        board[row][col] = number;
                        if (fillBoard(board)) {
                            return true;
                        }
                        board[row][col] = '';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isSafe(board, row, col, number) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === number || board[x][col] === number ||
            board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + (x % 3)] === number) {
            return false;
        }
    }
    return true;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateNewSudoku() {
    sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(''));
    solutionGrid = generateSolvedBoard();
    renderSudokuGrid();
}

function renderSudokuGrid() {
    gridContainer.innerHTML = '';

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;

            input.addEventListener('input', () => {
                if (!/^[1-9]$/.test(input.value)) {
                    input.value = '';
                }
                sudokuGrid[row][col] = input.value ? parseInt(input.value) : '';
            });

            gridContainer.appendChild(input);
        }
    }
}

function checkSudoku() {
    const inputs = document.querySelectorAll('#sudoku-grid input');

    if (isChecking) {
        inputs.forEach(input => {
            input.classList.remove('error', 'correct');
        });
        isChecking = false;
        return;
    }

    inputs.forEach(input => {
        input.classList.remove('correct');
    });

    const board = sudokuGrid.map(row => row.slice());
    let isCorrect = true;

    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const squareSet = new Set();

        for (let j = 0; j < 9; j++) {
            const rowValue = board[i][j];
            const colValue = board[j][i];
            const squareValue = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if (rowValue && rowSet.has(rowValue)) {
                inputs[i * 9 + j].classList.add('error');
                isCorrect = false;
            } else {
                if (rowValue) rowSet.add(rowValue);
            }

            if (colValue && colSet.has(colValue)) {
                inputs[j * 9 + i].classList.add('error');
                isCorrect = false;
            } else {
                if (colValue) colSet.add(colValue);
            }

            if (squareValue && squareSet.has(squareValue)) {
                inputs[(3 * Math.floor(i / 3) + Math.floor(j / 3)) * 9 + (3 * (i % 3) + (j % 3))].classList.add('error');
                isCorrect = false;
            } else {
                if (squareValue) squareSet.add(squareValue);
            }
        }
    }

    if (isCorrect) {
        inputs.forEach(input => {
            if (input.value !== '') {
                input.classList.add('correct');
            }
        });
    }

    isChecking = true;
}

function generateSolution() {
    const inputs = document.querySelectorAll('#sudoku-grid input');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            inputs[i * 9 + j].value = solutionGrid[i][j];
            sudokuGrid[i][j] = solutionGrid[i][j];
        }
    }
}

generateNewBtn.addEventListener('click', generateNewSudoku);
checkSudokuBtn.addEventListener('click', checkSudoku);
generateSolutionBtn.addEventListener('click', generateSolution);

generateNewSudoku();