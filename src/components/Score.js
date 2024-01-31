import React from 'react'

const Score = ({score}) => {
  let scoreClass;

  if (score >= 80) {
    scoreClass = 'high-score';
  } else if (score >= 50) {
    scoreClass = 'medium-score';
  } else {
    scoreClass = 'low-score';
  }
  return (
    <div>
      <p><b>Your score is:</b><span className={scoreClass}> {score}</span></p>
    </div>
  );
};

export default Score;
