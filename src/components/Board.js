import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  // First, flatten empty array
  // then populate each object element with an instance of Square component?
  return squares.flat().map((square) =>{
    return <Square key={square.id} id={square.id} value={square.value} onClickCallback={onClickCallback}/>
  });
}

const Board = ({ squares, onClickCallback }) => {
  // assign returned output from helper funtion with squares and onClickCallBack parameters to new variable squareList
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
