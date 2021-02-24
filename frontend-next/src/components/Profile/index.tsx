import Styles from '../../styles/profile'

function  Profile() {
  return(
    <Styles >
      <img className="profile-img" src="https://github.com/brunoamaia.png" alt="Imagem de perfil"/>
      <div>
        <strong>Bruno Maia</strong>
        <p>
          <img src="icons/Level.svg" alt="level up"/>
          Level 1
        </p>
      </div>
    </Styles>
  );
}

export default Profile
