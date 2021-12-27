import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-header">
        <h1 className="fw-bold">Full Stack Developer and SEO Consultent</h1>
        <h5>
          I code and rank beautifully simple things, and I love what I do.
        </h5>
      </div>
      <img src="" alt="" />
      <img src="" alt="" />
      <div className="home-mid">
        <h2>Hi, I’m Imtiaz Akib. Nice to meet you.</h2>
        <h5 className="pt-2">
          Since beginning my journey as a developer nearly 2 years ago, I've
          done remote <br /> work for agencies, consulted for startups, and
          collaborated with talented people to <br /> create website for use.
          I'm quietly confident, naturally curious, and <br /> perpetually
          working on improving my skills.
        </h5>
      </div>
      <div className="home-card">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
