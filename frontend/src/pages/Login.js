import React, {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Link, Container, Divider, Paper, Typography, TextField, Box, Button} from "@mui/material";
import {UserContext} from "../contexts";
import SubmitButton from '../components/SubmitButton';
import {styled} from "@mui/material/styles";
import {LoginBackgroundWrapper} from "../components/Background";
import {USER_TYPE} from "../constants";
import {login} from "../api/auth";

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: 40,
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    padding: 14,
    marginTop: 10,
  }
}));

const StyledLink = styled(Link)(({theme}) => ({
  fontSize: 15,
  lineHeight: 2,
  color: '#007dff',
  cursor: 'pointer',
  fontWeight: 500
}));


export default function LoginPage() {
  const history = useHistory();
  const userContext = useContext(UserContext);

  if (userContext.type !== USER_TYPE.GUEST) {
    history.push('/dashboard');
  }
  const [state, setState] = useState({
    email: '',
    password: '',
    alert: ''
  });
  const [waiting, setWaiting] = useState(false);

  const handleChange = name => e => {
    const value = e.target.value;
    setState(prev => ({...prev, [name]: value}));
  };

  const submit = () => {
    setWaiting(true);

    login(state.email, state.password)
      .then(result => {
        if (result.success) {
          userContext.login({
            email: result.data.email, type: USER_TYPE.BASIC_USER
          });
          history.push('/dashboard');
        } else {
          setWaiting(false);
          setState(state => ({...state, alert: result.message}));
        }
      })

  };

  // Submit the form when enter key presses
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      submit();
    }
  }

  return (
    <LoginBackgroundWrapper>
      <Container maxWidth="sm">
        <Box sx={{paddingTop: '40px'}}/>
        <StyledPaper elevation={5} onKeyPress={handleKeyPress}>
          <Typography variant="h4" sx={{
            color: 'rgb(0,32,81)',
            fontWeight: 400,
            marginBottom: 3,
          }}>
            Login
          </Typography>

          <TextField
            label="Email"
            value={state.email}
            fullWidth
            onChange={handleChange('email')}
            sx={{minHeight: '80px'}}
          />
          <br/>
          <TextField label="Password"
                     type="password"
                     value={state.password}
                     fullWidth
                     onChange={handleChange('password')}
                     sx={{minHeight: '80px'}}
                     helperText={state.alert}
                     error={!!state.alert}
          />
          <SubmitButton sx={{
            marginTop: 3,
            marginBottom: 3
          }} onClick={submit} loading={waiting}>
            Log in
          </SubmitButton>

          <Button
            color="info"
            variant="contained"
            sx={{
              marginLeft: 2,
              marginTop: 3,
              marginBottom: 3
            }}>
            Log in from Wallet
          </Button>

          <Divider/>
          <StyledLink variant="body2" onClick={() => history.push('/register')}>
            Don't have an account? Sign up
          </StyledLink>
          <br/>
          <StyledLink variant="body2">
            Forgot password?
          </StyledLink>
        </StyledPaper>
      </Container>
    </LoginBackgroundWrapper>
  )
}