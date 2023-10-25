import Image from 'next/image';
import Link from 'next/link';

import './verticalHeader.scss';

export function VerticalHeader() {
  return (
    <div className='vertical-header'>
      <div className="info">
          <h1>Victor Prado</h1>
          <h2>desenvolvedor Front-end</h2>
        <div className='btn-contact'>
          <Link href="https://github.com/victorpraado1005" target='_blank'>
            <button>
              <Image
                src="./github.svg"
                alt="Icon GitHub"
                width={28}
                height={22}
              />
              Github
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/victorprado1005/" target='_blank'>
            <button>
              <Image
                src="./linkedin.svg"
                alt="Icon GitHub"
                width={28}
                height={22}
              />
              LinkedIn
            </button>
          </Link>
        </div>
        <div className='welcome-text'>
          <h2>Bem-Vindo ao meu Portfólio</h2>
        </div>
      </div>
    </div>
  )
}
