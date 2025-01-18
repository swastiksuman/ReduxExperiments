import React, { useEffect } from 'react';
import Square from './Square';

const Board = () => {
    const [state, setState] = React.useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = React.useState('X');
    const [winner, setWinner] = React.useState(null);

    const handleClick = (index) => {
        const squares = state.slice();
        squares[index] = currentPlayer;
        setState(squares);
        checkWinner();
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };
    useEffect(() => {
    }, [state]);
    const checkWinner = () => {
        const winnerLogic  = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                setWinner(currentPlayer);
                return console.log(`${state[a]} is the winner`);
            }
        }
    }
    return (
        <div className="board-container">
            <div className="board-row">
                <Square onClick={()=>handleClick(0)} value={state[0]}></Square>
                <Square onClick={()=>handleClick(1)} value={state[1]}></Square>
                <Square onClick={()=>handleClick(2)} value={state[2]}></Square>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}></Square>
                <Square onClick={()=>handleClick(4)} value={state[4]}></Square>
                <Square onClick={()=>handleClick(5)} value={state[5]}></Square>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}></Square>
                <Square onClick={()=>handleClick(7)} value={state[7]}></Square>
                <Square onClick={()=>handleClick(8)} value={state[8]}></Square>
            </div>
            
             <div>{winner} is the winner.</div>
        </div>
    );
};

export default Board;