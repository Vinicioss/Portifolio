import Link from 'next/link'
import { ProjetoContainer } from './styles';

interface ProjetoProps {
    title: string;
    type: string;
    slug: string;
    img: string;
}

export default function ProjetoItem ({title, type, slug, img}: ProjetoProps) {
    return (
        <ProjetoContainer imgUrl={img} data-aos="fade-up">
            <section>
                <div className="overlay"/>
                <div className="text">
                    <h1># {title}</h1>
                    <h2>- {type}</h2>
                </div>
            </section>
            <button type="button">
                <Link href={`/projetos/${slug}`}>
                    <div>
                        Ver mais <i className="ri-arrow-right-line"></i>
                    </div>
                </Link>
            </button>
        </ProjetoContainer>
    )
}