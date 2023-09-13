import '../formacaoAcademica/style.scss';

import { Title } from "../title/title";
import Link from 'next/link';

export function FormacaoAcademica() {
  return (
    <div>
      <div className="title-formacao">
        <Title title="Formação Acadêmica" />
      </div>
      <div className="container-formacao">
        <div className="container-1">
          <div className="box-formacao">
            <div className="info-box-formacao">
              <h3>Sistema de informação - FIAP</h3>
              <span>
                Graduação em sistema de informação na faculdade FIAP.
                Tecnologias estudadas:
                HTML, CSS, JS, SQL, Java (POO), Redes, Flutter, Swift (IOS) e conceitos de Gestão de Projetos.
              </span>
              <Link href="https://www.fiap.com.br/graduacao/bacharelado/sistemas-de-informacao/" target='_blank'>
                <button>
                  saiba mais
                </button>
              </Link>
            </div>
          </div>
          <div className="box-formacao">
            <div className="info-box-formacao">
              <h3>Ensino médio técnico - FIAP School</h3>
              <span>
                Curso técnico onde tive meu primeiro contato com a programação.
                Algumas das tecnologias estudadas: HTML, CSS, JS, SQL e Java.
              </span>
              <Link href="https://www.fiap.com.br/colegio/curso/medio-tecnico/" target='_blank'>
                <button>
                  saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="container-3">
          <div className="box-formacao">
            <div className="info-box-formacao">
              <h3>JStack - Curso Dev Web</h3>
              <span>
                Curso Online com foco em NodeJS, React, SQL, TypeScript, Docker, PostgreSQL e Arquitetura de Software.
              </span>
              <Link href="https://jstack.com.br/" target='_blank'>
                <button>
                  saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}