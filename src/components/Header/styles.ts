import { lighten } from "polished";
import styled from "styled-components";

interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

    ul{
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    .theme_switch_container {
        display: flex;
        position: absolute;
        right: 1.5rem;
    }
    .change-theme {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        appearance: none;
    }
`;

export const NavLinkConteiner = styled.li<NavLinkProps>`

    a{
        text-transform: uppercase;
        color: ${(props) => 
            props.isActive ? props.theme.colors.primary : props.theme.colors.textHighlight};

        &:hover {
            color: ${props => props.isActive ? lighten(0.3, props.theme.colors.primary) : lighten(0.2, props.theme.colors.textHighlight)};
        }
    }

`;