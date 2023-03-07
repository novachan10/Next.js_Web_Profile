import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import image4 from "../../public/images/img-04.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="image-4" src={image4} width="400" height="550" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Nova Chandra</h2>
              <h5 className="mb-4">FrontEnd Developer</h5>
              <p>
                Halo kenalin aku Nova dari SMk Telkom Malang jurusan Rekayasa Perangkat lunak 
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://instagram.com/novaadrr?igshid=NmE0MzVhZDY=">Instagram</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
