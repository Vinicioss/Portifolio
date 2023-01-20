import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    margin-top: 10rem;
    border-top: 1px solid ${({theme}) => theme.colors.backgroundLight};
    height: 5rem;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: none;
            border: none;
            color: ${({theme}) => theme.colors.secondary};
            text-transform: uppercase;
            font-weight: 300;
            font-size: 1.2rem;
            transition: .5s;

            &:hover {
                color: ${({theme}) => lighten(0.2, theme.colors.secondary)}
            }
        }

        > section {
            display: flex;
            align-items: center;
            gap: 1rem;

            svg {
                width: 2rem;
                height: 2rem;
                color: ${({theme}) => theme.colors.text};
                transition: .5s;
                cursor: pointer;

                &:hover {
                    color: ${({theme}) => theme.colors.primary};
                }
            }
        }

        @media(max-width: 450px){
            button {
                font-size: .9rem;
            }

            > section {
                gap: .5rem;
                svg {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
`;
