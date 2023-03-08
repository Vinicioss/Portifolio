import { darken } from 'polished';
import styled from 'styled-components';

interface ProjetoProps {
    imgUrl: string;
}

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media (max-width: 1000px) {
            gap: 2rem;
        }
    }

    > button {
        background: ${({ theme }) => theme.colors.primary};
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;

        &:hover {
            background: ${({ theme }) => darken(0.1, theme.colors.primary)};
        }

        a {
            text-transform: uppercase;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 300;
        }

        @media(max-width: 500px) {
            padding: 1rem;
            a {
                font-size: 1rem;
            }
        }
    }
    
`;

export const ProjetoContainer = styled.div<ProjetoProps>`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;

    > button a {
            > i {
                transition: 0s !important;
            }
        }

    &:hover {
        > section {
            > div.text {
                right: -12rem;
            }
            > div.overlay {
                opacity: 0.4;
            }
        }

        > button a {
            color: ${({ theme }) => theme.colors.primary};

            > i {
                transition: 0s !important;
            }
        }
    }

    > button {
        height: 4rem;
        margin: 0 0 3rem 5rem;
        background: none;
        border: none;

        > a {
            color: ${({ theme }) => theme.colors.textLight};
            font-size: 2rem;
            font-weight: 300;
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }
    }

    > section {
        width: 50rem;
        height: 100%;
        background: url(${props => props.imgUrl}) no-repeat center;
        background-size: cover;
        position: relative;

        > div.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.colors.gradient};
            opacity: 0.75;
        }

        > div.text {
            position: absolute;
            top: 3rem;
            right: -10rem;
            width: fit-content;

            h1 {
                color: ${({ theme }) => theme.colors.primary};
                font-size: 2.5rem;
            }

            h2 {
                color: ${({ theme }) => theme.colors.secondary};
                font-size: 2rem;
                font-weight: 300;
            }
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;

        > button {
            margin: 3rem 5rem 0 0;
        }

        > section > div.text {
            text-align: right;
            right: 0;
            left: -10rem;
        }

        &:hover {
            > section > div.text {
                left: -12rem;
            }
        }
    }

    @media(max-width: 1450px) {
        > section {
            width: 40rem;
        }
    }

    @media(max-width: 1000px) {
        > section {
            width: 100%;

            > div.text {
                top: 1rem;
                left: 1rem;
            }

        }

        > button {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
        }

        &:nth-child(even) {
            flex-direction: row;

            > section {
                width: 100%;
    
                > div.text {
                    top: 1rem;
                    left: 1rem;
                    text-align: left;
                }
    
            }

            > button {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                margin: 0;
            }

            &:hover {
                 > section > div.text {
                    left: 1rem;
                 }
            }
        }
    }

    @media(max-width: 1000px) {
        height: 17rem;
    }

    @media(max-width: 450px) {
        > button {
            height: auto;

            a {
                font-size: 1.5rem;
                gap: 0.8rem;
            }
        }

        > section > div.text {
            h1 {
                font-size: 1.5rem;
            }
            h2 {
                font-size: 1rem;
            }
        }
    }
`;