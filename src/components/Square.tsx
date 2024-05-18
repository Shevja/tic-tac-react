import { ReactElement, MouseEventHandler } from "react";

export default function Square(props: { value: string, onSquareClick: MouseEventHandler<HTMLElement> }): ReactElement {
    return <button className="square" onClick={props.onSquareClick}>{props.value}</button>
}