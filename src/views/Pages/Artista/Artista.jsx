import React, { useEffect, useState } from 'react'

import { SubHeader } from 'components'
import styles from './Artista.module.css'
import api from 'service/api'

const Artista = (props) => {
   const [detalheArtista, setDetalheArtista]=useState([{name: ''}])
useEffect(() => {
  Getitem()
}, [])

  async function Getitem (){
    const response = await api.get(`/artists/${props.match.params.id}`)
    setDetalheArtista([response.data])
  } 
  
  return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
         {detalheArtista.map((artista)=>
         <>
          <h1>{artista.name}</h1>
          <h1>{artista.genres}</h1>
         </>
         )}
        </div>
      </>
  )
}

export default Artista
