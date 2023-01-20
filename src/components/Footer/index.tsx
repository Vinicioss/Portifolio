import { Container } from "./styles";
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillLinkedin
} from 'react-icons/ai';

function Footer(){

    function handleRedirect(url: string) {
        window.open(url);
    };

    function handleScrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <div className="container">
                <button type="button" onClick={handleScrollTop}>
                    Voltar ao topo
                </button>
                <section>
                    <AiOutlineInstagram 
                        onClick={() => handleRedirect("https://www.instagram.com/vinicioss159/")}
                    />
                    <AiOutlineGithub 
                        onClick={() => handleRedirect("https://github.com/Vinicioss")}
                    />
                    <AiFillLinkedin 
                        onClick={() => handleRedirect("https://www.linkedin.com/in/vinicioss/")}
                    />
                </section>
            </div>
        </Container>
    );
}


export default Footer;
