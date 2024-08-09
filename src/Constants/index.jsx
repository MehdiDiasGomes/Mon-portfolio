//Image
import JM from '../Assets/img/Educ/jeanMoulin.png'
import Briquerie from '../Assets/img/Educ/laBriquerie.png'
import PixelArtBanner from '../Assets/img/Projets/PixelArtBanner.webp'
import ToDoListBanner from '../Assets/img/Projets/toDoListBanner.webp'
import pokedexBanner from '../Assets/img/Projets/PokedexBanner.webp'
import PixelArtImg from '../Assets/img/Projets/pixelArtCarte.png'
import ToDoListImg from '../Assets/img/Projets/toDoListCarte.png'
import PokedexImg from '../Assets/img/Projets/PokedexCarte.png'

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
  //Pokedex
  {
    img: PokedexImg,
    titre: 'Pokedex',
    lien: '/pokedex',
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
    lien: 'https://www.linkedin.com/in/mehdi-dias-gomes-94541a31a/',
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
    desc: "Ce projet se concentre sur le développement d'une plateforme intuitive permettant à l'utilisateur de composer des listes de tâches personnalisées selon ses besoins. Avec une interface fluide et adaptable, l'utilisateur pourra créer, organiser et suivre ses différentes tâches avec facilité.",
    logoMaq: <FaFigma />,
    logoDev: <FaReact />,
    logoHeb: <IoLogoVercel />,
    lienOuvrir: 'https://to-do-list-snowy-three.vercel.app/',
    lienCode: 'https://github.com/MehdiDiasGomes/ToDoList2',
    maquettingTitre: 'Figma',
    devTitre: 'React.js',
    hebergementTitre: 'Vercel',
  },

  //Devinette
  devinette: {
    titre: 'Pokédex',
    img: pokedexBanner,
    desc: 'Ce projet se présente comme une base de données de type Pokédex, rassemblant une vaste sélection de Pokémon ainsi que leurs statistiques.',
    logoMaq: <FaFigma />,
    logoDev: <FaReact />,
    logoHeb: <IoLogoVercel />,
    lienOuvrir: 'https://pokedex-gules-chi.vercel.app/',
    lienCode: 'https://github.com/MehdiDiasGomes/Pokedex',
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
    slug: '/pokedex',
    page: <Devinette data={ProjetPages.devinette} />,
  },
]
