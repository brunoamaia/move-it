import { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexcts/ChallengeContext';
import Styles from '../../styles/challengebox'

function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return(
    <Styles>
      {activeChallenge ? (
        <div className="challenge-active">
          <header>Ganhe 400 XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="mão segurando um halter"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className="chalenge-btn-fail" onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button" className="chalenge-btn-success">
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
