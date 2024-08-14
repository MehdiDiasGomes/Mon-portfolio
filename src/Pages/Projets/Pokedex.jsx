import React from 'react'
import ProjetTemplate from '../../Components/ProjetsContenu/index'
import Fade from 'react-reveal/Fade'

const Pokedex = ({ data }) => {
  return (
    <Fade>
      <ProjetTemplate
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
        lienOuvrir={data.lienOuvrir}
        lienCode={data.lienCode}
      />
    </Fade>
  )
}

export default Pokedex
