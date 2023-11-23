import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const defaultTheme = createTheme()

export default function SignUp() {

  const navigate = useNavigate();

  const [details,setDetails] = React.useState({
    "username": "",
    "email": "",
    "password": "",
    "passwordConfirm": "",
    "name": ""
  })
  const [open, setOpen] = React.useState(false)
  const [Erropen, setErrOpen] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(details.password !== details.passwordConfirm){
      setErrOpen(true);
      return;
    }
    axios
      .post('http://localhost:3001/Users', details)
      .then((response) => {
        console.log('Success:', response.data)
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Error in signup');
      })
  }


  const handleInputChange = (event) => {
    setDetails({...details,[event.target.name] : event.target.value});
  }

  // React.useEffect(() => {
  //   document.body.style.background =
  //     'url(/images/signup_background.jpg) no-repeat'
  //   document.body.style.backgroundSize = 'cover'
  // })


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        style={{
          backgroundColor: '#fffb',
          boxShadow: '0 0 100px #00693e',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        component="main"
        maxWidth="xs"
        sx={{
          borderRadius: '30px',
          paddingBottom: '10px',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#00693e' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="User Name"
                  autoFocus
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  id="Confirmpassword"
                  autoComplete="Confirmpassword"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Accept our terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#00693e' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: '#00693e' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
