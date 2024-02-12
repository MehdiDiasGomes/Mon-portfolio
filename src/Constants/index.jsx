//Image
import PixelArt from "../Assets/img/Projets/pixelArt.png"
import ToDoList from "../Assets/img/Projets/toDoList.png"
import Devinette from "../Assets/img/Projets/devinette.png"

import Briquerie from "../Assets/img/Educ/laBriquerie.png"
import JM from "../Assets/img/Educ/jeanMoulin.png"

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
        lien : '/todolist'
    },
    //Devinette
    {
        img: Devinette,
        titre: 'Jeu de devinette',
        lien : '/devinette'
    },
]

export const EducationConst = [
    {
        img: Briquerie,
        titre: 'BAC+2 à LPO La Briquerie (SNIR)',
        date: '2021-2023',
        parag: "Au cours de mon parcours au LPO La Briquerie à Thionville, j'ai poursuivi mes études jusqu'à obtenir mon BTS en Systèmes Numériques, Informatique et Réseaux. Cette formation m'a permis d'approfondir mes connaissances, notamment dans le développement logiciel. Grâce à des enseignements de qualité et à des projets concrets, j'ai acquis des compétences techniques solides qui m'ont préparé à relever les défis du monde professionnel de l'informatique. Cette expérience a été fondamentale pour affiner ma passion et consolider mes ambitions dans ce domaine en constante évolution."
    },
    {
        img: Briquerie,
        titre: 'BAC Professionnel à LPO La Briquerie (SN)',
        date: '2018-2021',
        parag: "Pendant mes années au LPO La Briquerie à Thionville, j'ai préparé et réussi mon bac professionnel en Systèmes Numériques. Grâce à des cours enrichissants et des travaux pratiques stimulants, j'ai acquis les compétences nécessaires pour évoluer dans le domaine numérique. Cette expérience a consolidé ma passion pour les technologies modernes et renforcé ma détermination à réussir dans ce domaine."
    },
    {
        img: JM,
        titre: 'Brevet des collèges au Collège Jean Moulin',
        date: '2014-2018',
        parag: "Pendant mes années au collège, de 2014 à 2018, j'ai obtenu mon brevet des collèges. Ces années de scolarité ont été une période d'apprentissage essentielle, où j'ai acquis les bases nécessaires pour la suite de mon parcours éducatif."
    },
]