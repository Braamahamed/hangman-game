import React from 'react';
import Letter from './Letter';


const Solution = ({solution, letterStatus}) => {
  const { word, hint } = solution;
  const wordDisplay = Array.from(word).map((char) =>
    <span>_</span>
  );
  return (
    <>
     <p>
        {Array.from(word).map((letter, index) => (
          <Letter key={index} value={letterStatus[letter]?letter:"_ "} status={false} />
        ))}
      </p>
      <p>{wordDisplay}</p>
    <div>
        <em>{hint}</em>
    </div>
    </>
  )
};

export default Solution;
