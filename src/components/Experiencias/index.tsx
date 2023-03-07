import SectionTitle from '../SectionTitle';
import ExpItem from './ExpItem';
import {Container} from './styles';


function Experiencias () {
    return (
        <Container>
            <SectionTitle title= "Sobre" />

            <section>
                <ExpItem 
                year='Formação'
                title='Faculdade'
                description='Formado em sistemas de informação pela UEMG de Ituiutaba-MG, onde comecei a me interessar por programação Front-end.'
                />
                <ExpItem 
                year='Estudos'
                title='Autodidata'
                description='Grande parte do conhecimento que adquiri foi sem a compra de qualquer curso, apenas pesquisando por mim mesmo e assistindo videos gratuitos.'
                />
            </section>
        </Container>
    );
}

export default Experiencias;