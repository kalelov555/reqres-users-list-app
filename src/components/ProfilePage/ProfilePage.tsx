import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navbar } from "../Navbar/Navbar";
import { User } from "../../typings/user";
import "../../styles/Profile.css";

export type Props = {
  user: User;
  handleLogout: () => void;
};

export default function ProfilePage({ user, handleLogout }: Props) {
  const { email, first_name, last_name, avatar } = user;
  return (
    <div className='profile-page'>
      <div className='nav'>
        <Navbar currentUser={user} handleLogout={handleLogout} />
      </div>
      <div className='profile-container'>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component='img'
            height='140'
            image={avatar}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {`${first_name} ${last_name}`}
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
              {`${email}`}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
