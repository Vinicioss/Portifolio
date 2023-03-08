import { useContext, useState } from "react";
import { ThemeContext } from "../../pages/_app";
import NavLink from "./NavLink";
import { Container } from "./styles";



function Header(){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/"/>
                <NavLink title="Projetos" path="/projetos" includes/>
            </ul>
            <label className="theme_switch_container"> 
                    <input type='checkbox' className={theme.title === 'light' ? "ri-sun-line change-theme" : "ri-moon-line change-theme"} id="theme-button"  onChange={toggleTheme}></input>
                    <span></span>
            </label>
        </Container>
    );
}

export default Header;
