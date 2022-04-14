import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BlurOnIcon from '@mui/icons-material/BlurOn';



export const cityLatLon= [
    { name: "서울",lat: 37.5665,lon: 126.9780 },
    { name: "안양",lat: 37.3943,lon: 126.9568 },
    { name: "부산",lat: 35.1796,lon: 129.0756 },
    { name: "대전",lat: 36.3504,lon: 127.3845 },
    { name: "광주",lat: 35.1595,lon: 126.8526 },
    { name: "울산",lat: 35.5384,lon: 129.3114 },
    { name: "시흥",lat: 37.3156,lon: 126.8040 },
]

export const weather_mapping_data = {
    Thunderstorm: {
        name: "폭우",
        icon: ThunderstormIcon
    },
    Drizzle: {
        name: "이슬비",
        icon: UmbrellaIcon
    },
    Rain: {
        name: "비",
        icon: BeachAccessIcon
    },
    Snow: {
        name: "눈",
        icon: AcUnitIcon
    },
    Clear: {
        name: "맑음",
        icon: WbSunnyIcon
    },
    Clouds: {
        name: "구름많음",
        icon: CloudIcon
    },
    Mist: {
        name: "안개",
        icon: BlurOnIcon
    }

}