import React from "react";
import classes from "../../styles/catalog-item.module.css";
import Image from "next/image";
import Link from "next/link";

const CatalogItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.catalog__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.catalog__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.catalog__img}`}>
        <Image alt="catalog-img" src={img} width="380" height="250" />
      </div>
    </div>
  );
};

export default CatalogItem;
