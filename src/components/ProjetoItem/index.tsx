import { ReactNode } from 'react';
import { Container } from './styles';
import Link from 'next/link';

interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjetoItem({ title, type, imgUrl, slug }: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="zoom-in">
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className='overlay'/>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
