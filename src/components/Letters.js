import React from 'react';
import Letter from './Letter';

const Letters = ({letterStatus, selectLetter, solution}) => {
  const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  return (
    <div>
      <h4>Available Letters</h4>
      {Array.from(availableLetters).map((letter, idx) => (
      <Letter key={idx} value={letter} status={letterStatus[letter]} onClick={() => selectLetter(letter)}
      />
      ))}
    </div>
  );
};

export default Letters;
