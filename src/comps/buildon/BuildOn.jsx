import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./buildon.module.css";

const BuildOn = () => {
  return (
    <section className={styles.builon_section}>
      <Container>
        <Row className={styles.buildon_row}>
          <Col className={styles.buildon_col} sm={7}>
            <h1>Build On</h1>
            <p>
              Venom provides a virtual machine that executes smart contract code
              on the Venom blockchain. It is a Turing complete virtual machine
              like EVM but it is considerably different. Smart contracts in
              Venom give new, more flexible, and controlled flow over the
              execution of application logic. You can start building smart
              contracts with Solidity using our toolchain and development
              guides.
            </p>
            <Button>Start Building</Button>
          </Col>
          <Col className={styles.buildon_col_two} sm={5}>
            <h3> Vibranium Hackathon Now </h3>
            <p>
              Build on Venom and compete for a $225,000 prize pool - Web3, NFTs
              & Gaming | DeFi & Stablecoins | Tools & Infrastructure
            </p>
            <Button className={styles.buildon_btn_two}>Register</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuildOn;
