import React from "react";
import styles from "./products.module.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../utils/utils";

const Products = () => {
  return (
    <section className={styles.products_section}>
      <h3>Products accessible on Testnet</h3>
      <Container className={styles.products_container}>
        {Product.map((exp, i) => {
          return (
            <Row>
              <Col>
                <Card className={styles.products_card} key={i}>
                  <Card.Body>
                    <Card.Title className={styles.products_title}>{exp.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Website >></Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Products;
