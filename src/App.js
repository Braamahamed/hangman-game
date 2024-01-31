import logo from './logo.svg';
import React, { useState } from 'react';
import Score from './components/Score';
import Letters from './components/Letters';
import Solution from './components/Solution';
import EndGame from './components/EndGame';
import './App.css';

const App = () => {
    const generateLetterStatuses = () => {
    const letterStatus = {};
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      letterStatus[letter] = false;
    }
    return letterStatus;
  };
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());

  const [solution, setSolution] = useState({
    word: "ARGENTINA", 
    hint: "The land of Tango", 
  });

  const [score, setScore] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState(false);

  const selectLetter = (letter) => {
    if(letterStatus[letter]=== false){
      const newLetterStatus = ({
        ...letterStatus,
        [letter]: true,
      });
      setLetterStatus(newLetterStatus)
      let newScore;
      if (solution.word.includes(letter)) {
        newScore = score + 5
      } else {
        newScore = Math.max(score - 20, 0)
      }
      setScore(newScore);
      if(newScore === 0){
        setGameOver(true)
        setGuessedCorrectly(false)
      }
      const allLettersGuessed =Array.from(solution.word).every((l) => newLetterStatus[l]);
      if(allLettersGuessed){
        setGameOver(true)
        setGuessedCorrectly(true)
      }
    }
  }; 


  return (
    <div>
    {gameOver ? (
      <EndGame yourscore={score} secretword={solution.word} guessedCorrectly={guessedCorrectly} />
    ) : (
      <>
        <Score score={score} />
        <Solution solution={solution} letterStatus={letterStatus} />
        <Letters
          letterStatus={letterStatus}
          solution={solution}
          selectLetter={selectLetter}
        />
      </>
    )}
  </div>
  );
}

export default App;
