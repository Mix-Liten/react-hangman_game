import { FC } from 'react'
import styles from './HangmanWord.module.css'

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

const HangmanWord: FC<HangmanWordProps> = ({ guessedLetters, wordToGuess, reveal = false }) => {
  return (
    <div className={styles.wrapper}>
      {wordToGuess.split('').map((letter, index) => {
        const isVisible = guessedLetters.includes(letter) || reveal
        const isError = !guessedLetters.includes(letter) && reveal
        return (
          <span className={styles.wordWrapper} key={index}>
            <span
              className={`${styles.word} ${isVisible ? styles.show : styles.hidden} ${isError ? styles.error : ''}`}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default HangmanWord
