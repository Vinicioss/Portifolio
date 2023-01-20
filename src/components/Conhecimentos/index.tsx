import SectionTitle from "../SectionTitle";
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt,FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import { Container } from "./styles";
import ConhecimentoItem from "./ConhecimentoItem";

function Conhecimentos() {
    return (
        <Container>
            <SectionTitle title="Conhecimentos" />
            <section>
                <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
                <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
                <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
                <ConhecimentoItem title="React" icon={<FaReact />} />
            </section>
        </Container>
    );
};

export default Conhecimentos;