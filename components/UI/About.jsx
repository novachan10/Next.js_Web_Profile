import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img05 from "../../public/images/img-05.jpg";
import img06 from "../../public/images/img-06.jpeg";
import img07 from "../../public/images/img-07.jpeg";
import img08 from "../../public/images/img-08.jpeg";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
        <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img05} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img07} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img08} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img06} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About" />
            <h3 className="mt-4">Fun Fact</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt beatae ratione iusto cum. 
            Doloremque suscipit eius provident error labore est reprehenderit, 
            exercitationem corrupti earum deleniti!
            </p>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default About;
