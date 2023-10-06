import '../cardProjetos/style.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CardProjetos({title, status, description, link_repositorio, link_projeto}) {
  return(
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
                <Image
                  src="./html.svg"
                  alt="HTML"
                  width={35}
                  height={35}
                />
                <Image
                  src="./css.svg"
                  alt="CSS"
                  width={35}
                  height={35}
                />
                <Image
                  src="./react.svg"
                  alt="ReactJs"
                  width={35}
                  height={35}
                />
                <Image
                  src="./nodejs.svg"
                  alt="NodeJs"
                  width={35}
                  height={35}
                />
                <Image
                  src="./postgres.svg"
                  alt="PostGres"
                  width={30}
                  height={30}
                />
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