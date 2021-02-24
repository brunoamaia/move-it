import { useEffect, useState } from 'react';
import Styles from '../../styles/countDown'

function Countdown() {
  const totalTime = 25*60
  let contdownTimeout: NodeJS.Timeout;
  
  const [time, setTime] = useState(totalTime)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time/60)
  const seconds = time % 60
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  
  const [isActive, setIsActive] = useState(false)
  function startResetCountdown() {
    setIsActive(!isActive)

    if (isActive) {
      clearTimeout(contdownTimeout)
      setTime(totalTime)
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      contdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <Styles>
      <div className="display">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className="countdown-btn " onClick={startResetCountdown} >
          Ciclo encerrado
        </button>
      ) : (
        <button
          type="button"
          className={isActive ? 'countdown-btn countdown-btn-acive' : 'countdown-btn'}
          onClick={startResetCountdown}
        >
          {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
        </button>
      )}



    </Styles>
  );
}

export default Countdown
