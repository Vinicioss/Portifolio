import Header from "../components/Header";
import { HomeContainer } from "../styles/HomeStyles";
import { HomeHero } from "../components/HomeHero/HomeHero";
import Experiencias from "../components/Experiencias";
import Projetos from "../components/Projetos";
import Conhecimentos from "../components/Conhecimentos";
import FormContato from "../components/FormContato";
import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../Services/prismic";
import Prismic from '@prismicio/client';
import { useEffect, useContext } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import 'remixicon/fonts/remixicon.css';


interface IProjeto {
  slug: string,
  title: string,
  type: string,
  description: string,
  link: string,
  thumbnail: string,
}

interface HomeProps {
  projetos: IProjeto[];
}


export default function Home({ projetos }: HomeProps) {

  useEffect(() => {
    Aos.init({duration: 500});
  }, []);

  
  return (
    <div>
      <HomeContainer>

      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
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
          <HomeHero/>
          <Conhecimentos/>
          <Experiencias/>
          <Projetos projetos={projetos}/>
          <FormContato/>
        </main>

        <Footer />
      </HomeContainer>
    </div>
  );
}


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