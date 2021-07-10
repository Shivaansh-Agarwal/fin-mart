import React from "react";
import styles from "./styles/ProductInformation.module.css";

export const ProductInformation = ({
  productOverview,
  aboutTheAuthor,
  additionalDetails,
}) => {
  return (
    <div className={styles.product__information}>
      <ProductSectionPara
        sectionHeading="Book Overview"
        paraList={productOverview}
      />
      <ProductSectionPara
        sectionHeading="About The Author"
        paraList={aboutTheAuthor}
      />
      <ProductSectionList additionalDetails={additionalDetails} />
    </div>
  );
};

const ProductSectionPara = ({ sectionHeading, paraList }) => {
  return (
    <section>
      <h1 className={styles["section--heading"]}>{sectionHeading}</h1>
      <div>
        {paraList.map((para, index) => (
          <p key={index} className={styles.productSectionPara}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

const ProductSectionList = ({ additionalDetails }) => {
  const {
    author,
    countryOfOrigin,
    dimensions,
    isbn10,
    isbn13,
    language,
    pages,
    publisher,
    weight,
  } = additionalDetails;
  return (
    <section className={styles}>
      <h1 className={styles["section--heading"]}>Book Details</h1>
      <ul className={styles.productDetailsList}>
        <ListItem title="Author: " value={author} />
        <ListItem title="Country of Origin: " value={countryOfOrigin} />
        <ListItem title="Dimensions: " value={dimensions} />
        <ListItem title="ISBN10: " value={isbn10} />
        <ListItem title="ISBN13: " value={isbn13} />
        <ListItem title="Lamguage: " value={language} />
        <ListItem title="Pages: " value={pages} />
        <ListItem title="Publisher: " value={publisher} />
        <ListItem title="Weight: " value={weight} />
      </ul>
    </section>
  );
};

const ListItem = ({ title, value }) => {
  return (
    <li className={styles["list-item-nobullet"]}>
      <span className={styles["text-bold"]}>{title}</span> {value}
    </li>
  );
};
