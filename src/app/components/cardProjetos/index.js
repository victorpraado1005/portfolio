import '../cardProjetos/style.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CardProjetos({ title, status, description, link_repositorio, link_projeto, tecnologias }) {
  return (
    <div className='box-projetos'>
      <div className="info-box-projetos">
        <div className="title-box-projetos">
          <h4>{title}</h4>
          <span className='status-projeto'>{status}</span>
        </div>
        <div className="descricao-box-projetos">
          <span>{description}</span>
        </div>
        <div className="tecnologias-box-projetos">
          <span>Tecnologias usadas no projeto:</span>
          <div className="img-tecnologias-box-projetos">
            {tecnologias.map((tecnologia) => (
              <Image
                key={Math.random()}
                src={`./${tecnologia}.svg`}
                alt={`Icone ${tecnologia}`}
                width={35}
                height={35}
              />
            ))}
          </div>
        </div>
        <div className="btn-container-projetos">
          <Link href={link_repositorio} target='_blank'>
            <button>Acessar Repositório</button>
          </Link>
          <Link href={link_projeto} target='_blank'>
            <button>Acessar Projeto</button>
          </Link>
        </div>
      </div>
    </div>
  );
}