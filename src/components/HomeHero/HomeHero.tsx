import { ReactNode } from 'react';
import { Container, TextContainer, InfosContainer, CodeItem } from './HomeHero.styles';
import picture from '../../assets/vinni.png'


export function HomeHero() {
  return (
    <Container data-aos="fade-up">
        <img src={'https://images.prismic.io/portifoliovinni/e2636fb1-47f3-48d5-806e-9f5fbcf10c35_Vinnin.png?auto=compress,format'} alt="Foto" />
        <div>
            <TextContainer className='wrapper'>
              <div >
              <h1>Olá,</h1>
              <h2 className='typing'>Seja bem vindo!</h2>
              </div>
            </TextContainer>
          <InfosContainer>
            <CodeItem>
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
          
            <CodeItem>
              <section className='card'>
                <br/>
                <span className="purple">Competências</span> {'\u007B'}
                <div>
                  Principal: <span className="blue">Dev Front-end,</span>
                </div>
                <div>
                  {/* Secundária: <span className="blue">Web Design</span> */}
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