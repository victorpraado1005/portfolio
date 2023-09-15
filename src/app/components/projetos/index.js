import '../projetos/style.scss';

import Image from 'next/image';

import { Title } from "../title/title";

export function Projetos() {
  return (
    <div className="container-projetos">
      <Title title="Projetos Pessoais" />
      <div className="container-box-projetos">

      <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>PetVerso</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Site desenvolvido para a empresa Takefoods, 100% responsivo.
                Utilizando apenas HTML e CSS puro e JS para algumas funcionalidades e Firebase para armazenamento de informações.</span>
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
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>
        
        <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>Site Takefoods</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Site desenvolvido para a empresa Takefoods, 100% responsivo.
                Utilizando apenas HTML e CSS puro e JS para algumas funcionalidades e Firebase para armazenamento de informações.</span>
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
                  src="./javascript.svg"
                  alt="JavaScript"
                  width={35}
                  height={35}
                />
                <Image
                  src="./firebase.svg"
                  alt="Firebase"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="btn-container-projetos">
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>

        <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>Site - PetVerso</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Site desenvolvido para o projeto de TCC do curso de sistema de informação.
              </span>
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
                  src="./javascript.svg"
                  alt="JavaScript"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="btn-container-projetos">
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>

        <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>SchoolJS</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Projeto desenvolvido para aprimorar minhas habilidades com JS.
                Sistema de controle de alunos e notas para professores, com opção de criar, editar e excluir notas e alunos.</span>
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
                  src="./javascript.svg"
                  alt="JavaScript"
                  width={35}
                  height={35}
                />
                <Image
                  src="./firebase.svg"
                  alt="Firebase"
                  width={35}
                  height={35}
                />
                <Image
                  src="./jquery.svg"
                  alt="JQuery"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="btn-container-projetos">
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>

        <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>API Center</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Projeto criado para consulta de API´s públicas.
                API de câmbio diário, tempo e consulta de CEP.</span>
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
                  src="./javascript.svg"
                  alt="JavaScript"
                  width={35}
                  height={35}
                />
                <Image
                  src="./firebase.svg"
                  alt="Firebase"
                  width={35}
                  height={35}
                />
                <Image
                  src="./jquery.svg"
                  alt="JQuery"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="btn-container-projetos">
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>

        <div className="box-projetos">
          <div className="info-box-projetos">
            <div className="title-box-projetos">
              <h4>MyContacts</h4>
              <span className='status-projeto'>Concluido</span>
            </div>
            <div className="descricao-box-projetos">
              <span>Criação de uma API em NodeJS e interface utilizando React.
                Projeto com CRUD para armazenamento de contatos.</span>
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
                  alt="ReactJS"
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
              <button>Acessar Repositório</button>
              <button>Acessar Projeto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}