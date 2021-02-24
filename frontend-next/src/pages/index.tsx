import React from 'react'
import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

import Styles from '../styles/landinpage'

export default function Home() {
  return (
    <Styles>
        <ExperienceBar />

        <section>
          <div className="left-container">
            <Profile />
            <CompletedChallenges />
          </div>
          <div>
          </div>
        </section>
    </Styles>
  )
}
