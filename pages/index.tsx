import { useState, useEffect } from "react";
import CityWeather from "../components/city-weather";

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    setCity(e.target.city.value);    
  }

  return (
    <div>
        <div className="mt-4">      
          <div className="flex justify-center mt-10 bg-slate-200">
          <h1 className="inline-flex text-gray-900 text-xl leading-tight font-medium mb-2 mr-5 mt-2">Weather Search: </h1>
            <div className="mb-3 xl:w-96">
            <form
                className="flex items-center justify-center"
                onSubmit={e => handleClick(e)}
              >
              <div className="input-group relative flex items-stretch w-full mb-4">  
                        <input
                            name="city"
                            type="text"
                            data-testid="weather-input" 
                            onChange={(e) => {setCity('')}}
                            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Search" 
                            aria-describedby="search-button" 
                          />
                          <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded rounded-l-none shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
                            id="search-button"
                            name="search"
                            type="submit"
                            data-testid="search-button">
                              SUBMIT
                          </button>
              </div>
              
              </form>
            </div>
        </div>
          {city && <CityWeather city={city}/>}
        </div>
        <div className="row text-center">The city being query is: {city}</div>
    </div>
  );
}
