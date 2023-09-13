import Image from 'next/image';

import '../skills/style.scss';

import { Title } from "../title/title";

export function Skills() {
  return (
    <div className="container-skills">
      <Title title="Skills" />
      <div className="container-boxs">
        <div className="box-skills">
          <h4>Front-End</h4>
          <div className="text-box">
            <span>
              <Image
                src="./react.svg"
                alt="Icon React"
                width={18}
                height={18}
              />
              React
            </span>
            <span>
              <Image
                src="./html.svg"
                alt="Icon HTML"
                width={18}
                height={18}
              />
              HTML
            </span>
            <span>
              <Image
                src="./css.svg"
                alt="Icon CSS"
                width={18}
                height={18}
              />
              CSS
            </span>
            <span>
              <Image
                src="./javascript.svg"
                alt="Icon JS"
                width={20}
                height={18}
              />
              JavaScript
            </span>
            <span>
              <Image
                src="./bootstrap.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              BootStrap
            </span>
          </div>
        </div>
        <div className="box-skills">
          <h4>Back-End</h4>
          <div className="text-box">
            <span>
              <Image
                src="./nodejs.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              NodeJs
            </span>
            <span>
              <Image
                src="./java.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              Java
            </span>
            <span>
              <Image
                src="./sql.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              SQL
            </span>
          </div>
        </div>
      </div>
      <div className="container-others-skills-box">
        <div className="other-skills-box">
          <h4>Outros</h4>
          <div className="textbox-others">
            <span>
              <Image
                src="./github_white.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              Git
            </span>
            <span>
              <Image
                src="./typescript.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              TypeScript
            </span>
            <span>
              <Image
                src="./prisma.svg"
                alt="Icon Bootstrap"
                width={22}
                height={19}
              />
              Prisma
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}