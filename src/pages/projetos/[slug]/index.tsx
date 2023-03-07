import { GetStaticPaths, GetStaticProps } from 'next'
import { BannerProjeto } from '../../../components/BannerProjeto'
import Header from '../../../components/Header'
import { getPrismicClient } from '../../../Services/prismic'
import { ProjetoContainer } from '../../../styles/ProjetoContainer'
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router'
import LoadingScreen from '../../../components/LoadingScreen'
import Head from 'next/head'

interface IProjeto {
    slug: string,
    title: string,
    type: string,
    description: string,
    link: string,
    thumbnail: string,
  }

interface ProjetoProps {
    projeto: IProjeto;
  }

export default function Projeto({ projeto }: ProjetoProps) {

    const router = useRouter();
    console.log(projeto);
    if(router.isFallback) {
        return <LoadingScreen/>
    }

    return (
        <ProjetoContainer>
          <Head>
            <title>{projeto.title} | Meu portfólio</title>
            <meta
              name="description"
              content={projeto.description}
            />
            <meta property="og:image" content={projeto.thumbnail} />
            <meta property="og:image:secure_url" content={projeto.thumbnail} />
            <meta name="twitter:image" content={projeto.thumbnail} />
            <meta name="twitter:image:src" content={projeto.thumbnail} />
            <meta
              property="og:description"
              content={projeto.description}
            />
          </Head>
          <Header/>
            <BannerProjeto 
            title={projeto.title}
            type={projeto.type}
            imgUrl={projeto.thumbnail}
          />
          
            <main>
                <p> {projeto.description} </p>

                <button type='button'>
                    <a href={projeto.link}>Ver projeto online</a>
                </button>
            </main>
        </ProjetoContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const projetos = await prismic.query(
        [Prismic.Predicates.at('document.type', 'projeto')]
      );

        const paths = projetos.results.map(projeto => ({
            params: {
                slug: projeto.uid
            }
        }));

      return {
        paths,
        fallback: true
      }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient();
    const { slug } = context.params;
  
    const response = await prismic.getByUID('projeto', String(slug), {});
  
    
    const projeto = {
      slug: response.uid,
      title: response.data.title,
      type: response.data.type,
      description: response.data.description,
      link: response.data.link.url,
      thumbnail: response.data.thubnail.url,
    }
  
    return {
      props: {
        projeto
      },
      revalidate: 86400
    };
  }