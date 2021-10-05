import './App.css';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box";
import logo from "./images/logo.png";
import back from "./images/back.png";
import sec1 from "./images/crop1.png";
import sec2 from "./images/crop2.png";
import sec3 from "./images/crop3.png";
import sec4 from "./images/crop4.png";
import back2 from "./images/pexels.jpg";
import CardTwo from './CardTwo'
import CardEx from './CardEx';
import Footer from './Footer';
import  { useState } from "react";
import Modal from "react-modal";
import Navbar from './Navbar';
Modal.setAppElement("#root");
function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }


  return (
    <>
      
      {/* Modal  code start */}
    <div className="App">
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <div><form >
      <h4><i>  Please Fill The Form</i> </h4>
      <div class="form-group mt-4">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group mt-3" >
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input mt-4" id="exampleCheck1"/>
        <label class="form-check-label mt-3" for="exampleCheck1" required>Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3" onClick={toggleModal}>Submit</button>
    </form></div>
    </Modal>
  </div>
         {/* Modal  code End */}

      
      {/* header section start */}

  <div className="header-top">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="top-left text-center text-md-left">
          <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
        </div>
      </div>
      <div className="col-md-6">
        <div className="top-right text-center text-md-right">
          <ul className="social-links">
            <li>
              <a href="#" aria-label="facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
             <li>
              <a href="" aria-label="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li> 
            <li>
              <a href="#" aria-label="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="pinterest">
                <i className="fa fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* header section end */}
      

  {/* sub-header start     */}
<div className="sub-header">
<div className="container">
<div className="row">
<div className="col-lg-3 col-md-2"><div className="logo"> <img src={logo} /> </div></div>
<div className="col-lg-6 col-md-8"> 
<ul className="contact-info pl-0 mb-4 mb-md-0">
<li className="item text-left">
  <div className="icon-box">
    <i className="fa fa-envelope"></i>
  </div>
  <strong>Email</strong>
  <br/>
  <a href="mailto:info@medic.com">
    <span>info@medic.com</span>
  </a>
</li>
<li className="item text-left">
  <div className="icon-box">
    <i className="fa fa-phone"></i>
  </div>
  <strong>Call Now</strong>
  <br/>
  <span>+ (88017)-123-4567</span>
</li>
</ul> </div>
<div className="col-lg-3 col-md-2"><div className="link-btn text-center text-lg-right">
<a href="#" className="btn-style-one" onClick={toggleModal} >Appoinment</a>
</div></div>
</div>
</div>
</div>
  {/* sub-header start     */}

      
      {/* Navbar start */}
      <Navbar/>
      {/* Navbar end */}

      {/* background image and content */}
  <div className="backgroundIMG styleBackground slider-item">
    <div className="container ">
    <div className="row ">
      <div className="col-12">
        <div className="content text-center style">
          <h2 className="text-white text-bold mb-2">Our Best Surgeons</h2>
          <p className="tag-text mb-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. vel sunt animi sequi ratione quod at earum .<br/>Quis quos officiis numquam!</p>
          <a href="about.html" className="btn btn-main btn-white" >EXPLORE</a>
        </div>
      </div>
    </div>
  </div>
  </div>

      
    <section className="cta">
      <div className="container">
        <div className="cta-block row no-gutters">
          <div className="col-lg-4 col-md-6 emmergency item">
            <i className="fa fa-phone"></i>
            <h2>Emegency Cases</h2>
            <a href="tel:1-800-700-6200">1-800-700-6200</a>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-lg-4 col-md-6 top-doctor item">
            <i className="fa fa-stethoscope"></i>
            <h2>24 Hour Service</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
              vel eum</p>
            <a href="#" className="btn btn-main">Read more</a>
          </div>
          <div className="col-lg-4 col-md-12 working-time item">
            <h2 className="working-head">Working Hours</h2>
            <ul className="w-hours">
              <li>Mon - Fri - <span>8:00 - 17:00</span></li>
              <li>Mon - Fri - <span>8:00 - 17:00</span></li>
              <li>Mon - Fri - <span>8:00 - 17:00</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="feature-section section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image-content">
              <div className="section-title text-center">
                <h3>Best Features <span>of Our Hospital</span></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis <br/> nam error officia vero tempora alias? Sunt?</p>
              </div>
    
              <div className="row">
                <div className="col-sm-6">
                  <div className="item">
                    <div className="icon-box">
                      <figure>
                        <a href="services.html"><img loading="lazy" src={sec1} alt="features image"/></a>
                      </figure>
                    </div>
                    <h3 className="mb-2">Orthopedics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                      ex sunt, est aspernatur
                      at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <div className="icon-box">
                      <figure>
                        <a href="#">
                          <img loading="lazy" src={sec2} alt="features image"/>
                        </a>
                      </figure>
                    </div>
                    <h3 className="mb-2">Diaginostic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                      ex sunt, est aspernatur
                      at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <div className="icon-box">
                      <figure>
                        <a href="#">
                          <img loading="lazy" src={sec3} alt="features image"/>
                        </a>
                      </figure>
                    </div>
                    <h3 className="mb-2">Psycology</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                      ex sunt, est aspernatur
                      at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <div className="icon-box">
                      <figure>
                        <a href="#">
                          <img loading="lazy" src={sec4} alt="features image"/>
                        </a>
                      </figure>
                    </div>
                    <h3 className="mb-2">General Treatment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
                      ex sunt, est aspernatur
                      at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="service-section bg-gray  section ">
      <div className="container">
        <div className="section-title text-center ">
          <h3>Provided
            <span> Services</span>
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. qui suscipit atque <br/>
            fugiat officia corporis rerum eaque neque totam animi, sapiente culpa. Architecto!</p>
        </div>
        </div>
              {/* first card component  */}
      <CardEx />
      </section>

      

    <section className="service-section bg-gray section">
      <div className="container">
        <div className="section-title text-center">
          <h3>Our Expert 
            <span> Doctors</span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, rerum <br/>
natus nobis deleniti doloremque minima odit voluptatibus ipsam animi?</p>
        </div>
        </div>
             {/*Second card component  */}
    <CardTwo />
    </section>
      
 
      {/* Footer component */}
    <Footer/>

</>
    )
    };

export default App;
