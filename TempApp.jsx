import React, {useState,useEffect} from "react";

const TempApp = () =>
{

    const[ city, setCity] = useState(null);
    const[ search, setSearch] = useState("");
    useEffect(() => {
        const fetchApi = async() =>
        {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return (
        <div className="box">
            <div className="InputData">
                <input 
                type="search"
                className="InputField"
                onChange = { (event) => {
                    setSearch(event.target.value)

                }} />
            {
                !city?
                (   <div>
                    <h3><b>No Data Found</b></h3>
                    <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            </div>
                ) :
                (
                    <div>
                    <div className="info">
                    <h2 className="location">
                    <i class="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}
                    </h1>
                    <h3 className="tempmin_max">{city.temp_min} Cel| {city.temp_max}Cel</h3>
                </div>
                <div className="wave- one"></div>
                
                <div className="wave- two"></div>
                
                <div className="wave- three"></div>
                
                <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            </div> 

                )
            }

            </div> 
        </div>
    )
}
 
export default TempApp;
