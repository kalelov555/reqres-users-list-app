import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type Props = {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const UserItem = ({ email, first_name, last_name, avatar }: Props) => {
  return (
    <Card className='user-item' sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image={avatar}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h6'>{`${first_name} ${last_name}`}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};
