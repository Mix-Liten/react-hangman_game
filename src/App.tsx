import { useState } from 'react'
import words from './assets/wordList.json'
import styles from './App.module.css'
import HangmanDrawing from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'

const getWord = () => words[Math.floor(Math.random() * words.length)]

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const correctLetters = guessedLetters.filter(letter => wordToGuess.includes(letter))
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.alert}>Winner! - Refresh to try again</div>
      {wordToGuess}
      {/* <HangmanDrawing /> */}
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div className={styles.keyboardWrapper}>
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
        />
      </div>
    </div>
  )
}

export default App
