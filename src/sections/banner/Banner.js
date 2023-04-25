import React from 'react'
import * as Scroll from 'react-scroll';
import { Button, Container, Logo, PhoneIcon, Video } from './styles';
const Banner = () => {
  return (
    <section>
      <Scroll.Element name="home-section">
        <Container>
          <React.Fragment>
            <Logo src="https://thelogocompany.net/wp-content/uploads/2022/03/tattoogear-tattoo8.png" />
            <Video autoPlay muted loop>
              <source src="/video/banner.mp4" type="video/mp4" />
            </Video>
            <Scroll.Link to="contact-sesion" smooth duration={1100}>
              <Button aria-label="Button to Contact Section">
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
