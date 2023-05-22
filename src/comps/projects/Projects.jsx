import React from "react";
import styles from "./projects.module.css";
import { ComingSoon } from "../utils/utils";
import { Card, Col, Container, Row } from "react-bootstrap";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className={styles.projects_section} >
      <Container>
        <div>
          <h3>Projects Undergoing Maitenance</h3>
          <p>Stay tuned for their return to the testnet shortly</p>
          <Card style={{ width: "18rem" }} className={styles.projects_card}>
            <Card.Body>
              <Card.Title className={styles.projects_title}>Vibranium Pools</Card.Title>
              <Card.Text className={styles.project_text}>
              Stake your VENOM on validator nodes using Venom Pools.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <section>
      <h3 style={{padding:'2rem'}}>Coming Soon</h3>
        <Container className={styles.projects_container}>
        
          {ComingSoon.map((pro, i) => {
            return (
              <Row>
                <Col>
                  <Card  className={styles.projects_card} key={i}>
                    <Card.Body>
                      <Card.Title className={styles.projects_title}>
                        {pro.name}
                      </Card.Title>
                      <Card.Text className={styles.project_text}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Link to="/">Website <BsArrowRight className={styles.website_icon} /> </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    </section>
  );
};

export default Projects;
