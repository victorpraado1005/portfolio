import './styles/home.scss';

import { VerticalHeader } from './components/verticalHeader/verticalHeader'
import { QuemSouEu } from './components/quemSouEu';
import { Skills } from './components/skills';
import { FormacaoAcademica } from './components/formacaoAcademica';
import { ExperienciaProfissional } from './components/experienciaProfissional';

export default function Home() {
  return (
    <>
      <main className='main-container'>
        <VerticalHeader />
        <div className="content-infos">
          <div className="container-infos">
            <QuemSouEu />
            <Skills />
          </div>
        </div>
      </main>
      <div className="secondary-container">
        <FormacaoAcademica />
        <ExperienciaProfissional />
      </div>
    </>
  )
}
