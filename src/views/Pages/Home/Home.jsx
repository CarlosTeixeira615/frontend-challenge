import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

const Home = () => {
  const client = new SomosClient()
  console.log(client)
  return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
        </div>
      </>
  )
}

export default Home
