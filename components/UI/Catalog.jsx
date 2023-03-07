import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/catalog.module.css";
import CatalogItem from "./CatalogItem";

import catalogData from "../data/catalog";

const Catalog = () => {
  const [filter, setFilter] = useState("Andrea Hirata");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Andrea Hirata") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Tere Liye") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Eka Kurniawan") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }



  }, [filter]);

  const active = `${classes.tab_btn_active}`;

  return (
    <section id="Catalog">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <h4 className="mt-4">Product</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab_btns} text-end`}>
              <button
                className={` ${
                  filter === "Andrea Hirata" ? active : ""
                } secondary__btn text-muted`}
                onClick={() => setFilter("Andrea Hirata")}
              >
              <strong>Andrea Hirata</strong>
              </button>
              <button
                className={` ${
                  filter === "Tere Liye" ? active : ""
                } secondary__btn text-muted`}
                onClick={() => setFilter("Tere Liye")}
              >
               <strong>Tere Liye</strong>
              </button>
              <button
                className={` ${
                  filter === "Eka Kurniawan" ? active : ""
                } secondary__btn text-muted`}
                onClick={() => setFilter("Eka Kurniawan")}
              >
                 <strong>Eka Kurniawan</strong>
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <CatalogItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Catalog;
