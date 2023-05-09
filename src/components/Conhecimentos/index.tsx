import {AiFillHtml5, AiOutlineGithub} from 'react-icons/ai';
import {FaCss3Alt, FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiTypescript, SiJavascript} from 'react-icons/si';
import SectionTitle from "../SectionTitle";
import { Container } from "./styles";
import ConhecimentoItem from "./ConhecimentoItem";

function Conhecimentos() {
    return (
        <Container>
            <SectionTitle title="Conhecimentos" />
            <div className='slider' data-aos="fade-up">
                <section className='slider_track'>
                    <ConhecimentoItem title="HTML5" icon={<AiFillHtml5 />} />
                    <ConhecimentoItem title="CSS3" icon={<FaCss3Alt />} />
                    <ConhecimentoItem title="Git" icon={<AiOutlineGithub />} />
                    <ConhecimentoItem title="JavaScript" icon={<SiJavascript />} />
                    <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
                    <ConhecimentoItem title="React.js" icon={<FaReact />} />
                    <ConhecimentoItem title="Next.js" icon={<SiNextdotjs />} />
                    <ConhecimentoItem title="HTML5" icon={<AiFillHtml5 />} />
                    <ConhecimentoItem title="CSS3" icon={<FaCss3Alt />} />
                    <ConhecimentoItem title="Git" icon={<AiOutlineGithub />} />
                    <ConhecimentoItem title="JavaScript" icon={<SiJavascript />} />
                    <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
                    <ConhecimentoItem title="React.js" icon={<FaReact />} />
                    <ConhecimentoItem title="Next.js" icon={<SiNextdotjs />} />
                    <ConhecimentoItem title="HTML5" icon={<AiFillHtml5 />} />
                </section>
            </div>
        </Container>
    );
};

export default Conhecimentos;