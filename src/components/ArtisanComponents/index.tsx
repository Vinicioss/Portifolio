import NavLink from './NavLink';
import { Container } from './styles';
import Head from "next/head";

export function Artisan() {
    
    const text = "S u b s c r ib e   t o   A r t is ia n   n e w  s le t t e r    ";
    const length = text.length;
    const deg = 360 / length;

  return (
    <Container>
        <Head>
            <title>Artisan | Meu portfólio</title>
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

        <main className='main'>

            <div className='header'>
                <ul>
                    <NavLink title='About' path='/artisan'/>
                    <NavLink title='How it works' path='/'/>
                    <NavLink title='Pricing' path='/'/>
                    <NavLink title='FAQ' path='/'/>
                </ul>
                
                <span className='title'>ARTISAN</span>

                <ul>
                    <NavLink title='Blog' path='/'/>
                    <NavLink title='Contacts' path='/'/>
                    <button className='login_button'>Log in</button>
                </ul>
            </div>

            <div className='body'>

                <div className='body_infos'>
                    <div className='upper'>
                        <span> YOUR FIRST DIGITAL ART COLECTION </span>
                    </div>

                    <div className='mid'>
                        <div className='profile_cont'>
                            <div className='profile_img_join img1'/>
                            <div className='profile_img_join img2'/>
                            <div className='profile_img_join img3'/>
                        </div>
                        <span>
                            Join our 150K+ community
                            <br/>
                            of talented artists
                        </span>
                        <button> GET STARTED <i className="ri-arrow-right-up-line"></i> </button>
                    </div>

                    <div className='lower'>
                        <div className='lower_img'/>
                        <div className='lower_content'>
                            <p> We are the comprehensive online resource for digital artists that offers tutorials, tips, and tools</p>
                            <div className='lower_buttons'>
                                <button>Facebook</button>
                                <button>Twitter</button>
                                <button>Instagram</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='body_img'>
                    <div className='sphere'>
                        <div className='text_O'>
                            <p>
                                {text.split("").map((letra, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            transform: `rotate(${deg * i}deg)`,
                                        }}
                                    >
                                        {letra}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className='sphere_center'/>
                    </div>
                </div>

            </div>
                <div className='footer'>
                    <span>
                        Design baseado no projeto "
                    </span>
                    <a href='https://dribbble.com/shots/20731719-Digital-artists-platform-landing-page-concept'>
                        Digital artists' platform landing page concept, By: Pauline D.
                    </a>
                    <span>"</span>
                </div>


        </main>
        

    </Container>
  );
}
