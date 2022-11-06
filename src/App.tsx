import { useState } from 'react'
import words from './assets/wordList.json'
import styles from './App.module.css'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className={styles.wrapper}>
      <div className={styles.alert}>Winner! - Refresh to try again</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className={styles.keyboardWrapper}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
