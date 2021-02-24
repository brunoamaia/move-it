import { useContext } from 'react';
import { ChallengesContext } from '../../contexcts/ChallengeContext';
import Styles from '../../styles/completedChalenges'

function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return(
    <Styles>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
    </Styles>
  );
}

export default CompletedChallenges
