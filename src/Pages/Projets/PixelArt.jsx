import React from 'react'
import { ProjetsContenuConst } from '../../Constants'
import ProjetsContenuComp from '../../Components/ProjetsContenu/index'

const PixelArt = () => {
    return (
        <div>
            {ProjetsContenuConst.map((e, index) => (
                <ProjetsContenuComp
                    key={index}
                    titre={e.titre}
                    img={e.img}
                    desc={e.desc}
                    maquettingTitre={e.maquettingTitre}
                    devTitre={e.devTitre}
                    hebergementTitre={e.hebergementTitre}
                    logoMaq={e.logoMaq} l
                    ogoDev={e.logoDev}
                    logoHeb={e.logoHeb} />
            ))}
        </div>
    )
}

export default PixelArt;
