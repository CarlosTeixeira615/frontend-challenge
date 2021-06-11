import React, { useEffect, useState } from 'react'

import { Layout, SubHeader } from 'components'
import styles from './Artista.module.css'
import api from 'service/api'
import Imagem from 'components/Imagem'
import moment from 'moment'

const Artista = props => {
  const [detalheArtista, setDetalheArtista] = useState([])
  const [infos, setDados] = useState([{ items: [{ images: [{}] }] }])
  let dados = [{ date: '' }]
  useEffect(() => {
    Getitem()
  }, [])
  const id = props.match.params.id
  async function Getitem() {
    const response = await api.get(`/artists/${id}`)
    const albuns = await api.get(`/artists/${id}/albums`, {
      params: {
        limit: 10,
      },
    })
    await setDetalheArtista([response.data])

    setDados([albuns.data])
  }

  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Artista' }]}
        heading="Somos Front-end Challange"
      />
      <div></div>
      <div className={styles.wrapper}>
        {detalheArtista.map(artista => (
          <div>
            <Imagem id={id} />
            <h1>{artista.name}</h1>
            <h1> generos {artista.genres}</h1>
            <h1>popularidade : {artista.popularity}</h1>
          </div>
        ))}

        {infos[0].items.map(teste => (
          <div>
            <h1>{teste.name}</h1>
            <h1>{moment().calendar(teste.release_date)}</h1>
            <img
              src={teste.images.length >= 1 ? teste.images[0].url : ''}
              alt={teste.name}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Artista
