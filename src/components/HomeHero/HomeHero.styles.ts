import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > div.img_container img {
        position: relative;
        width: 40rem;
        flex: 1;
        z-index: 2;
    }

    > div.img_container {
        position: relative;
    }

    > div.img_container div.img_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 48% 52% 37% 63% / 26% 31% 69% 74% ;
        background: ${({ theme }) => theme.colors.gradient};
    }

    > div.img_container img:hover {
        transform: scale(1.05);
    }

    > div.img_container:hover div.img_bg {
         border-radius: 20% 20% 20% 20% / 20% 20% 20% 20% ;
     }

    > div {
        flex: 4;
    }

    @media(max-width: 1450px) {
        > img {
            width: 30rem;
        }

        
        > div {
            flex: 1;
        }
    }
    @media(max-width: 1000px) {
        > img {
            width: 22rem;
        }
    }

    @media(max-width: 700px) {
        flex-direction: column-reverse;
        > div {
            width: 100%;
        }
    }

`;

export const TextContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 8rem;
        color: ${({ theme }) => theme.colors.primary}
    }
    h2 {
        font-size: 3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.secondary}
    }

    @media(max-width: 1450px) {
        h1 {
            font-size: 5rem;
        }
        
        h2 {
            font-size: 2rem;
        }
    }
    @media(max-width: 1000px) {
        h1 {
            font-size: 3rem;
        }
        
        h2 {
            font-size: 1.5rem;
        }
    }
    
    .wrapper {
        display: grid;
        place-items: center;
    }

    .typing {
        width: 15ch;
        animation: typing 2s steps(15), blink .5s step-end infinite alternate;
        animation-delay: .3s;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 2em;
    }

    @keyframes typing {
    from {
        width: 0
    }
    }
        
    @keyframes blink {
    50% {
        border-color: transparent
    }
    }

`;

export const InfosContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;


export const CodeItem = styled.pre`

--card-width: 24rem;
--card-height: 10rem;
    

    content: "";
    width: var(--card-width);
    height: var(--card-height);
    position: relative;
    border-radius: 8px;


    .card {
        background: ${({ theme }) => theme.colors.gradient};
        padding: 1.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.textLight};
        width: 100%;
        height: 100%;
        border-radius: 8px;
        align-self: flex-start;

        > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
        }

        span.purple {
            color: #d45d5d;
        }
        span.blue {
            color: ${({ theme }) => theme.colors.animGradient2};
        }
        span.comment {
            color: ${({ theme }) => theme.colors.text};
            margin-bottom: 1rem;
            display: block;
        }
        @media(min-width: 1450px) {
        > br {
            display: none;
        }
    }
    }

    @media(max-width: 1450px) {
        width: 18rem;
        padding: 1.5;
        font-size: 0.8rem;
    }
    @media(max-width: 1000px) {
        width: 100%;
    }

    &:last-child {
        align-self: flex-end;
    }

`;