import '../quemSouEu/style.scss';

import { Title } from '../title/title';

export function QuemSouEu() {
  return (
    <div className="quem-sou-eu">
      <Title title="Quem sou eu?" />
      <div className="container-quem-sou-eu">
        <p>Prazer, eu sou o Victor Prado!</p>
        <p>Atualmente com 22 anos, me dedico aos estudos de tecnologia desde os meus 16 anos. Um amante da tecnologia e dos vídeo-games, decidi então levar essa paixão como minha profissão.</p>
        <p>Buscando sempre evoluir com novos conhecimentos e sempre atento as novidades no mundo da programação para aprimorar minhas habilidades!</p>
        <p>Fique a vontade para me conhecer melhor!</p>
      </div>
    </div>
  )
}