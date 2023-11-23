import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
} from '@mui/material'
import Box from '@mui/material/Box'
import '../styles/product.css'

export default function Products() {
  const Products = [
    {
      id: 1,
      name: 'Vegetables',
      link: '/vegetables',
      description: 'Fresh Vegetables',
      image: 'images/vegetables.jpg',
      alt: 'Vegetables',
    },
    {
      id: 2,
      name: 'Fruits',
      link: '/fruits',
      description: 'Fresh Fruits',
      image: 'images/fruits.jpg',
      alt: 'Fruits',
    },
    {
      id: 3,
      name: 'Dairy',
      link: '/dairy',
      description: 'Fresh Dairy Products',
      image: 'images/dairy.jpg',
      alt: 'Dairy',
    },
  ]

  // React.useEffect(() => {
  //   document.body.style.background = 'url(/images/product_bg.jpg) no-repeat'
  //   document.body.style.backgroundSize = 'cover'
  // }, [])

  return (
    <Container className="main" sx={{ margin: '0rem', padding: '0rem' }}>
      <Box
        className="heading"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ marginY: '5rem', padding: '0px' }}
      >
        <Typography variant="h2" color={'white'}>
          Products Section
        </Typography>
        <Typography variant="h4" color={'whitesmoke'}>
          PickUp your products
        </Typography>
      </Box>
      <Grid
        container
        direction={'row'}
        justifyContent={'flex-start'}
        columnSpacing={2}
        sx={{ margin: 0 }}
      >
        {Products.map((items) => (
          <Grid
            item
            key={items.id}
            xs={4}
            sx={{ width: '350px' }}
            component={'a'}
            href={items.link}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={items.image}
                  alt={items.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {items.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {items.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
