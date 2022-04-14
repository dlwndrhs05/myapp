
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Container  from '@mui/material/Container';
import './App.css';
import UserCardList from './components/UserCardList';
import { useEffect, useState } from 'react';
import { makeUserDatas } from './Utils';
import axios from 'axios';
import{ cityLatLon} from './dataset/WeatherData';
import { CssBaseline,InputLabel,MenuItem,FormControl,Select } from '@mui/material';

const userDatas = makeUserDatas(128);

function App() { 
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData,setselectedCityData] = useState({ name: "안양",lat: 37.3943,lon: 126.9568 }); 

  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  };
  const selectHandleChange = (event) => {
    const cityName = event.target.value;
    const city = cityLatLon.find((element) => {
      return element.name === cityName;
    });
    setselectedCityData( city );
  };

  useEffect(() => {
    console.log("component did mount");
  },[]);

  useEffect(() => {
    const callApi = async() =>{
      try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&appid=9e07ab31edf5e14f1d59fa6363ec762f&lang=kr&units=metric")
        setWeatherData(result.data)  
      }catch(err){
        setApiError(err);
      }
    }
    callApi();
  },[selectedCityData]); 

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`);
  },[useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.primary',
      p: 1
    }}>
        <FormControl>
          <InputLabel id="selected-city-label">Age</InputLabel>
          <Select
            labelId="selected-city-label"
            id="selected-city"
            value={selectedCityData.name}
            label="도시"
            onChange={selectHandleChange}
          >
            <MenuItem value={"서울"}>서울</MenuItem>
            <MenuItem value={"안양"}>안양</MenuItem>
            <MenuItem value={"부산"}>부산</MenuItem>
            <MenuItem value={"대전"}>대전</MenuItem>
            <MenuItem value={"광주"}>광주</MenuItem>
            <MenuItem value={"울산"}>울산</MenuItem>
            <MenuItem value={"시흥"}>시흥</MenuItem>
          </Select>
        </FormControl>
        <weatherCard weatherData={weatherData} apiError={apiError} />
      </Box>
      <CssBaseline/>
    <Switch
      checked={useDarkMode}
      onChange={handleChange}
      color="warning"
      inputProps={{'aria-label':'controlled'}}
    />
    <Container maxWidth="lg" sx={{p:1}}>
      <UserCardList userDatas={userDatas}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
