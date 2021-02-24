import { createContext, ReactNode, useState } from 'react'

import challenges from '../../challenges.json'

interface ChallengeProviderProps {
  children: ReactNode;
}

interface ChallengeContextData {
  activeChallenge: {
    amount: number;
    description: string;
    type: 'body' | 'eye';
  };
  challengesCompleted: number;
  currentExperience: number;
  experienceToNextLevel: number;
  level: number;
  levelUp: () => void;
  resetChallenge: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children } : ChallengeProviderProps) {
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [level, setLevel] = useState(0)

  const  experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function resetChallenge() {
    setActiveChallenge(null)

  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  return(
    <ChallengesContext.Provider value={{
      activeChallenge,
      challengesCompleted,
      currentExperience,
      experienceToNextLevel,
      level,
      levelUp,
      resetChallenge,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}
