import { darken } from "polished";
import styled from "styled-components";


export const ProjetoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    > div {
        display: flex;
        flex-direction: column;
        max-width: 80rem;
    }

    > div main {
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 100%;
        padding: 0 5rem;

        p {
            display: flex;
            white-space: pre-wrap;
            color: ${({theme}) => theme.colors.textLight};
            font-size: 1.5rem;
            font-weight: 300;
            text-align: justify;
        }

        button {
            background: ${({theme}) => theme.colors.primary};
            padding: .8rem 0rem;
            border-radius: .5rem;
            border: none;
            margin-top: 2rem;

            &:hover {
                background: ${({theme}) => darken(0.1, theme.colors.primary)};
            }

            a {
                color: #fff;
                padding: 1rem 2rem;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 300;
            }
        }
        
        @media(max-width: 700px) {
            padding: 0 2.5rem;

            p {
                font-size: 1rem;
            }

            button {
                padding: .7rem 2rem;

                a {
                    font-size: .9rem;
                }
            }
        }
    }

`;

