import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  hasFinished: boolean;
  isActive: boolean;
  minutes: number;
  seconds: number;
  resetCountdown: () => void;
  startCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children } : CountdownProviderProps) {
  const {  startNewChallenge } = useContext(ChallengesContext)
  
  const totalTime = .1*60
  let contdownTimeout: NodeJS.Timeout;
  
  const [time, setTime] = useState(totalTime)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time/60)
  const seconds = time % 60

  const [isActive, setIsActive] = useState(false)
  function startCountdown() {
    setIsActive(true)
  }
  function resetCountdown() {
    clearTimeout(contdownTimeout)
    setHasFinished(false)
    setIsActive(false)
    setTime(totalTime)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      contdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])
  
  return (
    <CountdownContext.Provider
      value={{
        hasFinished,
        isActive,
        minutes,
        seconds,
        resetCountdown,
        startCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

