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
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">Fun Fact</h3>
            <p>
            Bisa Baca Usia 3, 5 Tahun, Lancar Menulis Umur 4 Tahunan .Well Aku Sekarang Udah Gede Udah Bisa Ngomong Lancar Walaupun Kadang-Kadang Sedikit Belibet Sih. Kenalin Aku Nova Anak Pertama Dari 3 Bersaudara, Sekarang Aku Sekolah Di SMK TELKOM MALANG. Ada Funfact Tentang Diriku Yang Agak Bikin Kalian Tercengang Dan Pasti Saya Tidak Merekomendasikan Kelebihan Ini Buat Anak-Anak Lainnya. Aku Itu Punya Kecendrungan Baca Dengan Cara Skimming. Alias Baca Super Cepat Tapi Sering Keliru. Contohnya Gini, Ada Yang Tahu Majalah Bobo Kan Ada Tuh Cerita Bergambar Paman Kikuk, Husin Dan Anjingnya. Inget Ga, Siapa Nama Anjingnya? Ya! ASTA Kan?? .Saya Bacanya Selama Bertahun-Tahun Sampai Naik Smp, Baru Ngeh Kalau Nama Anjingnya Itu Bukan ATAS. Nangis, Kalo Keinget Sampe Sekarang Tuh Rasanya Malu Banget


            </p>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default About;
