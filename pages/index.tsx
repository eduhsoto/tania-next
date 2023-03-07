import Image from 'next/image'
import Hero from '@/components/Hero'
import { TextP } from '@/styles/styled-components/home/Objective'
import Objective from '@/components/home/Objective'
import Skill from '@/components/home/Skill'
import SeoMeta from '@/components/Seo'

const Home = (): JSX.Element => {
  return (
    <>
      <SeoMeta
        title='Tania - Sobre mí'
        description='Soy estudiante de Ingeniería en Tecnologías de la comunicación,
        área desarrollo y gestión de software.'
        keywords='Tania, portafolio, cv'
      />
      <Hero
        img='/img/profile-tania.png'
        w={474}
        h={484}
        hidden={false}
        title='Hola! Mi nombre es Tania y soy diseñadora UX'
        paragraph='Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, resido actualmente en la ciudad de Guadalajara Jalisco México.'
        reverse={false}
        reverseD={false}
      />
      <section className='about__me'>
        <div className='container'>
          <div className='about'>
            <h2 className='title__grade'>Técnico Superior Universitario</h2>
            <p className='title__specialization'>
              Especialista UX / UI orientada en el ser humano.
            </p>
            <TextP>
              Soy estudiante de Ingeniería en Tecnologías de la comunicación,
              área desarrollo y gestión de software.
            </TextP>
            <TextP>
              Tengo confianza en mi capacidad para generar ideas, trabajar en
              equipo, adquirir conocimientos y crecer profesionalmente.
            </TextP>
            <TextP>
              Mi pasión es crear y mejorar experiencias de los usuarios,
              pensando en el ser humano que utiliza las aplicaciones por medio
              de la tecnología, agilizando los procesosz con diseños funcionales
              y atractivos.
            </TextP>
          </div>
          <Image
            src='/img/ux-image.png'
            alt='ux image'
            className='ux__image about'
            width={429}
            height={429}
          />
        </div>
      </section>
      <section>
        <div className='container'>
          <Skill
            title='Habilidades blandas'
            list={[
              'Excelente comunicación oral y escrita.',
              'Trabajo en equipo y capacidad de liderazgo.',
              'Desarrollo de experiencias centradas en el ser humano.',
              'Capacidad de autoaprendizaje.',
              'Pensamiento estratégico.',
            ]}
          />
          <Skill
            title='Habilidades técnicas'
            list={[
              'HTML, CSS, Bootstrap.',
              'Adobe XD.',
              'Figma.',
              'Invision Studio.',
              'Metodologías Ágiles (Manejo de tableros Scrum y Kanban).',
              'Design Thinking.',
              'Conocimiento de leyes cognitivas, creación de flujos, investigación de casos de uso y desarrollo de diseño visual.',
            ]}
          />
        </div>
      </section>
      <section className='objectives'>
        <div className='container'>
          <Objective
            img='/img/goal.png'
            paragraph='Mi objetivo es desarrollar mi carrera profesiónal formando parte de una empresa que me permita aplicar lo que he aprendido y seguir creciendo de manera tanto profesiónal como personal.'
            listed={false}
          />
          <Objective
            img='/img/vision.png'
            paragraph='Crear diseños llamativos, intuitivos y funcionales que mejoren la experiencia de las personas que utilizan tecnología ayudando a lograr sus objetivos de manera rápida y eficaz.'
            listed={false}
          />
          <Objective
            img='/img/honesty.png'
            paragraph='Crear diseños llamativos, intuitivos y funcionales que mejoren la experiencia de las personas que utilizan tecnología ayudando a lograr sus objetivos de manera rápida y eficaz.'
            listed={true}
            elements={[
              'Pasión',
              'Respeto',
              'Honestidad',
              'Resposabilidad',
              'Puntualidad',
              'Trabajo en equipo',
            ]}
          />
        </div>
      </section>
    </>
  )
}

export default Home
