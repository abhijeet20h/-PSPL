import React from 'react'
import one from './images/doctor-2.jpg'
import two from './images/doctor-lab-3.jpg'
import thr from './images/event-2.jpg'
import './App.css';

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
  import Modal from "react-modal";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  Modal.setAppElement("#root");
  
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.85)"
    },
    content: {
      position: "absolute",
      top: "5rem",
      left: "5rem",
      right: "5rem",
      bottom: "5rem",
      backgroundColor: "paleturquoise",
      borderRadius: "1rem",
      padding: "1.5rem"
    }
  };
  
export default function CardTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  AOS.init({
    duration: 1200,
  })
    return (
       <>
<div className="bg-gray">
       <div>
       <Modal isOpen={modalIsOpen} style={modalStyle}>
         <button onClick={() => setIsOpen(false)}  className="btn btn-danger">Close </button>
       </Modal>
     </div>
       <Grid container spacing={3} justifyContent="center" data-aos="fade-right">
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
                <Typography variant="h6" align="center">
                  Dr . Robert Barrethion{" "}
                </Typography>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos, aspernatur.
                </p>
                <a href="#">
                  {" "}
                  <button className="btn btn-main" onClick={() => setIsOpen(true)}>Book Appointment</button>
                </a>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>{" "}
        {/* Third card */}
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="278"
                image={two}
                alt="green iguana"
              />
              <CardContent className="cardContent">
                <Typography variant="h6" align="center">
                  DR. MARRY LOU{" "}
                </Typography>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos, aspernatur.
                </p>
                <a href="#">
                  {" "}
                  <button className="btn btn-main" onClick={() => setIsOpen(true)}>Book Appointment</button>
                </a>
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
                <Typography variant="h6" align="center">
                  DR. SANSA STARK{" "}
                </Typography>{" "}
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos, aspernatur.
                </p>
                <a href="#">
                  {" "}
                  <button className="btn btn-main" onClick={() => setIsOpen(true)}>Book Appointment</button>
                </a>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>{" "}
      </Grid>
      </div>
       </>
    )
}

