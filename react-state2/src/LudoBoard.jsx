import { useState } from "react";
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0})
    function updateBlue(){
        moves.blue += 1;
        setMoves({...moves});
    }
    function updateRed(){
        moves.red += 1;
        setMoves({...moves});
    }
    function updateYellow(){
        moves.yellow += 1;
        setMoves({...moves});
    }
    function updateGreen(){
        moves.green += 1;
        setMoves({...moves});
    }
    return(<div>
        <p>Game Begins!</p>
        <p>Blue Moved = {moves.blue}</p>
        <button onClick={updateBlue}>+1</button>
        <p>Red Moved = {moves.red}</p>
        <button onClick={updateRed}>+1</button>
        <p>Yellow Moved = {moves.yellow}</p>
        <button onClick={updateYellow}>+1</button>
        <p>Green Moved = {moves.green}</p>
        <button onClick={updateGreen}>+1</button>
    </div>
    );
}