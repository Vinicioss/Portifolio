import { useContext, useState } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../pages/_app";
import NavLink from "./NavLink";
import { Container } from "./styles";
import dark from '../../styles/theme/dark';


function Header(){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/"/>
                <NavLink title="Projetos" path="/projetos" includes/>
            </ul>
{/* 
            <div className="theme_switch_container">
                <ReactSwitch 
                onChange={toggleTheme}
                checked={theme === dark}
                className={'change-theme'}
                checkedIcon={<i className="ri-moon-clear-line"></i>}
                uncheckedIcon={<i className="ri-sun-line"></i>}
                height={20}
                ></ReactSwitch>
            </div> */}

            <div className="theme_switch_container"> 
                    <input type='checkbox' className={theme ? 
                    (theme.title === 'light' 
                    ? "ri-sun-line change-theme" 
                    : "ri-moon-line change-theme") : "ri-sun-line change-theme"} 
                    id="theme-button"  onChange={toggleTheme}></input>
                    <span></span>
            </div>
        </Container>
    );
}

export default Header;
