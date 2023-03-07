import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > img {
        width: 40rem;
        flex: 1;
        transition: all .3s;
    }

    > img:hover {
        transition: all .3s;
        transform: scale(1.05);
        filter: contrast(120%);
        filter: opacity(100%);
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
        /*This part is important for centering*/
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

@property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }

--card-width: 24rem;
--card-height: 10rem;
    

    content: "";
    width: var(--card-width);
    height: var(--card-height);
    position: relative;
    border-radius: 8px;
    padding: .1rem;
    background-image: linear-gradient(var(--rotate), #1be0b5, #7AC7E3 43%, #11172B);
    top: -1%;
    left: -2%;
    animation: spin 2.5s ease-in-out infinite;
    transition: 1s !important;

    .card {
        background: ${({ theme }) => theme.colors.gradient};
        padding: 1.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 300;
        color: #fff;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        align-self: flex-start;
    }

    @media(max-width: 1450px) {
        width: 18rem;
        padding: 1.5;
        font-size: 0.8rem;
    }
    @media(max-width: 1000px) {
        width: 100%;
    }

    &:hover {
        filter: brightness(1.3);
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
    }

    span.purple {
        color: #c38cdd;
    }
    span.blue {
        color: #7ac7e3;
    }
    span.comment {
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 1rem;
        display: block;
    }

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: calc(var(--card-height)/-6);
        right: 0;
        z-index: -1;
        height: 105%;
        width: 115%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(var(--card-height) / 5));
        background-image: linear-gradient(
            var(--rotate)
            , #5ddcff, #3c67e3 43%, #4e00c2);
            opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }

    @keyframes spin {
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    }


`;