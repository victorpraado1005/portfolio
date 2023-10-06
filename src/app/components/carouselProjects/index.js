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
    title: "Site Takefoods",
    status: "Concluido",
    description: "Site desenvolvido para a empresa Takefoods, 100% responsivo. Utilizando apenas HTML e CSS puro e JS para algumas funcionalidades e Firebase para armazenamento de informações.",
    link_github: "https://github.com/victorpraado1005/PetVerso",
    link_projeto: "https://github.com/victorpraado1005/PetVerso"
  },
  {
    id: 2,
    title: "Site - PetVerso",
    status: "Concluido",
    description: "Site desenvolvido para o projeto de TCC do curso de sistema de informação.",
    link_github: "https://github.com/victorpraado1005/PetVerso",
    link_projeto: "https://github.com/victorpraado1005/PetVerso"
  },
  {
    id: 3,
    title: "SchoolJS",
    status: "Concluido",
    description: "Projeto desenvolvido para aprimorar minhas habilidades com JS. Sistema de controle de alunos e notas para professores, com opção de criar, editar e excluir notas e alunos.",
    link_github: "https://github.com/victorpraado1005/PetVerso",
    link_projeto: "https://github.com/victorpraado1005/PetVerso"
  },
  {
    id: 4,
    title: "API Center",
    status: "Concluido",
    description: "Projeto criado para consulta de API´s públicas. API de câmbio diário, tempo e consulta de CEP.",
    link_github: "https://github.com/victorpraado1005/PetVerso",
    link_projeto: "https://github.com/victorpraado1005/PetVerso"
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
          link_repositorio={item.link_projeto}
          link_projeto={item.link_github}
        />
      ))}
      </Carousel>
    </>
  )
}