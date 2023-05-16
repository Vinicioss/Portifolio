import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "../../styles/WeatherStyles";
import 'remixicon/fonts/remixicon.css';


function Weather(){
  const API_KEY = "6e7058d7406d8b0d913c4cfca95f1bd8";
  
  const [ cityInput, setCityInput] = useState("Curitiba");
  
  const [ cityState, setCityState] = useState("");
  
  const [weatherData, setWeatherData] =useState<any>({});
  
  async function getWeatherData() {
    try {
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" +
        cityInput +
        "&appid=" +
        API_KEY + 
        "&lang=pt_br" +
        "&units=metric"
      )
      const data = await serverResponse.json();
      console.log(data)
  
      if(data?.cod === "400") throw data;
      setWeatherData(data);
  
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    getWeatherData();
    
    const interval = setInterval(() => {
      getWeatherData(); // Executa a função a cada período de tempo definido (por exemplo, a cada 5 minutos)
    }, 30000); // Intervalo de 5 minutos em milissegundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };

  }, [cityState]);


  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCityState(cityInput);
    await getWeatherData();
  };
  



    return (
        <Container>
          <Head>
            <title>Weather | Meu portfólio</title>
            <meta
              name="description"
              content="Aqui você pode ver alguns dos projetos criados por mim!"
            />
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
              property="og:description"
              content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
          </Head>
            <Header/>
            <main className="container">
                <div className="container_base">
                    <div className="dash">
                        {Object.keys(weatherData).length !==0 ? 
                          <div className="temperatura">
                            <div className="inner_temp">
                              <strong> {weatherData.name} - {weatherData.sys.country} </strong>
                              <span className="tempText"><i className="ri-temp-cold-fill"/>{weatherData.main.temp} &deg;C</span>
                              <span>Máxima: {weatherData.main.temp_max} &deg;C</span>
                              <span>Mínima: {weatherData.main.temp_min} &deg;C</span>
                              <strong className="sky"> {weatherData.weather[0].description} </strong>
                              <i className={weatherData.weather[0].icon === "01d" ? "ri-sun-line icone": 
                                            weatherData.weather[0].icon === "02d" ? "ri-sun-cloudy-line icone":
                                            weatherData.weather[0].icon === "03d" ? "ri-cloudy-line icone":
                                            weatherData.weather[0].icon === "04d" ? "ri-cloudy-2-fill icone":
                                            weatherData.weather[0].icon === "09d" ? "ri-heavy-showers-line icone":
                                            weatherData.weather[0].icon === "10d" ? "ri-sun-foggy-line icone":
                                            weatherData.weather[0].icon === "11d" ? "ri-thunderstorms-line icone":
                                            weatherData.weather[0].icon === "13d" ? "ri-snowy-line icone":
                                            weatherData.weather[0].icon === "50d" ? "ri-mist-line icone": 
                                            weatherData.weather[0].icon === "01n" ? "ri-moon-line icone": 
                                            weatherData.weather[0].icon === "02n" ? "ri-moon-cloudy-line icone":
                                            weatherData.weather[0].icon === "03n" ? "ri-cloudy-line icone":
                                            weatherData.weather[0].icon === "04n" ? "ri-cloudy-2-fill icone":
                                            weatherData.weather[0].icon === "09n" ? "ri-heavy-showers-line icone":
                                            weatherData.weather[0].icon === "10n" ? "ri-moon-foggy-line icone":
                                            weatherData.weather[0].icon === "11n" ? "ri-thunderstorms-line icone":
                                            weatherData.weather[0].icon === "13n" ? "ri-snowy-line icone":
                                            weatherData.weather[0].icon === "50n" ? "ri-mist-line icone": "ri-sun-line icone"}></i>
                            </div>
                          </div>
                          : 
                          <div className="temperatura">
                            <div className="inner_temp">
                              <span> Busque uma cidade para Visualizar <br/> o clima em tempo real </span>
                            </div>
                          </div>
                        }
                        <div className="temp2">
                          <div className="inner_temp">
                            <form className="input_container" onSubmit={(e) => handleSubmit(e)}>
                              <input placeholder="Buscar cidade" className="searchCity" onChange={(e) => setCityInput(e.target.value)}/>
                              <button type="submit" className="search_button" onClick={(e) => handleSubmit(e)}>Buscar</button>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
                <span className="bottomInfo">Dados atualizados automaticamente a cada 60s.</span>
            </main>
            
        </Container>
    );
}


export default Weather;
