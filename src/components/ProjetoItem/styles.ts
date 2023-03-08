import styled from 'styled-components';

interface ContainerProps {
    imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
 > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.border};
    cursor: pointer;
    overflow: hidden;

    &:hover {
        border-color: ${({theme}) => theme.colors.primary};
        transform: translateY(-15px);
        > div.overlay {
            opacity: 0.5;
        }
    }

    > section {
        z-index: 2;
        h1 {
            color: ${({theme}) => theme.colors.primary};
            font-size: 1.5rem;
        }
        h2 {
            color: ${({theme}) => theme.colors.secondary};
            font-size: 1rem;
            font-weight: 300;
        }
    }
    > div.overlay {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.colors.gradient};
        opacity: .7;
    }
 }
`;
