//Image
import PixelArt from "../Assets/img/Projets/pixelArt.png"
import ToDoList from "../Assets/img/Projets/toDoList.png"
import Devinette from "../Assets/img/Projets/devinette.png"
import Briquerie from "../Assets/img/Educ/laBriquerie.png"
import JM from "../Assets/img/Educ/jeanMoulin.png"
import PixelArtPic from '../Assets/img/Projets/Rectangle1.png'

//Logo
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

export const xpConst = [
    {
        icon: "ri-javascript-fill"
    },
    {
        icon: "ri-reactjs-fill"
    },
    {
        icon: "ri-css3-fill"
    },
    {
        icon: "ri-html5-fill"
    }
]

export const projetsConst = [
    //PixelArt
    {
        img: PixelArt,
        titre: 'Jeu de pixel art',
        lien: '/pixelart'
    },
    //ToDoList
    {
        img: ToDoList,
        titre: 'ToDoList en ligne',
        lien: '/todolist'
    },
    //Devinette
    {
        img: Devinette,
        titre: 'Jeu de devinette',
        lien: '/devinette'
    },
]

export const EducationConst = [
    {
        img: Briquerie,
        titre: 'LPO La Briquerie',
        date: '2021-2023',
        parag: "Obtention de mon BTS Systèmes Numériques Informatiques & Réseaux"
    },
    {
        img: Briquerie,
        titre: 'LPO La Briquerie',
        date: '2018-2021',
        parag: "Obtention de mon BAC Systèmes Numériques"
    },
    {
        img: JM,
        titre: 'Collège Jean Moulin',
        date: '2014-2018',
        parag: "Obtention de mon brevet des collèges"
    },
]

export const LienConst = [
    {
        icon: 'ri-linkedin-fill',
        lien: 'https://www.linkedin.com/in/mehdi-dias-gomes-056654239/'
    },
    {
        icon: 'ri-github-line',
        lien: 'https://github.com/MehdiDiasGomes'
    },
]

export const ProjetsContenuConst = [
    //Pixel Art
    {
        titre: 'Pixel Art',
        img: PixelArtPic,
        desc: "Ce projet implique la création d'une interface permettant à l'utilisateur de créer une grille de dimensions personnalisées (jusqu'à un maximum de 20 par 20). Ensuite, il pourra réaliser des œuvres de pixel art en utilisant une palette de couleurs proposée directement sur le site.",
        logoMaq: <FaFigma />,
        logoDev: <FaReact />,
        logoHeb: <IoLogoVercel />,
        maquettingTitre: 'Figma',
        devTitre: 'React.js',
        hebergementTitre: 'Vercel',
    },
]