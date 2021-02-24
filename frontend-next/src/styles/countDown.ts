import styled from 'styled-components'
import theme from './theme'

const countDown = styled.div`

  .display {
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${theme.title};
  }

  .display div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${theme.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  .display div span:first-child {
    border-right: 1px solid #F0F1F3;
  }
  .display div span:last-child {
    border-left: 1px solid #F0F1F3;
  }

  .display div span {
    flex: 1;
  }

  .display > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  .countdown-btn {
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${theme.blue};
    color: ${theme.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;
  }

  .countdown-btn:not(:disabled):hover {
    background: ${theme.blueDark};
  }

  .countdown-btn-acive {
    background: ${theme.white};
    color: ${theme.title}
  }
  .countdown-btn-acive:not(:disabled):hover {
    background: ${theme.red};
    color: ${theme.white};
  }

  .countdown-btn:disabled {
    background: ${theme.white};
    color: ${theme.text};
    cursor: not-allowed;
  }

`
export default countDown
