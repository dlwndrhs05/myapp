
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Container  from '@mui/material/Container';
import './App.css';
import UserCardList from './components/UserCardList';
import { useEffect, useState } from 'react';
import { makeUserDatas } from './Utils';
import axios from 'axios';



const userDatas = makeUserDatas(5000);

// axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&appid=9e07ab31edf5e14f1d59fa6363ec762f&lang=kr&units=metric")
// .then((res) => {
//   console.log(res)
// })
// .catch((error)=>{
//   console.log(error)
// })

// async function callAPI() {
//   try{
//     axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&appid=9e07ab31edf5e14f1d59fa6363ec762f&lang=kr&units=metric")  
//   }catch(err){
//     console.log(err);
//   }
// }


function App() { 
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleChange = (event) => {
    console.log(event)
    setUseDarkMode(useDarkMode ? false : true);
  };
  
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
    console.log("component dit mount")
  },[]);

  useEffect(()=> {
    console.log(`theme 변경됨 -> ${useDarkMode}`)
  },[useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,}
      }>
        <weatherCard weatherData={weatherData} apiError={apiError} />
      </Box>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,}
      }>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="warning"
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Container maxWidth="lg" sx={{p:1}}>
          <UserCardList userDatas={userDatas} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}


export default App;