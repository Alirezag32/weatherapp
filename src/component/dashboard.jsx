import React, { useEffect, useState } from "react";
import moment from "moment";
import { TextField, Button, Typography } from "@mui/material";
import { WEATHER_API } from "../constants/api";

const Dashboard = () => {
  const [cityValue, setCity] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cityname, setCityname] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentDate = moment();
    const formattedDate = currentDate.format("dddd D MMMM YYYY");
    setFormattedDate(formattedDate);
  }, []);

  function clickHandler() {
    console.log(cityValue);
    setCityname(inputValue);
  }

  useEffect(() => {
    fetch(WEATHER_API(cityname))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCity(res);
      });
  }, [cityname]);

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))",
      }}
    >
      <header
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 15px 15px",
          marginBottom: "20px",
        }}
      >
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          autoComplete="off"
          sx={{
            width: "100%",
            maxWidth: "280px",
            padding: "10px 15px",
            border: "none",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "16px 0px 16px 0px",
            borderBottom: "3px solid #DF8E00",
            color: "#313131",
            fontSize: "20px",
            fontWeight: 300,
            transition: "0.2s ease-out",
            "&:focus": { backgroundColor: "rgba(255, 255, 255, 0.6)" },
          }}
          placeholder="Search for a city..."
        />
        <Button
          onClick={clickHandler}
          variant="contained"
          color="primary"
          sx={{ marginTop: "10px" }}
        >
          Search
        </Button>
      </header>
      <main
        sx={{
          flex: "1 1 100%",
          padding: "25px 25px 50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ mt: 3 }}>
          WhetherApp
        </Typography>
        <section sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#FFF",
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            {cityValue?.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#FFF", fontSize: "16px" }}>
            {formattedDate}
          </Typography>
        </section>
        <div>
          <Typography
            variant="h1"
            sx={{
              color: "#FFF",
              fontSize: "50px",
              fontWeight: 900,
              margin: "30px 0px",
              textShadow: "2px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            {cityValue?.main?.temp}
            <span sx={{ fontWeight: 500, fontSize: "2rem" }}>°C</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontSize: "32px",
              fontWeight: 700,
              fontStyle: "italic",
              marginBottom: "15px",
              textShadow: "0px 3px rgba(0, 0, 0, 0.4)",
            }}
          >
            {cityValue?.weather?.length > 0
              ? cityValue.weather[0].main
              : "Loading..."}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: "24px",
              fontWeight: 500,
              textShadow: "0px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            {cityValue?.main?.temp_max}°C / {cityValue?.main?.temp_min}°C
          </Typography>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

// for plan data error datainvashibole loading حواست به این ها باشه این چهار تا مرحله رو باید همیشه بررسی کنی
