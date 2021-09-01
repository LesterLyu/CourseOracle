import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import SubmitButton from '../../components/SubmitButton';


const SchoolCard = ({ school, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="school"
          src={process.env.PUBLIC_URL + '/logo1.png'}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {school.name}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2,
              alignItems: 'center',
      display: 'flex'}}>
      <SubmitButton> View Material</SubmitButton>
    </Box>
  </Card>
);

export default SchoolCard;
