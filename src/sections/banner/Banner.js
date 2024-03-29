import React from 'react'
import * as Scroll from 'react-scroll';
import { Button, Container, Logo, PhoneIcon, Video } from './styles';
import bannerMP4 from './video/banner.mp4';
import bannerWebm from './video/banner.webm';
import logoPNG from './image/Logo-removebg.png'
import { Tilt } from 'react-tilt';

const Banner = () => {

  const handleAppoinmentButton = () => {
    window.location = `https://api.whatsapp.com/send?phone=573223080409`;
  }

  return (
    <section>
      <Scroll.Element name="home-section">
        <Container>
          <React.Fragment>
            <Tilt className = "z-10">
              <Logo src={logoPNG} />
            </Tilt>
            <Video autoPlay loop muted playsInline>
              <source src={bannerMP4} type="video/mp4" />
              <source src={bannerWebm} type="video/webm" />
            </Video>
            <Scroll.Link to="contact-sesion" smooth duration={1100}>
              <Button aria-label="Button to Contact Section" onClick={handleAppoinmentButton}>
                Make an appointment&nbsp;&nbsp;
                <PhoneIcon />
              </Button>
            </Scroll.Link>
          </React.Fragment>
        </Container>
      </Scroll.Element>
    </section>
  )
}

export default Banner
