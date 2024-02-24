import React from 'react'
import ProjetsTemplate from '../../Components/ProjetsContenu/index'

const PixelArt = ({ data }) => {
  return (
    <ProjetsTemplate
      key={data.titre}
      titre={data.titre}
      img={data.img}
      desc={data.desc}
      maquettingTitre={data.maquettingTitre}
      devTitre={data.devTitre}
      hebergementTitre={data.hebergementTitre}
      logoMaq={data.logoMaq}
      logoDev={data.logoDev}
      logoHeb={data.logoHeb}
    />
  )
}

export default PixelArt
