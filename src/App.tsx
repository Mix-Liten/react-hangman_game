import { useState, useCallback } from 'react'
import words from './assets/wordList.json'
import styles from './App.module.css'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'
import { Alert } from './components/Alert'

const getWord = () => words[Math.floor(Math.random() * words.length)]

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const correctLetters = guessedLetters.filter(letter => wordToGuess.includes(letter))
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.alertBox}>
        {isLoser && (
          <Alert type="error">
            Nice Try
            <br />
            <span className={styles.info}>
              Press <strong>Enter</strong> or
              <br />
              Refresh to play again
            </span>
          </Alert>
        )}
        {isWinner && (
          <Alert type="success">
            Winner!
            <br />
            <span className={styles.info}>
              Press <strong>Enter</strong> or
              <br />
              Refresh to play again
            </span>
          </Alert>
        )}
      </div>
      {wordToGuess}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />
      <div className={styles.keyboardWrapper}>
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
          disabled={isLoser || isWinner}
        />
      </div>
    </div>
  )
}

export default App
