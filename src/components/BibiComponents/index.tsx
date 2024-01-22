import Head from "next/head";
import { useState, useRef } from "react";
import NavLink from './NavLink';
import { Container } from './styles';
import AnimatedGif from "./AnimatedGif";

export function Bibi() {
    
    const text = "S u b s c r ib e   t o   A r t is a n   n e w  s le t t e r    ";
    const length = text.length;
    const deg = 360 / length;
    const gif = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDM3ZjVmcTE2MWpjNWxxNGNrMmVudnExa2RzZTRxcnh4eXVyMWFoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13Cmju3maIjStW/giphy.gif", "https://media.tenor.com/S7OpWuvLxdMAAAAi/banana-cat-crying-banana-cat.gif", "https://media.tenor.com/8tgG_KyJqqwAAAAi/happy-happy-happy-happy.gif"]

    const [gifNow, setGifNow] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [botoesVisiveis, setBotoesVisiveis] = useState(true);


    const playAudio = (audioUrl: string) => {
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        audio.play();
      };
    const stopAudio = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };

      const handleButtonClick = () => {
        setBotoesVisiveis(false);
      };
    

    const handleTristin = () => {
        setGifNow(1);
        playAudio('https://www.myinstants.com/media/sounds/gato-sad.mp3');
    };

    const handleFelizin = () => {
        setGifNow(2);
        playAudio('https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3');
    };

    const handleMouseLeave = () => {
        setGifNow(0);
        stopAudio();
    };

  return (
    <Container>
        <Head>
            <title>Bibi ❤️</title>
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

        <div className='body'>

            <div className='body_infos'>
                <div className='upper'>
                    <span> Aceitas sair comigo? </span>
                    <div className='emoji'>
                        <span className='emoji1'> 😳 </span>
                        <span> 👉👈 </span>
                    </div>
                </div>
            <div className='mid'>
                {botoesVisiveis && (
                    <>
                    <button type="button" onMouseEnter={handleFelizin} onMouseLeave={handleMouseLeave} onClick={handleButtonClick}> SIM ❤️ </button>
                    <button type="button" onMouseEnter={handleTristin} onMouseLeave={handleMouseLeave} onClick={handleButtonClick}> NÃO 💔 </button>
                    </>
                )}
            </div>
            <div className='gif'>
                <AnimatedGif src={gif[gifNow]} alt={"GIF"}/>
            </div>
            </div>
        </div>


        </main>
        

    </Container>
  );
}
