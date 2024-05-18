import { Dispatch, ReactElement, SetStateAction, useState } from "react"
import Square from "./Square"
import MoveList from "./MoveList"

export default function Board(): ReactElement {
    const [xIsNext, setxIsNext]: [xIsNext: boolean, setIsNext: Dispatch<SetStateAction<boolean>>] = useState(true)
    const [squares, setSquares]: [squares: any[], setSquares: Dispatch<SetStateAction<any[]>>] = useState(Array(9).fill(null))
    const [history, setHistory]: [history: any[], setHistory: Dispatch<SetStateAction<any[]>>] = useState([Array(9).fill(null)])

    const winner = calcWinner(squares)
    let status;
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    const handleClick = (i: number) => {
        if (squares[i] || calcWinner(squares)) {
            return
        }

        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        
        setSquares(nextSquares)
        setxIsNext(!xIsNext)
        setHistory([...history, nextSquares])
    }

    function calcWinner(squares: any[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    return (
        <>
            <div className="status">
                {status}
            </div>
            <div className="game">
                <div>
                    <div className="board-row">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
                <ul className="game-moves">
                    <MoveList history={history} setxIsNext={setxIsNext} />
                </ul>
            </div>
        </>
    )
}