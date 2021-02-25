import { createContext, ReactNode, useEffect, useState } from 'react'

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
  completedChalenge: () => void;
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

  useEffect( () => {
    Notification.requestPermission()
  }, [])

  function completedChalenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  function resetChallenge() {
    setActiveChallenge(null)

  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valedo ${challenge.amount} XP`
      })
    }
  }

  return(
    <ChallengesContext.Provider 
      value={{
        activeChallenge,
        challengesCompleted,
        completedChalenge,
        currentExperience,
        experienceToNextLevel,
        level,
        levelUp,
        resetChallenge,
        startNewChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
