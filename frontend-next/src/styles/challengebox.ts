import styled from 'styled-components'
import theme from './theme'

const challengebox = styled.div`
  height: 100%;
  background: ${theme.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  .challenge-active {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .challenge-active header {
    color: ${theme.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${theme.grayLine};
  }

  .challenge-active main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .challenge-active main strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.title};
    margin: 1.5rem 0 1rem;
  }

  .challenge-active main p {
    line-height: 1.5;
  }

  .challenge-active footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .challenge-active footer button {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    color: ${theme.white};
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
  }
  .challenge-active footer button:hover {
    filter: brightness(0.9);
  }

  .chalenge-btn-fail {
    background: ${theme.red};
  }
  .chalenge-btn-success {
    background: ${theme.green};
  }




  .challenge-not-active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .challenge-not-active strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .challenge-not-active p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  .challenge-not-active p img {
    margin-bottom: 1rem;
  }

`

export default challengebox
