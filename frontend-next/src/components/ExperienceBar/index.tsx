import Style from '../../styles/experienceBar'

function ExperienceBar () {
  return(
    <Style>
      <span>0 XP</span>
      <div className="progressBar">
        <progress
          value={300}
          max={600}
        />

        <span className="current-experience">300 XP</span>
      </div>
      <span>600 XP</span>
    </Style>
  );
}

export default ExperienceBar
