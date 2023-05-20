import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./howitworks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howitworks_section}>
      <h2>How It Works</h2>
      <Container className={styles.howitworks_container}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className={styles.howitworks_card}>
              <Card.Body className={styles.howitworks_cardbody}>
              <div className={styles.card_title}>
                  <h1>1</h1>
                  <h3>Install Vibranium Wallet</h3>
                </div>
                <Button className={styles.howitworks_btn}>Install</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className={styles.howitworks_card}>
              <Card.Body className={styles.howitworks_cardbody}>
                <div className={styles.card_title}>
                  <h1>2</h1>
                  <h3>Get VFC tokens</h3>
                </div>
                <Button className={styles.howitworks_btn}>Start Testnet</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className={styles.howitworks_card}>
              <Card.Body className={styles.howitworks_cardbody}>
              <div className={styles.card_title}>
                  <h1>3</h1>
                  <h3>Test dApps and earn NFTs</h3>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
