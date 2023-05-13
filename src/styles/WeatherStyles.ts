import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr;
    
    > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .bottomInfo {
        margin-top: 1rem;
    }
    
    .container_base {
        position: relative;
        overflow: hidden;
        height: 35rem;
        width: 35rem;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        background-color: #aaa;
        background-image: url("https://images.prismic.io/portifoliovinni/ec494565-b4b3-4195-8de4-07185584ea2d_imagem-cenica-de-montanhas-durante-o-por-do-sol-imagem-incrivel-do-conceito-de-aventura-de-viagem-de-cenario-natural-impressionante-fundo-natural-generative-ai.jpg?auto=compress,format");
    }

    .dash {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr max-content;
        grid-template-columns: 1fr;
        align-content: space-between;
        padding: 2rem;
        row-gap: 2rem;
        background-color: rgba(0, 20, 90, 0.3);
    }

    .temperatura {
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

    .temperatura:hover {
        transform: scale(1.05);
    }

    .temp2 {
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        grid-column: 1/3;
    }

    .icone {
        margin-top: 1rem;
        font-size: 3rem;
    }

    .inner_temp {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        color: #fff;
        text-shadow: 0 1px 10px #000;
        text-align: center;
    }

    .input_container {
        width: 100%;
        display: flex;
        gap: 1rem;
    }

    .searchCity {
        width: 100%;
        padding: .7rem;
        border-radius: .55rem;
        border: 1px solid #fff;
        color: #fff;
        background-color: transparent;
        outline: none;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    .searchCity::placeholder {
        color: rgba(255, 255, 255, 0.8);
    }

    .searchCity:focus {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .search_button {
        background-color: transparent;
        color: #fff;
        border-radius: .55rem;
        padding: .7rem;
        border: 1px solid #fff;
    }

    .search_button:hover {
       background-color: rgba(255, 255, 255, 0.2);
    }

    .weekWeather_title {
        margin-top: 2rem;
        text-transform: uppercase;
    }

    .tempText {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 3.5rem;
    }

    .sky {
        margin-top: 2rem;
    }

    .sky::first-letter {
        text-transform: uppercase;
    }
`;