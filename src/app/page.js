import './styles/home.scss';

import { VerticalHeader } from './components/verticalHeader/verticalHeader'
import { QuemSouEu } from './components/quemSouEu';
import { Skills } from './components/skills';

export default function Home() {
  return (
    <main className='container'>
      <VerticalHeader />
      <div className="content-infos">
        <div className="container-infos">
          <QuemSouEu />
          <Skills />
        </div>
      </div>
    </main>
  )
}
