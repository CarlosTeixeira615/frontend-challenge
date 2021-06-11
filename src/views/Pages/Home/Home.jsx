import React from 'react'

import { Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

const Home = () => {
  const client = new SomosClient()
  console.log(client)
  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <div className={styles.wrapper}>
        <h1>
          Bem vindo ao Teste para continuar, va ate o menu e va a pagina de
          buscar, e procure seu cantor predileto
        </h1>
      </div>
    </Layout>
  )
}

export default Home
