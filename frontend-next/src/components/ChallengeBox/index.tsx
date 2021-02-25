import { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexcts/ChallengeContext';
import { CountdownContext } from '../../contexcts/CountdownContext';
import Styles from '../../styles/challengebox'

function ChallengeBox() {
  const { activeChallenge, completedChalenge, resetChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completedChalenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return(
    <Styles>
      {activeChallenge ? (
        <div className="challenge-active">
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="mão segurando um halter"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className="chalenge-btn-fail" onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" className="chalenge-btn-success" onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challenge-not-active">
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Complete-os e ganhe experiência para subir de level.
          </p>
        </div>
      )}
    </Styles>
  );
}

export default ChallengeBox
