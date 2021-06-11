import React, { useEffect, useState } from 'react'
import api from 'service/api'

const Imagem = ({ id }) => {
  const [imagem, setImagem] = useState([])
  useEffect(() => {
    dados()
  }, [])
  const dados = async () => {
    const response = await api.get(`/artists/${id}`)
    setImagem([
      response.data.images.length >= 1 ? response.data.images[0].url : '',
    ])
  }
  return <>{imagem && <img src={imagem} alt="new" width="50" height="50" />}</>
}

export default Imagem
