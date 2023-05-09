import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr;
    
    > main {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .container_base {
        position: relative;
        overflow: hidden;
        height: 40rem;
        width: 70rem;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .dash {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        padding: 2rem;
        gap: 2rem;
    }

    .temperatura {
        height: max-content;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

    .temp2 {
        grid-column: 1/3;
    }

    .inner_temp {
        display: grid;
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
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3.5rem;
    }

    .sky {
        margin-top: 2rem;
    }

    .sky::first-letter {
        text-transform: uppercase;
    }
`;