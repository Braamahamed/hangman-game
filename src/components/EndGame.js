import React from 'react';

const EndGame = ({ secretword ,guessedCorrectly, yourscore }) => {
  return (
    <div>
      {guessedCorrectly ? (
        <p>Congratulations! You guessed the word! your score is:{yourscore}</p>
      ) : (
        <p>Oops! The secret word was: {secretword}</p>
      )}
    </div>
  );
};

export default EndGame;
