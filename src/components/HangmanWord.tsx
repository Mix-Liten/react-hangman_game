import { FC } from 'react'

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

const HangmanWord: FC<HangmanWordProps> = ({ guessedLetters, wordToGuess, reveal = false }) => {
  return <div>HangmanWord</div>
}

export default HangmanWord
