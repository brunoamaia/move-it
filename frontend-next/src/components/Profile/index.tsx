import { useContext } from 'react';
import { ChallengesContext } from '../../contexcts/ChallengeContext';
import Styles from '../../styles/profile'

function  Profile() {
  const { level } = useContext(ChallengesContext)
  
  return(
    <Styles >
      <img className="profile-img" src="https://github.com/brunoamaia.png" alt="Imagem de perfil"/>
      <div>
        <strong>Bruno Maia</strong>
        <p>
          <img src="icons/Level.svg" alt="level up"/>
          Level {level}
        </p>
      </div>
    </Styles>
  );
}

export default Profile
