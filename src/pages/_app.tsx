import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { useState, createContext } from 'react';
import GlobalStyles from '../styles/global';
// import { ThemeContext, ThemeContextProvider } from '../contexts/ThemeContext';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import { Theme } from '../styles/styled';

type ContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ContextProps);

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
      setTheme (theme.title === "light" ? dark : light)
      console.log(theme)
    }
  
// const { theme } = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <NextNprogress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
