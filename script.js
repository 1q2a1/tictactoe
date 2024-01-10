function player(somePlayerName, somePlayerToken){
    const playerName = somePlayerName
    const playerToken = somePlayerToken

    function getPlayerName(){
        return playerName
    }

    function getPlayerToken(){
        return playerToken 
    }

    return {getPlayerName, getPlayerToken}
}

function gameBoard() {
    const numRows = 3
    const numCols = 3
    let board = []

    for (let i=0; i<numRows; i++){
        board[i] = []
        for (let j=0; j<numCols; j++){
            board[i].push(cell())
        }
    }

    function placeToken(rowNum, colNum, player){
        const newCell = board[rowNum][colNum] 
        newCell.setCellValue(player.getPlayerToken())
        printBoard()
    }

    function printBoard(){
        const boardValues = []
        for (let i=0; i<board.length;i++){
            const curRow = []
            for (let j=0; j<board[0].length; j++){
                const curCellVal = board[i][j].getCellValue()
                curRow.push(curCellVal)
            }
            boardValues.push(curRow)
        }
        console.log(JSON.parse(JSON.stringify(boardValues)))
    }
    printBoard()
    return {placeToken, printBoard}
}

function cell() {
    let  value = ""

    function getCellValue(){
        return value
    }
    function setCellValue(playerToken){
        value = playerToken
    }
    return {getCellValue, setCellValue}
}

const theBoard = gameBoard()
const player1 = player("Player 1", "X")
const player2 = player("Player 2", "O")
theBoard.placeToken(0,0, player1)
theBoard.placeToken(1,1,player2)
