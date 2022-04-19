import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, CardGroup, Carousel } from "react-bootstrap";
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
      {/* card section start */}
      <div className="home-card">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold mb-3">Designer</Card.Title>
              <Card.Text>
                <p className="mb-5">
                  I value simple content structure,
                  <br /> clean design patterns, and thoughtful interactions.
                </p>
                <p className="card-topic-head ms-2">
                  Things I enjoy designing:
                </p>
                <p className="mb-5 ms-1">UX, UI, Web, Mobile, Apps, Logos</p>
                <div className="me-5">
                  <ul className="card-ul">
                    <li className="card-topic-head mb-3">Design Tools:</li>
                    <li>Balsamiq Mockups</li>
                    <li>Figma</li>
                    <li>Invision</li>
                    <li>Marvel</li>
                    <li>Pen & Paper</li>
                    <li>Sketch</li>
                    <li>Webflow</li>
                    <li>Zeplin</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold mb-3">
                Front-end Developer
              </Card.Title>
              <Card.Text>
                <p className="mb-5">
                  I like to code things from scratch, <br /> and enjoy bringing
                  ideas to life in the browser.
                </p>
                <p className="card-topic-head ms-2">Languages I speak:</p>
                <p className="mb-5 ms-1">HTML, Pug, Slim, CSS, Sass, Less</p>
                <div className="me-5">
                  <ul className="card-ul">
                    <li className="card-topic-head mb-3">Dev Tools:</li>
                    <li>Balsamiq Mockups</li>
                    <li>Figma</li>
                    <li>Invision</li>
                    <li>Marvel</li>
                    <li>Pen & Paper</li>
                    <li>Sketch</li>
                    <li>Webflow</li>
                    <li>Zeplin</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold mb-3">Mentor</Card.Title>
              <Card.Text>
                <p className="mb-5">
                  I like to code things from scratch, <br /> and enjoy bringing
                  ideas to life in the browser.
                </p>
                <p className="card-topic-head ms-2">Languages I speak:</p>
                <p className="mb-5 ms-1">HTML, Pug, Slim, CSS, Sass, Less</p>
                <div className="me-5">
                  <ul className="card-ul">
                    <li className="card-topic-head mb-3">Dev Tools:</li>
                    <li>Balsamiq Mockups</li>
                    <li>Figma</li>
                    <li>Invision</li>
                    <li>Marvel</li>
                    <li>Pen & Paper</li>
                    <li>Sketch</li>
                    <li>Webflow</li>
                    <li>Zeplin</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      {/* Recent work section */}
      <div>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">My Recent Work</h2>
          <p>
            Here are a few design projects I've worked on recently. Want to see
            more? Email me.
          </p>
        </div>
        {/* picture animation div */}
        <div className="pic-container">
          <div className="single-work">
            <img src="./image/1.jpg" alt="" />
            <div className="work-description">
              <div className="content">
                <p>
                  High-end, custom residential <br /> renovaters serving <br />{" "}
                  Fraser Valley homeowners.
                </p>
                <button>hello</button>
              </div>
            </div>
          </div>

          <img src="./image/2.jpg" alt="" />
          <img src="./image/3.jpg" alt="" />
        </div>

        <button className="btn-outline">
          <FontAwesomeIcon className="me-3" icon={faCoffee} />
          See more on Dribble
        </button>
      </div>
      {/* Recent work section end */}
      {/* Company section */}
      <div className="mt-5 mb-5">
        <h2 className="text-center">
          I'm proud to have collaborated with some <br /> awesome companies:
        </h2>
        <div></div>
      </div>
      {/* company section end */}
      <div className="home-mid-second">
        <h2>Hi, I’m Imtiaz Akib. Nice to meet you.</h2>
        <h5 className="pt-2">
          Since beginning my journey as a developer nearly 2 years ago, I've
          done remote <br /> work for agencies, consulted for startups, and
          collaborated with talented people to <br /> create website for use.
          I'm quietly confident, naturally curious, and <br /> perpetually
          working on improving my skills.
        </h5>
      </div>
      <div className="home-card-second-container">
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
        <div className="home-card-second">
          <img src="" alt="" />
          <p>
            Next level plug and play chassis systems for custom do-it-yourself
            lightsaber builds.
          </p>
          <a href="">www.jdnfk.com</a>
        </div>
      </div>
      <div className="border-bottom">
        <div className="text-center mb-5">
          <h4 className="fw-bold mb-3">
            Interested in collaborating or investing?
          </h4>
          <p>
            I’m always open to discussing product design work or partnership
            opportunities.
          </p>
        </div>
        <button className="btn-outline mb-5">See more on Dribble</button>
      </div>
      {/* testimonial section */}
      <div>
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold mb-3">Testimonials</h2>
          <p>People I've worked with have said some nice things...</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
