import { useState } from "react";
function LudoBoard() {
    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });

    function incMoveBlue() {
        setMoves((prevMove) => {
            return {
                ...prevMove,
                blue: prevMove.blue + 1,
            }
        })
    }

    let incMoveYellow = () => {
        setMoves((prevMove) => {
            return {
                ...prevMove,
                yellow: prevMove.yellow + 1,
            }
        })
    }
    let incMoveGreen = () => {
        setMoves((prevMove) => {
            return {
                ...prevMove,
                green: prevMove.green + 1,
            }
        })
    }
    let incMoveRed = () => {
        setMoves((prevMove) => {
            return {
                ...prevMove,
                red: prevMove.red + 1,
            }
        })
    }

    let styleBlue = {
        backgroundColor: "blue",
    }

    let styleYellow = {
        backgroundColor: "yellow",
        color: "black"
    }

    let styleGreen = {
        backgroundColor: "green",
    }

    let styleRed = {
        backgroundColor: "red"
    }


    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves: {moves.blue}</p>
                <button onClick={incMoveBlue} style={styleBlue}>+1</button>

                <p>Yellow Moves: {moves.yellow}</p>
                <button onClick={incMoveYellow} style={styleYellow}>+1</button>

                <p>Green Moves: {moves.green}</p>
                <button onClick={incMoveGreen} style={styleGreen}>+1</button>

                <p>Red Moves: {moves.red}</p>
                <button onClick={incMoveRed} style={styleRed}>+1</button>
            </div>
        </div>
    )
}

export default LudoBoard;