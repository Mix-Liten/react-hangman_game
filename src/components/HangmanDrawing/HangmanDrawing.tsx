import { FC } from 'react'
import styles from './HangmanDrawing.module.css'

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const BODY_PARTS = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg']

const HangmanDrawing: FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  return (
    <div className={styles.wrapper}>
      {BODY_PARTS.slice(0, numberOfGuesses).map(part => (
        <div className={styles[part]} key={part} />
      ))}
      <div className={styles.gallow}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default HangmanDrawing
