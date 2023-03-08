import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section {
        margin-top: 8rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 6rem;

        @media (max-width: 1000px) {
            flex-wrap: wrap;
            gap: 5rem;
        }
        @media (max-width: 700px) {
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
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