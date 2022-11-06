import { FC } from 'react'

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard: FC<KeyboardProps> = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }) => {
  return <div>Keyboard</div>
}

export default Keyboard
