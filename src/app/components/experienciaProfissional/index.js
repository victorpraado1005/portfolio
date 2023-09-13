import '../experienciaProfissional/style.scss';

import { Title } from "../title/title"

export function ExperienciaProfissional() {
  return (
    <div>
      <div className="container-experiencia">
      <Title title="Experiência Profissional" />
        <div className="box">
          <div className="info-box-experiencia">
            <h3>ADIN - Dev Front-End Jr</h3>
            <span>Fevereiro de 2021 - Dezembro de 2022</span>
            <span>Atuando com HTML, CSS e JS na construção de Layout para E-mail Marketing. Participando de projeto com integração ao WhatsApp via API para disparos de campanhas de marketing.</span>
          </div>
        </div>
        <div className="box">
        <div className="info-box-experiencia">
            <h3>OMIE - Suporte Técnico</h3>
            <span>Setembro de 2019 - Janeiro de 2020 / Setembro de 2020 -Janeiro de 2021</span>
            <span>Responsável por atender chamados via chat ou telefone. Manipulação de dados em banco SQL e utilização e manutenção da API do sistema com os clientes.</span>
          </div>
        </div>
        <div className="box">
        <div className="info-box-experiencia">
            <h3>Mirasoft - Estágio em Front-End</h3>
            <span>Março de 2019 - Setembro de 2019</span>
            <span>Responsável por monitorar e corrigir bug ́s do sistema feito para a câmara dos vereadores de São Caetano do Sul - SP.</span>
          </div>
        </div>
      </div>
    </div>
  )
}