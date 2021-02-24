import { useState } from 'react';
import Styles from '../../styles/challengebox'

function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true)

  return(
    <Styles>
      {hasActiveChallenge ? (
        <div className="challenge-active">
          <header>Ganhe 400 XP</header>

          <main>
            <img src="icons/body.svg" alt="mão segurando um halter"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className="chalenge-btn-fail">
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
