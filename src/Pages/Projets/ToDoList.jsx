import React from 'react'
import ProjetTemplate from '../../Components/ProjetsContenu/index'

const ToDoList = ({ data }) => {
  return (
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
    />
  )
}

export default ToDoList
