import { Dispatch, SetStateAction, useState } from "react";


export default function MoveList(props: { history: any[], setxIsNext: Function }) {
    const [currentMove, setCurrentMove]: [currentMove: number, setCurrentMove: Dispatch<SetStateAction<number>>] = useState(0)
    const curSquares = props.history[history.length - 1]

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove)
        props.setxIsNext(nextMove % 2 === 0);
    }

    const moves = props.history.map((squares, move) => {
        let description = 'Go to '
        if (move !== 0) {
            description += 'step #' + move
        } else {
            description += 'start'
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return moves
} 