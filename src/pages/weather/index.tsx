import Head from "next/head";
import Header from "../../components/Header";
import { Container } from "../../styles/WeatherStyles";
import 'remixicon/fonts/remixicon.css';
import { useState } from "react";


function Weather(){
  const API_KEY = "6e7058d7406d8b0d913c4cfca95f1bd8";
  
  const [ cityInput, setCityInput] = useState("");

  const [weatherData, setWeatherData] =useState<any>({});

  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  async function getWeatherData(e) {
    e.preventDefault();
    
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
      console.log(data);

      if(data?.cod === "400") throw data;
      setWeatherData(data);

    } catch (err) {
      console.log(err);
    }
    
  }


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
                    <img src="./landscape.jpg"></img>
                    <div className="dash">
                        <div className="temperatura temp2">
                          <div className="inner_temp">
                            <form className="input_container" onSubmit={(e) => getWeatherData(e)}>
                              <input placeholder="Buscar cidade" className="searchCity" onChange={(e) => setCityInput(e.target.value)}/>
                              <button className="search_button" onClick={(e) => getWeatherData(e)}>Buscar</button>
                            </form>
                          </div>
                        </div>
                        {Object.keys(weatherData).length !==0 ? 
                          <div className="temperatura">
                            <div className="inner_temp">
                              <strong> {weatherData.name} - {weatherData.sys.country} </strong>
                              <span className="tempText">{weatherData.main.temp} &deg;C</span>
                              <span>Máxima: {weatherData.main.temp_max} &deg;C</span>
                              <span>Mínima: {weatherData.main.temp_min} &deg;C</span>
                              <strong className="sky"> {weatherData.weather[0].description} </strong>
                            </div>
                          </div>
                          : 
                          <div className="temperatura">
                            <div className="inner_temp">
                              <strong> Cidade </strong>
                              <span className="tempText">Temp</span>
                              <strong className="sky"> Clima </strong>
                            </div>
                          </div>
                        }
                    </div>
                </div>
            </main>
            
        </Container>
    );
}


export default Weather;
