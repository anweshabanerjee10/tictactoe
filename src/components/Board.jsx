import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div className='board'>
      <div className='board-row'>
        <Square val={0}></Square>
        <Square val={1}></Square>
        <Square val={2}></Square>
      </div>

      <div  className='board-row'>
        <Square val={3}></Square>
        <Square val={4}></Square>
        <Square val={5}></Square>
      </div>

      <div  className='board-row'>
        <Square val={6}></Square>
        <Square val={7}></Square>
        <Square val={8}></Square>
      
      </div>
    </div>
  )
}

export default Board
