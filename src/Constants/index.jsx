//Image
import JM from '../Assets/img/Educ/jeanMoulin.png'
import Briquerie from '../Assets/img/Educ/laBriquerie.png'
import PixelArtBanner from '../Assets/img/Projets/PixelArtBanner.png'
import ToDoListBanner from '../Assets/img/Projets/toDoListBanner.png'
import devinetteBanner from '../Assets/img/Projets/devinetteBanner.png'
import DevinetteImg from '../Assets/img/Projets/devinetteCarte.png'
import PixelArtImg from '../Assets/img/Projets/pixelArtCarte.png'
import ToDoListImg from '../Assets/img/Projets/toDoListCarte.png'

//Logo
import { FaFigma, FaReact } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'

//Composant
import Devinette from '../Pages/Projets/Devinette'
import PixelArt from '../Pages/Projets/PixelArt'
import ToDoList from '../Pages/Projets/ToDoList'

export const xpConst = [
  {
    icon: 'ri-javascript-fill',
  },
  {
    icon: 'ri-reactjs-fill',
  },
  {
    icon: 'ri-css3-fill',
  },
  {
    icon: 'ri-html5-fill',
  },
]

export const ProjetCarte = [
  //PixelArt
  {
    img: PixelArtImg,
    titre: 'Jeu de pixel art',
    lien: '/pixelart',
  },
  //ToDoList
  {
    img: ToDoListImg,
    titre: 'ToDoList en ligne',
    lien: '/todolist',
  },
  //Devinette
  {
    img: DevinetteImg,
    titre: 'Jeu de devinette',
    lien: '/devinette',
  },
]

export const EducationConst = [
  {
    img: Briquerie,
    titre: 'LPO La Briquerie',
    date: '2021-2023',
    parag: 'Obtention de mon BTS Systèmes Numériques Informatiques & Réseaux',
  },
  {
    img: Briquerie,
    titre: 'LPO La Briquerie',
    date: '2018-2021',
    parag: 'Obtention de mon BAC Systèmes Numériques',
  },
  {
    img: JM,
    titre: 'Collège Jean Moulin',
    date: '2014-2018',
    parag: 'Obtention de mon brevet des collèges',
  },
]

export const LienConst = [
  {
    icon: 'ri-linkedin-fill',
    lien: 'https://www.linkedin.com/in/mehdi-dias-gomes-056654239/',
  },
  {
    icon: 'ri-github-line',
    lien: 'https://github.com/MehdiDiasGomes',
  },
]

export const ProjetPages = {
  //Pixel Art
  pixelart: {
    titre: 'Pixel Art',
    img: PixelArtBanner,
    desc: "Ce projet implique la création d'une interface permettant à l'utilisateur de créer une grille de dimensions personnalisées (jusqu'à un maximum de 20 par 20). Ensuite, il pourra réaliser des œuvres de pixel art en utilisant une palette de couleurs proposée directement sur le site.",
    logoMaq: <FaFigma />,
    logoDev: <FaReact />,
    logoHeb: <IoLogoVercel />,
    lienOuvrir: 'https://pixel-art-self-seven.vercel.app/',
    lienCode: 'https://github.com/MehdiDiasGomes/PixelArt',
    maquettingTitre: 'Figma',
    devTitre: 'React.js',
    hebergementTitre: 'Vercel',
  },

  //ToDoList
  todolist: {
    titre: 'To Do List',
    img: ToDoListBanner,
    desc: "Ce projet implique la création d'une interface permettant à l'utilisateur de créer une grille de dimensions personnalisées (jusqu'à un maximum de 20 par 20). Ensuite, il pourra réaliser des œuvres de pixel art en utilisant une palette de couleurs proposée directement sur le site.",
    logoMaq: <FaFigma />,
    logoDev: <FaReact />,
    logoHeb: <IoLogoVercel />,
    lienOuvrir: 'https://mehdidiasgomes.github.io/ToDoList/',
    lienCode: 'https://github.com/MehdiDiasGomes/ToDoList',
    maquettingTitre: 'Figma',
    devTitre: 'React.js',
    hebergementTitre: 'Vercel',
  },

  //Devinette
  devinette: {
    titre: 'Jeu de devinette',
    img: devinetteBanner,
    desc: 'sdfsdfsdfsdf',
    logoMaq: <FaFigma />,
    logoDev: <FaReact />,
    logoHeb: <IoLogoVercel />,
    lienOuvrir: 'https://mehdidiasgomes.github.io/Jeu-de-devinette/',
    lienCode: 'https://github.com/MehdiDiasGomes/Jeu-de-devinette',
    maquettingTitre: 'Figma',
    devTitre: 'React.js',
    hebergementTitre: 'Vercel',
  },
}

export const routes = [
  {
    slug: '/pixelart',
    page: <PixelArt data={ProjetPages.pixelart} />,
  },
  {
    slug: '/todolist',
    page: <ToDoList data={ProjetPages.todolist} />,
  },
  {
    slug: '/devinette',
    page: <Devinette data={ProjetPages.devinette} />,
  },
]
