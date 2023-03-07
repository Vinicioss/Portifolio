import { ReactNode } from 'react';
import { Container, TextContainer, InfosContainer, CodeItem } from './HomeHero.styles';
import picture from '../../assets/vinny.png'


export function HomeHero() {
  return (
    <Container data-aos="fade-up">
        <img src={picture} alt="Foto" />
        <div>
            <TextContainer className='wrapper'>
              <div >
              <h1>Olá,</h1>
              <h2 className='typing'>Seja bem vindo!</h2>
              </div>
            </TextContainer>
          <InfosContainer>
            <CodeItem data-aos="zoom-in">
              <section className='card'>
                  <span className="comment">/* Minha apresentação */</span>
                  <span className="purple">Infos</span> {'\u007B'}
                  <div>
                    Nome: <span className="blue">Vinicios,</span>
                  </div>
                  <div>
                    Sobrenome: <span className="blue">Santana</span>
                  </div>
                  {'\u007D'}
              </section>
            </CodeItem>
          
            <CodeItem data-aos="zoom-in">
              <section className='card'>
                <span className="purple">Competências</span> {'\u007B'}
                <div>
                  Função: <span className="blue">Dev Front-end,</span>
                </div>
                <div>
                  Empresa: <span className="blue">Buscando oporunidade</span>
                </div>
                {'\u007D'}
              </section>
            </CodeItem>
          </InfosContainer>
        </div>
    </Container>
  );
}


export default HomeHero;