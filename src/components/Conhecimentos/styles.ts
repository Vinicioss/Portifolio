import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    .slider{
        display: flex;
        height: auto;
        margin: auto;
        overflow: hidden;
        align-items: center;
        margin-top: 7rem;
    }

    .slider::before {
        position: absolute;
        z-index: 1;
        left: 0;
        content: "";
        width: 23.958%;
        height: 10rem;
        background: linear-gradient(-90deg, hsla(0, 0%, 96.9%, 0), ${({ theme }) => theme.colors.background});
    }

    .slider::after{
        position: absolute;
        right: 0;
        content: "";
        width: 23.958%;
        height: 10rem;
        background: linear-gradient(90deg, hsla(0, 0%, 96.9%, 0), ${({ theme }) => theme.colors.background} 99%);
    }

    .slider_track {

        display: flex;
        gap: 4rem;
        animation: scroll 25s linear infinite;
        -webkit-animation: scroll 25s linear infinite;
        width: calc(240px * 10);
        /* margin-top: 8rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 6rem; */

        /* @media (max-width: 1000px) {
            flex-wrap: wrap;
            gap: 5rem;
        }
        @media (max-width: 700px) {
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        } */
    }

    @keyframes scroll {

        0% {
            transform: translateX(0);
            -webkit-transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-15.26rem*5));
            -webkit-transform: translateX(-15.26rem*5);
        }
        
    }
`;

export const ConhecimentoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 300;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    svg {
        width: 6.5rem;
        height: 6.5rem;
        color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover {
        svg {
            color: ${({ theme }) => theme.colors.primary};
            transform: scale(0.9);
        }
    }
`;