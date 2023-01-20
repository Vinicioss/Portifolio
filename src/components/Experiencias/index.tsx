import SectionTitle from '../SectionTitle';
import ExpItem from './ExpItem';
import {Container} from './styles';


function Experiencias () {
    return (
        <Container>
            <SectionTitle title= "04 Anos" description="de estudos"/>

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
                <ExpItem 
                year='Work'
                title='In progress...'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed purus vulputate, sagittis metus venenatis.'
                />
                <ExpItem 
                year='Work'
                title='In progress...'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed purus vulputate, sagittis metus venenatis.'
                />
            </section>
        </Container>
    );
}

export default Experiencias;