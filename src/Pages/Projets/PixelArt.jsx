import React from 'react'
import { ProjetsContenuConst } from '../../Constants'
import ProjetsContenuComp from '../../Components/ProjetsContenu/index'
// import PixelArtPic from '../../Assets/img/Projets/pixelArt.png'
// import { FaReact } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { FaCss3 } from "react-icons/fa";
// import { FaFigma } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";


const PixelArt = () => {
    return (
        <div>
            {ProjetsContenuConst.map((e, index) => (
                <ProjetsContenuComp key={index} titre={e.titre} img={e.img} desc={e.desc} maquettingTitre={e.maquettingTitre} devTitre={e.devTitre} hebergementTitre={e.hebergementTitre} />
            ))}
        </div>
    )
}

export default PixelArt;
