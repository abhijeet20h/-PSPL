import React from 'react'
import one from './images/1.jpg'
import two from './images/2.jpg'
import thr from './images/3.jpg'

import {
    Container,
    Grid,
    Button,
    Typography,
    Hidden,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,
  } from "@material-ui/core";
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function CardEx() {
  AOS.init({
    duration: 1200,
  })
  return (
        <>
        <div className="bg-gray">
         <Grid container spacing={3} justifyContent="center"  data-aos="fade-right">
        {/* second card */}
        <Grid item sm={3} >
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="278"
                image={one}
                alt="green iguana"
              />
              <CardContent className="cardContent">
                <Typography>
                  <span> Better Service At Low Cost </span>
                </Typography>
                <Typography variant="h6" align="center">
                Psycology{" "}
                </Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, vero.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>{" "}
        {/* Third card */}
        <Grid item sm={3}>
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="278"
                image={two}
                alt="green iguana"
              />
              <CardContent className="cardContent">
                <Typography>
                  <span> Better Service At Low Cost </span>
                </Typography>
                <Typography variant="h6" align="center">
                Dormitory{" "}
                </Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, vero.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>{" "}
        {/* fourth card */}
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="278"
                image={thr}
                alt="green iguana"
              />
              <CardContent className="cardContent">
                <Typography>
                  <span> Better Service At Low Cost </span>
                </Typography>
                <Typography variant="h6" align="center">
                  Germs Protection{" "}
                </Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, vero.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>{" "}
      </Grid>
      </div>
        </>
    )
}
