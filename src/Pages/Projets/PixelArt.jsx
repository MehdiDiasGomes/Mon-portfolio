import React from 'react'
import ProjetsTemplate from '../../Components/ProjetsContenu/index'
import Fade from 'react-reveal/Fade'

const PixelArt = ({ data }) => {
  return (
    <Fade>
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
        lienOuvrir={data.lienOuvrir}
        lienCode={data.lienCode}
      />
    </Fade>
  )
}

export default PixelArt
