import React, { useState } from 'react';
import Board from './components/Board';

import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';

import './style/root.scss';

const NEW_GAME = [{board:Array(9).fill(null),isXNext:true}]

const App = () => {
  const [history, sethistory] = useState(NEW_GAME);
  const [isXNext, setIsXNext] = useState(false);

  const [currmove,setcurrmove]=useState(0);

  const current=history[currmove];


  const {winner,winningSquares} = calculateWinner(current.board);
 

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {

      const last=prev[prev.length-1];

      const newboard= last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({board:newboard,isXNext:!last.isXNext})
    });

    setcurrmove(prev =>prev+1);

    
  };

  const moveTo = (move) =>{

    setcurrmove(move);

  }

  const onNewGame = () =>{
    sethistory(NEW_GAME)
    setcurrmove(0)
  }

  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={onNewGame} className= {`btn-reset ${winner ? 'active' :''}`}>Start new Game</button>
      <h2 style={{fontWeight:'normal'}}>Cuurent Game History</h2>
      <History history={history} moveTo={moveTo} currmove={currmove}/>
      <div className="bg-balls"/>
    </div>
  );
};

export default App;
