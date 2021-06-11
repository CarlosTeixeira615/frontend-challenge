import React, { useEffect, useState } from 'react'
import styles from './Buscas.module.css'

import { Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'
import api from 'service/api'
import { Link } from 'react-router-dom'
import Imagem from 'components/Imagem'

const Buscar = () => {
  const [cantor, setCantor] = useState('')
  const [listaCantor, setListaCantor] = useState([])
  useEffect(() => {
    if (cantor.length >= 4) {
      Getitem()
    }
  }, [cantor])
  async function Getitem() {
    const response = await api.get('search', {
      params: {
        q: cantor,
        type: 'artist',
      },
    })
    setListaCantor(response.data.artists.items)
  }
  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Artista' }]}
        heading="Somos Front-end Challange"
      />
      <label>
        Nome:
        <input
          type="text"
          value={cantor}
          onChange={e => setCantor(e.target.value)}
          name="name"
        />
      </label>
      <div className={styles.wrapper}>
        {listaCantor.map(cantor => (
          <Link
            to={{
              pathname: `/artista/${cantor.id}`,
            }}
          >
            <div style={{ display: 'flex' }}>
              <h1>{cantor.name}</h1>
              <Imagem id={cantor.id} />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Buscar
