import { ReactNode } from 'react';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { Container, TextContainer, InfosContainer, CodeItem } from './HomeHero.styles';
import picture from '../../assets/vinni.png'



export function HomeHero() {

  function handleRedirect(url: string) {
    window.open(url);
};

  return (
    <Container>
        <div className='img_container'>
          <div className='img_bg'/>
          <img src={'https://images.prismic.io/portifoliovinni/8c0917d4-a030-4d16-a7c4-bcba03288b51_Vinni2.png?auto=compress,format'} alt="Foto" />
        </div>
        <div data-aos="fade-up">
            <TextContainer className='wrapper'>
              <div >
              <h1>Olá,</h1>
              <h2 className='typing'>Seja bem vindo!</h2>
              </div>
            </TextContainer>
          <InfosContainer>
            <p>
            Sou Vinicios Santana, um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e funcionais. 
            Com habilidades em HTML, CSS, JavaScript e frameworks como React e NextJS, 
            estou aprendendo a transformar conceitos em realidade, e entregar projetos de alta qualidade. 
            Meu foco está na usabilidade, acessibilidade e colaboração eficaz. Estou sempre aberto a novas oportunidades e desafios.
            </p>
          </InfosContainer>
          <div className='wrapper_bottom'>
            <div className='button_contact'>Entre em contato <i className="ri-arrow-right-line"></i></div>
            <AiOutlineWhatsApp 
              className='icon_contact'
              onClick={() => handleRedirect("https://wa.me/5541987329157")}
            />
            <AiFillLinkedin 
              className='icon_contact'
              onClick={() => handleRedirect("https://www.linkedin.com/in/vinicioss/")}
            />
          </div>
        </div>
    </Container>
  );
}


export default HomeHero;