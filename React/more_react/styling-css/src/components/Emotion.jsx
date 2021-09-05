
/** @jsx jsx */
import { jsx } from '@emotion/react'

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const titleStyle = css({
    
  })
  return (
    <div>
      <p>-- Emotion --</p>
      <button>FIGHT!!</button>
    </div>
  )
}