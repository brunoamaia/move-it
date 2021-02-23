import styled from 'styled-components';

import theme from './theme'

const ExperienceBar = styled.header`
  display: flex;
  align-items: center;
  height: 2rem;

  span {
    font-size: 1rem;
    margin: 0 auto 1rem;
  }

 .progressBar {
    flex: 1;
    margin: 0 1.5rem 1rem;
    position: relative;
    text-align: center;
    flex-direction: column;
  }

  progress {
    display: flex;

    height: 6px;
    width: 100%;

    margin: 0;
    padding: 0;
    border: none;
    
    background: ${theme.grayLine};
    border-radius: 4px;

  }
  /* Changue color of progress bar */
  progress::-moz-progress-bar {
    border-radius: 2px;
    background: ${theme.green};
  }
  progress::-webkit-progress-value {  
    border-radius: 2px;
    background: ${theme.green};
  }
  /* remove bakbround color of progress */
  progress::-webkit-progress-bar {
    background: ${theme.grayLine};
  }

  .current-experience {
    position: absolute;
    top: 10px;
    transform: translateX(-50%);
  }
`

export default ExperienceBar
