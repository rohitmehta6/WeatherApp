import React, { useState, useEffect } from 'react';

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Patna");


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5a3ee21dd009fcdd51204633217a65dc`;
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    }, [search]) //if [] then will run only once when page reloads.. [search] helps it to run whenever input changes



    return (
        <>
            <div className="main-container">
                <div className="inner-container">
                    <input type="search" placeholder="Enter City Name" className="inputField" value={search} onChange={(event) => { setSearch(event.target.value) }} />


                    {!city ? (
                        <p className="errorMsg"> No Data Found </p>
                    ) : (
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search.toUpperCase()}
                            </h2>
                            <h1 className="temp" >{city.temp}°C</h1>
                            <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C </h3>
                        </div>



                    )}
                </div>

            </div>
        </>
    )
}

export default TempApp;