import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function UserCard(props){
    const{userData,idx}=props;
    return <div key={idx}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={userData.avatar}
        alt="human"
      />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            {userData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {userData.jobTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {userData.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {userData.phoneNo}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
    </div>
}
