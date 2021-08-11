import React, {useState} from 'react';
import {Box, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import {styled} from "@material-ui/core/styles";
import {LoginBackgroundWrapper} from "../components/Background";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        CourseOracle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function RegisterPage() {
  const history = useHistory();
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
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
    // Place holder for filling the signup handler in the later
    setTimeout(() => {
      history.push('/dashboard');
    }, 1000);

  };

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
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={state.firstName}
                onChange={handleChange('firstName')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange('lastName')}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={state.email}
                onChange={handleChange('email')}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="confirmEmail"
                label="Confirm Email"
                name="email"
                autoComplete="confirmEmail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange('password')}
                helperText={state.alert}
                error={!!state.alert}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                label="I agree to the terms of use and privacy policy."
              />
            </Grid>
          </Grid>
          <SubmitButton
            onClick={submit} loading={waiting}
          >
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <StyledLink variant="body2" onClick={() => history.push('/login')}>
                Already have an account? Sign in
              </StyledLink>
            </Grid>
          </Grid>
        </StyledPaper>
        <Box mt={5}>
          <Copyright/>
        </Box>
      </Container>
    </LoginBackgroundWrapper>
  );
}
