import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import image9 from "../../public/images/img-09.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="image-09" src={image9} width="900" height="700" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">We&apos;are Novelah</h2>
              <h5 className="mb-4">for goodreads</h5>
              <p>
              Find and read more books you`&apos;`ll love, 
              and keep track of the books you want to read. 
              Be part of the world`&apos;`s largest community of book lovers on Novelah
              </p>
              <div className="mt-5">
                <button className="primary_btn">
                  <Link href="#Catalog">Product</Link>
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
