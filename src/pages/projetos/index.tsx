import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { ProjetoItem } from "../../components/ProjetoItem";
import { getPrismicClient } from "../../Services/prismic";
import { ProjetosContainer } from "../../styles/ProjetoStyles";
import Prismic from '@prismicio/client';
import Head from "next/head";

interface IProjeto {
    slug: string,
    title: string,
    type: string,
    description: string,
    link: string,
    thumbnail: string,
  }
  
  interface ProjetoProps {
    projetos: IProjeto[];
  }
  

function Projetos({ projetos }: ProjetoProps ){
    return (
        <ProjetosContainer>
          <Head>
            <title>Projetos | Meu portfólio</title>
            <meta
              name="description"
              content="Aqui você pode ver alguns dos projetos criados por mim!"
            />
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
              property="og:description"
              content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
          </Head>
            <Header/>
            <main className="container">
            {projetos.map(projeto => (
                    <ProjetoItem
                    key={projeto.slug}
                    imgUrl={projeto.thumbnail}
                    title={projeto.title}
                    type={projeto.type}
                    slug={projeto.slug} 
                    />
                ))}
            </main>
            
        </ProjetosContainer>
    );
}


export default Projetos;

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'projeto')],
      { orderings: '[document.first_publication_date desc]' }
    );
  
    
    const projetos = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thubnail.url,
    }))
  
    return {
      props: {
        projetos
      },
      revalidate: 86400
    };
  }