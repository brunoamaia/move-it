import { useContext } from "react";

import { CountdownContext } from "../../contexcts/CountdownContext";

import Styles from '../../styles/countDown'

function Countdown() {
  const {  hasFinished, isActive, minutes, seconds, resetCountdown, startCountdown } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
        <button disabled className="countdown-btn " onClick={resetCountdown} >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="countdown-btn countdown-btn-acive"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className="countdown-btn"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}



    </Styles>
  );
}

export default Countdown
