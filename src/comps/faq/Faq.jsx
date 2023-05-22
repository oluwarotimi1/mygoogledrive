import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Questions } from "../utils/utils";
import styles from './faq.module.css'

const Faq = () => {
  return (
    <Container className={styles.faq_container} >
      <h3>FAQ</h3>
      {Questions.map((exp, i) => {
        return (
          <Accordion  key={i}>
            <Accordion.Item >
              <Accordion.Header className={styles.faq_header}>
                {exp.question}
              </Accordion.Header>
              <Accordion.Body className={styles.faq_answer}>
                {exp.answer}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default Faq;
