import React from 'react'
import Head from 'next/head'

import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Contdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

import Styles from '../styles/landinpage'

export default function Home() {
  return (
    <Styles>
      <Head>
        <title>Início | Move it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className="left-container">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </Styles>
  )
}
