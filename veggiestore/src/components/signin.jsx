import { useContext } from 'react'
import { AuthContext } from './context'
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
import '../styles/background.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Snackbar, Alert } from '@mui/material'

const defaultTheme = createTheme()

export default function SignIn() {
  const navigateTo = useNavigate()

  const { inDetails, setInDetails, setIsLoggedIn } = useContext(AuthContext)



  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [Erropen, setErrOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3001/Users')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error from axios : ' + error)
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = data.find(
      (userData) =>
        userData.email === inDetails.email && userData.password === inDetails.password
    )
    if (user) {
      setIsLoggedIn(true)
      setOpen(true)
      setTimeout(() => {
        navigateTo('/products')
      }, 2000)
    } else {
      setErrOpen(true);
    }
  }

  const handleInputChange = (event) => {
    setInDetails({ ...inDetails, [event.target.name]: event.target.value })
  }

  // useEffect(() => {
  //   document.body.style.background =
  //     'url(/images/login_background.jpg) no-repeat'
  //   document.body.style.backgroundSize = 'cover'
  // }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fffb',
            boxShadow: '0 0 100px #00693e',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            p: 4,
            borderRadius: '30px',
          }}
        >
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
          >
            <Alert severity="success" sx={{ width: '100%' }}>
              Login Successful
            </Alert>
          </Snackbar>
          <Snackbar
            open={Erropen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={3000}
            onClose={() => setErrOpen(false)}
          >
            <Alert severity="error" sx={{ width: '100%' }}>
              Invalid Credentials
            </Alert>
          </Snackbar>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
