import React from "react";
import styles from "./landing.module.css"
import { Col, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landing_container}>
        <h3>Vibranium Protocol</h3>
        <p>
          Vibranum Protocol welcomes all Web 3.0 users to join in the testing network and
          products developed on our blockchain.
        </p>
        <h1 style={{maxWidth:"400px"}}>Join the Testnet of Venom Blockchain</h1>
      </div>
      <Container className={styles.testnet_transactons}>
        <Row>
            <Col>
            <h1>874,137</h1>
            <p>Testnet Transactions</p>
            </Col>
            <Col>
            <h1>89,869</h1>
            <p>Accounts (smart contracts)</p>
            </Col>
            <Col>
            <h1>25,456</h1>
            <p>Wallets</p>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
