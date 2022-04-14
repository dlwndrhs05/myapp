
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { weather_mapping_data } from "../dataset/WeatherData"


function weatherCard(props) {
    const {weatherData, apiError} = props;

    const makeWeatheInfo = () => {
        const {temp, feels_like, temp_min, temp_max, humidity} = weatherData.main;
        const {main,icon} = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data['']
        const iconUrl = 'http://openweathermap.org/img/wn${icon}@2x.png';
        return <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
        }
    }>
        <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
        <parseWeatherData.icon sx={{fontSize:125,color:'red'}}/>
        <img src={iconUrl} alt="현재날씨 아이콘"/>
        <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
        <Typography>{`최저온도: ${temp_min}℃ 최고온도: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
    </Box>
}
    return <>
        {apiError ? <Typography>{apiError.message}</Typography>
                :
                weatherData ? 
                    makeWeatherInfo()
                    :
                    <Typography>날씨정보 없음</Typography>
        }
    </>
}

export default weatherCard;