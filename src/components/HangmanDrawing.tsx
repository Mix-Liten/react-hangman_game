import { FC } from 'react'

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing: FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  return <div>{numberOfGuesses}</div>
}

export default HangmanDrawing
