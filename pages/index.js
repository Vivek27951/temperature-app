import { useState, useEffect } from "react";
import { FaTemperatureHigh, FaSearchLocation } from "react-icons/fa";
import { MdLocationOff, MdLocationOn } from "react-icons/md";

const weather = () => {
  const [temp, setTemp] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTemp = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8da6d78b734f196a2479187e96005f1d`;
      const response = await fetch(url);
      const data = await response.json();
      setTemp(data);
      console.log(data);
    };

    fetchTemp();
  }, [search]);

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "800px",
        padding: "200px",
      }}
    >
      <div
        className="box"
        style={{
          width: "350px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: "30px",
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          borderRadius: "30px",
        }}
      >
        <input
          type="search"
          style={{
            height: "50px",
            borderRadius: "50px",
            fontSize: "30px",
            textAlign: "center",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search City"
        />
        {temp.cod !== 200 ? (
          <div style={{ marginTop: "50px" }}>
            <div style={{ display: "flex", color: "#922B21" }}>
              <MdLocationOff />
              <div>No Location Found :(</div>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "30px", color: "#28B463" }}>
            <div
              style={{
                marginBottom: "10px",
                fontSize: "50px",
                textTransform: "capitalize",
              }}
            >
              <MdLocationOn style={{ fontSize: "40px" }} /> {search}
            </div>
            <div>
              <FaTemperatureHigh />
              {temp.main.temp} Cel
              <div style={{ fontSize: "20px", marginTop: "5px" }}>
                Min: {temp.main.temp_min} Cel | Max: {temp.main.temp_max} Cel
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default weather;
