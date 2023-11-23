import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Fruits() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/Fruits')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error from axios : ' + error)
      })
  }, [])

  // useEffect(() => {
  //   document.body.style.background =
  //     'url(/images/fruits_background.jpg)'
  //   document.body.style.backgroundSize = 'contain'
  // }, [])

  console.log(data)
  return (
    <Container maxWidth={'xl'}>
      <Box>
        <Typography variant="h1" color={'black'}>
          Fruits
        </Typography>
      </Box>
      <Grid
        container
        direction={'row'}
        columnSpacing={6}
        rowSpacing={2}
        sx={{ marginButtom: '20px' }}
      >
        {data.map((items) => (
          <Grid item key={items.id} xs={3}>
            <Card
              sx={{
                width: '350px',
                height: '370px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  image={items.image_url}
                  alt={items.name}
                  height={160}
                />
                <CardContent>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Box paddingBottom={'15px'}>
                      <Typography variant="h4">{items.name}</Typography>
                      <Typography variant="body1">
                        {items.description}
                      </Typography>
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      sx={{ width: '318px' }}
                    >
                      <Typography variant="h6">
                        ₹{items.price} per kg
                      </Typography>
                      <Typography variant="body2">
                        Available Stock : {items.stock}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
