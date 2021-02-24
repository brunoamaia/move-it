import { useContext } from 'react';
import { ChallengesContext } from '../../contexcts/ChallengeContext';
import Style from '../../styles/experienceBar'

function ExperienceBar () {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  
  return(
    <Style>
      <span>0 XP</span>
      <div className="progressBar">
        <progress
          value={currentExperience}
          max={experienceToNextLevel}
        />

        <span className="current-experience">{currentExperience} XP</span>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </Style>
  );
}

export default ExperienceBar
