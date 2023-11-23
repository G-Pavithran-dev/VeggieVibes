import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from '@mui/material'

const cardsContent = [
  {
    id: 1,
    heading: 'Welcome Offer',
    description: 'Use WELCOME24 code to get welcome offer on your first order.',
    imageUrl:
      'https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg',
  },
  {
    id: 2,
    heading: 'Free Delivery',
    description: 'Get free delivery on bulk orders',
    imageUrl:
      'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg',
  },
  {
    id: 3,
    heading: 'Extra Offers',
    description: 'Get flat 10% offer on orders above Rs.499',
    imageUrl: '/images/10.jpeg',
  },
]

const defaultTheme = createTheme()

export default function Home() {
  // React.useEffect(() => {
  //   document.body.style.background = 'url(/images/background_v2.jpg)'
  //   document.body.style.backgroundSize = 'cover'
  // }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          color: 'white',
        }}
      >
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" gutterBottom>
              Welcome to
            </Typography>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              VeggieVibes !!!
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Discover the joy of farm-fresh convenience with our app – where
              vibrant produce meets doorstep delight. Elevate your plate, one
              click at a time!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="\login">
                <Button
                  variant="contained"
                  size={'large'}
                  sx={{
                    color: '#00693e',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: '#00693e',color:'white' },
                  }}
                >
                  Get Started!
                </Button>
              </Link>
              <Link href="\products">
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': { color: '#00693e', borderColor: '#00693e' },
                  }}
                  size="large"
                >
                  Explore
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cardsContent.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#e7e6e6',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={card.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ p: 2, backgroundColor: 'yellow' }} component="footer">
        <Typography variant="h4" align="center" gutterBottom>
          Fresh Picks, Fast Clicks: Your Farm-to-Table Connection in a Single
          App!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
