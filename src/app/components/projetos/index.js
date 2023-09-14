import '../projetos/style.scss';

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