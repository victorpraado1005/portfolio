import './styles/home.scss';

import { VerticalHeader } from './components/verticalHeader/verticalHeader'
import { QuemSouEu } from './components/quemSouEu';

export default function Home() {
  return (
    <main className='container'>
      <VerticalHeader />
      <div className="content-infos">
        <div className="container-infos">
          <QuemSouEu />
        </div>
      </div>
    </main>
  )
}
