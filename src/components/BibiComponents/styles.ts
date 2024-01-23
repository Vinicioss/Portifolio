import styled from 'styled-components';

export const Container = styled.section`

    height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr;
    background-color: #fdf7f2;
    font-weight: 500;
    

    .header {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 4rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

        ul{
            display: flex;
            gap: 2rem;
        }
        ul:last-child{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .login_button {
            all: unset;
            background-color: black;
            color: white;
            padding: .4rem 1rem .5rem 1rem;
            border-radius: 20px;
            font-size: .9rem;
            font-weight: 400;
            cursor: pointer;
        }
    }


    .title {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        color: black;
        font-family: 'Playfair Display', serif;
        font-weight: 500;
    }

    .body {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;
        .gif{
            margin-top: 3rem;
            width: 25rem;
        }
    }

    .body_infos {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .upper {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;
        > span {
            font-size: 4.7rem;
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            line-height: .9em;
            color: #000;
            letter-spacing: 4px;
            word-spacing: -2px;
        }
        .emoji {
            display: grid;
            justify-content: center;
            font-size: 2rem;
            .emoji1 {
                display: grid;
                justify-content: center;
                font-size: 3rem;
            }
        }
    }

    .mid {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .profile_cont {
        width: 10rem;
        height: 5rem;
        display: flex;
        position: relative;
    }
    
    .mid span {
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
    }

    .mid button {
        all: unset;
        display: flex;
        background-color: #98B9F2;
        color: #000;
        border-radius: 30px;
        padding: .8rem 2rem;
        font-weight: 700;
        gap: 0.5rem;
        align-items: center;
        cursor: pointer;
        transition: all .1s;
        grid-column: 1/3;
        width: max-content;

    }
    .mid button:hover {
        transform: scale(1.05);
    }

    .profile_img_join {
        width: 3rem;
        height: 3rem;
        background-image: url("https://giphy.com/gifs/13Cmju3maIjStW");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        position: absolute;
        top: 0;
    }

    .img1 {
        left: 0;
        background-color: #922ab9;
    }
    .img2 {
        left: 2.5rem;
        background-color: #d5ae92;
    }
    .img3 {
        left: 5rem;
        background-color: #fea55f;
    }

    .lower {
        margin-top: 3rem;
        display: flex;
        gap: 2rem;
        background-color: #f2e7d9;
        padding: 1.5rem;
        border-radius: 15px 115px 15px 15px;
        clip-path: polygon(0 0,calc(100% - 100px) 0,100% 90px,100% 100%,0 100%);
    }

    .lower_img {
        min-width: 9rem;
        height: 9rem;
        background-image: url("https://images.prismic.io/portifoliovinni/888a8e00-fb2c-43f9-b2db-727b7fc6dfa1_Vinnyy1595_Zeus_god_in_Ilia_Efimovitch_Repin_paintng_style_high_f9da4f43-e087-4684-9a04-3a842f57b6b4.png?auto=compress,format");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 15px;
    }

    .lower_content {
        padding-top: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > p {
            padding-right: 2rem;
            color: #000;
        }
    }

    .lower_buttons {
        display: flex;
        justify-content: space-between;

        > button {
            all: unset;
            border: 1px solid #000;
            padding: .3rem 1.5rem;
            border-radius: 20px;
            font-family: 'Playfair Display', serif;
            color: #000;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            transition: .3s;
        }

        > button:hover {
            color: #fff;
            background-color: #000;
        }
    }
    
    .body_img {
        position: relative;
        display: flex;
        justify-content: flex-end;
        border-radius: 25px;
        min-width: 28rem;
        width: 28rem;
        height: 100%;
        background-image: url("https://pbs.twimg.com/media/DTqVRB-XcAI8D7b?format=jpg&name=small");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .sphere {
            position: absolute;
            background: #000;
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            left: -3.5rem;
            bottom: 10rem;
            display: grid;
            place-items: center;
            cursor: pointer;

            .text_O {
                font-size: .8rem;
                font-weight: 200;
                position: absolute;
                width: 100%;
                height: 100%;
                margin: 0;
                color: #fff;
            }
            .text_O span {
                
                position: absolute;
                top: .3rem;
                left: 50%;
                transform-origin: 0 3.7rem;
            }

            .sphere_center {
                position: absolute;
                background: #c747ff;
                width: 1rem;
                height: 1rem;
                border-radius: 100%;
            }
        }

        .sphere:hover {
            transform: scale(1.05);
        }
    }

    .footer {
        margin-top: 3rem;
        height: 4rem;
        width: 100%;
        border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: .8rem;
    }

    @media(max-width: 500px) {
        height: 100vh;
        display: flex;
        justify-content: center;

        .upper{
            >span {
                font-size: 2rem;
            }
            .emoji {
                    font-size: 1.5rem;
                .emoji1 {
                    font-size: 2rem;
                }
            }
        }
    }


`;

interface NavLinkProps {
    isActive: boolean;
}


export const NavLinkConteiner = styled.li<NavLinkProps>`
    a{
        color: ${(props) => 
            props.isActive ? '#db91fa' : '#000'};
    }
`;