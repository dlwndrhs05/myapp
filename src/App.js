import faker from '@faker-js/faker'; //영문버전의 farerjs
import faker_ko from '@faker-js/faker/locale/ko'; //한글버전의 fakerjs
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import DogMain from './DogMain';

function App() {
  const userData = [];

  while(userData.length < 10){
    userData.push({
      avatar:faker.image.avatar(),
      name:`${faker_ko.name.lastName()}${faker_ko.name.firsName()}`,
      email:faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNo: faker_ko.phoneNo.phoneNumber()
    })
  }

  const userCards = userData.map((userData) =>{
    return <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    // return <>
    // <h4>{userData.jobTitle}</h4>
    // <img src={userData.avater} alt="사용자 프로필용 아바타"></img>
    // <h5>{userData.name}</h5>
    // {userData.email}<br />
    // {userData.phoneNo}
    // </>
  })

console.log(userData)
  return (
    <div className='App'>
      {userCards}
    </div>
  );
}
export default App;
