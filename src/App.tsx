import { useState, useCallback, useEffect } from 'react'
import words from './assets/wordList.json'
import styles from './App.module.css'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'
import { Alert } from './components/Alert'

const getWord = () => words[Math.floor(Math.random() * words.length)]

declare global {
  interface Window {
    answer: string
  }
}

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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e
      if (key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      const newWord = getWord()
      window.answer = newWord
      setWordToGuess(newWord)
    }
    window.answer = wordToGuess

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1>Hangman</h1>
      <div className={styles.alertBox}>
        {isLoser && (
          <Alert type="error">
            Nice Try
            <br />
            <span className={styles.info}>
              Press <strong>Enter</strong> or
              <br />
              <strong>Refresh</strong> to play again
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
              <strong>Refresh</strong> to play again
            </span>
          </Alert>
        )}
      </div>
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
