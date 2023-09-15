import '../footer/style.scss';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="entre-em-contato">
        <span className='line'></span>
        <h3>Entre em contato comigo:</h3>
        <div className="btn-container-footer">
          <Link href="https://www.linkedin.com/in/victorprado1005/" target='_blank'>
            <button>
              <Image
                src="./linkedin.svg"
                alt='Icon LinkedIn'
                width={24}
                height={24}
              />
              LinkedIn
            </button>
          </Link>
          <Link href="mailto:prado.victor1005@gmail.com" target='_blank'>
            <button>
              <Image
                src="./gmail.svg"
                alt='Icon LinkedIn'
                width={24}
                height={24}
              />
              Gmail
            </button>
          </Link>
        </div>
        <span className='line'></span>
      </div>
    </footer>
  )
}