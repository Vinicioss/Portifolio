import Link from 'next/link';
import SelectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
    slug: string,
    title: string,
    type: string,
    description: string,
    link: string,
    thumbnail: string,
  }
  
  interface ProjetosProps {
    projetos: IProjeto[];
  }

function Projetos({projetos}: ProjetosProps){

    return (
        <Container>
            <SelectionTitle title="Ultimos Projetos"/>

            <section>
                {projetos.slice(0, 3).map(projeto => (
                    <ProjetoItem
                    key={projeto.slug}
                    img={projeto.thumbnail}
                    title={projeto.title}
                    type={projeto.type}
                    slug={projeto.slug} />
                ))}
            </section>
            <button type="button">
                <Link href="/projetos">
                    <span>Ver todos os projetos</span>
                </Link>
            </button>
        </Container>
    )
}

export default Projetos;