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
                title=''
                description='Formado em sistemas de informação pela UEMG de Ituiutaba-MG, onde comecei a me interessar por programação Front-end.'
                />
                <ExpItem 
                year='Interesses'
                title=''
                description='Gosto de criar interfaces funcionais e bonitas e busco estar sempre atualizado com as novas tecnologias.'
                />
                <ExpItem 
                year='Estudos'
                title=''
                description='Grande parte do conhecimento que adquiri foi sem a compra de qualquer curso, apenas pesquisando por mim mesmo e assistindo videos gratuitos.'
                />
                <ExpItem 
                year='Objetivos'
                title=''
                description='Estou em busca de novos desafios e projetos para contribuir de forma significativa para o mundo da tecnologia.'
                />
            </section>
        </Container>
    );
}

export default Experiencias;