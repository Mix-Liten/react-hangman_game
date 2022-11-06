import { FC, useMemo } from 'react'
import styles from './Keyboard.module.css'

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard: FC<KeyboardProps> = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }) => {
  // 'a' -> 'z'
  const KEYS = useMemo(
    () =>
      new Array(26)
        .fill(null)
        .map((_, i) => i)
        .map(i => String.fromCharCode(97 + i)),
    []
  )
  return (
    <div className={styles.wrapper}>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
