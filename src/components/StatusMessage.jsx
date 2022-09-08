import React from 'react';

const StatusMessage = ({winner,current}) => {
  

   
    const noofmovesleft=current.board.every (el => el!==null);
    
      { 
          return <h2>{winner &&  `Winner is ${winner}`} {!winner && !noofmovesleft  && `Next player is ${current.isXNext ? 'X' : 'O'}`} {!winner && noofmovesleft && `X and O tied`}</h2>
      }
      
   
  
}

export default StatusMessage;
