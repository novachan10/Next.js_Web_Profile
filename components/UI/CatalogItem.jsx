import React from "react";
import classes from "../../styles/catalog-item.module.css";
import Image from "next/image";
import Link from "next/link";

const CatalogItem = (props) => {
  const {id, title, img, keyword} = props.item;
  return (
    <div className={`${classes.catalog_item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.catalog_keyword}`} key={index}>
            {item}
          </span>
        ))}
        
      </div>

      <div className={`${classes.catalog_img}`}>
        <Image alt="catalog-img" src={img} width="400" height="450" />
      
      </div>

      <div className={`${classes.catalog_btn} bg-transparent`}>
        <button className="primary_btn">
          <Link href={`/${id}`}>Beli</Link>
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;