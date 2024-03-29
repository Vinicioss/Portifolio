import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;


    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 4rem;
    }

    h2 {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 300;
        font-size: 3rem;
    }

    @media (max-width: 1000px) {

        h1 {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 2.5rem;
        }
    
        h2 {
            color: ${({ theme }) => theme.colors.secondary};
            font-weight: 300;
            font-size: 1.8rem;
        }
    }

    @media (max-width: 500px) {

        h1 {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 1.8rem;
        }
    
        h2 {
            color: ${({ theme }) => theme.colors.secondary};
            font-weight: 300;
            font-size: 1.2rem;
        }
    }
`;
