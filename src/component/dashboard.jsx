import React, { useEffect, useState } from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/dashboard.css";
import { WEATHER_API } from "../constants/api";
const Dashboard = () => {
  const [cityValue, setCity] = useState(null);
  const [inputUseStateUsername, setInputUseStateFunctionUsername] =
    useState("");
  const [cityname, setCityname] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentDate = moment();
    const formattedDate = currentDate.format("dddd D MMMM YYYY");
    setFormattedDate(formattedDate);

  }, []);

  function clickHandler() {
    console.log(cityValue);
    setCityname(inputUseStateUsername);
  }

  useEffect(() => {
    fetch(
      WEATHER_API(cityname)
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCity(res);
      });
  }, [cityname]);

  return (
    <div className="app-wrap">
      <header className="text-center mt-3">
        <input
          value={inputUseStateUsername}
          onChange={(e) => {
            const value = e.target.value;
            setInputUseStateFunctionUsername(value);
          }}
          type="text"
          autoComplete="off"
          className="search-box form-control mb-3"
          placeholder="Search for a city..."
        />
        <button
          onClick={clickHandler}
          className="btn btn-primary"
          type="button"
        >
          Search
        </button>
      </header>
      <main className="text-center">
        <section className="location mb-4">
          <div className="city h3">{cityValue?.name}</div>
          <div className="date">{formattedDate}</div>
        </section>
        <div className="current">
          <div className="temp h1">
            {cityValue?.main?.temp}
            <span className="temp-unit">°C</span>
          </div>
          <div className="weather h4">
            {cityValue?.weather?.length > 0
              ? cityValue.weather[0].main
              : "Loading..."}
          </div>
          <div className="hi-low h5">
            {cityValue?.main?.temp_max}°C / {cityValue?.main?.temp_min}°C
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
// for plan data error datainvashibole loading حواست به این ها باشه این چهار تا مرحله رو باید همیشه بررسی کنی