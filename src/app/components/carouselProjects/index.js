import items from "../../public/items.js";
import Image from "next/image";
import Carousel from "react-elastic-carousel";
import styles from '../projetos/style.scss';
import CardProjetos from "../cardProjetos/index.js";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

const itens = [
  {
    id: 1,
    title: "PetVerso",
    status: "Concluido",
    description: "Sistema criado em React para controle de todas as informações do seu animal. Projeto de TCC - FIAP 2022",
    link_github : "https://github.com/victorpraado1005/fe-petverso",
      link_projeto : "https://petverso.vercel.app/",
    tecnologias: [
      "javascript",
      "react",
      "nodejs",
      "postgres",
    ]
  },
  {
    id: 2,
    title: "PetVerso - API",
    status: "Concluido",
    description: "API criada em NodeJs com Express para as validações das informações do projeto PetVerso.",
    link_github : "https://github.com/victorpraado1005/PetVerso",
    link_projeto : "https://petverso.vercel.app/",
    tecnologias: [
      "javascript",
      "nodejs",
      "express",
      "postgres",
    ]
  },
  {
    id: 3,
    title: "Site - PetVerso",
    status: "Concluido",
    description: "Site desenvolvido para o projeto de TCC do curso de sistema de informação.",
    link_github: "https://github.com/victorpraado1005/site-PetVerso",
    link_projeto: "https://site-petverso.vercel.app/",
    tecnologias: [
      "html",
      "css",
      "javascript"
    ]
  },
  {
    id: 5,
    title: "SchoolJS",
    status: "Concluido",
    description: "Projeto desenvolvido para aprimorar minhas habilidades com JS. Sistema de controle de alunos e notas para professores, com opção de criar, editar e excluir notas e alunos.",
    link_github: "https://github.com/victorpraado1005/SchoolJS",
    link_projeto: "https://victorpraado1005.github.io/SchoolJS/",
    tecnologias: [
      "html",
      "css",
      "javascript",
      "firebase",
      "jquery"
    ]
  },
  {
    id: 6,
    title: "API Center",
    status: "Concluido",
    description: "Projeto criado para consulta de API´s públicas. API de câmbio diário, tempo e consulta de CEP.",
    link_github: "https://github.com/victorpraado1005/ApiCenter",
    link_projeto: "https://victorpraado1005.github.io/ApiCenter/",
    tecnologias: [
      "html",
      "css",
      "javascript",
      "jquery"
    ]
  },
];

export default function CarouselProjects() {
  return (
    <>
    <Carousel breakPoints={breakPoints}>
      {itens.map((item) => (
        <CardProjetos
          key={item.id}
          title={item.title}
          status={item.status}
          description={item.description}
          link_repositorio={item.link_github}
          link_projeto={item.link_projeto}
          tecnologias={item.tecnologias}
        />
      ))}
      </Carousel>
    </>
  )
}
