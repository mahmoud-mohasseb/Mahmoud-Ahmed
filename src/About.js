import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
  return (
    <section className="section section-about section-about-1">
      <div className="display-spacing">
        <Container>
          <Row>
            <Hidden xs sm md>
              <Col lg={5}>
                <div className="about-image">
                  <div
                    className="image overlay-image"
                    style={{
                      backgroundImage: `url(/assets/images/about/5-1.jpg)`,
                    }}
                  ></div>
                </div>
              </Col>
            </Hidden>
            <Col lg={7}>
              <div className="about-content">
                <header className="el-heading">
                  <h2 className="el-icon">
                    <span className="el-icon-title">ABOUT ME</span>
                  </h2>
                  <h3>
                    <span>Hello, I am Mahmoud Ahmed .</span>
                  </h3>
                  <div className="divider divider-1"></div>
                  <p>
                    👨‍💻 A passionate Full Stack Software Developer 🚀 having an
                    experience of building Web and Mobile applications with
                    JavaScript / Reactjs / Nodejs / React Native /Flutter .
                  </p>
                </header>
                <Row className="pt-30">
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-ruler-pencil"></span>
                      </div>
                      <div className="content">
                        <h5>React Native developer</h5>
                        <p>
                          create well-structured front-end architecture, APIs,
                          and can also write reusable, and scalable JavaScript
                          codes mobile apps
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-image"></span>
                      </div>
                      <div className="content">
                        <h5>FrontEnd Developer</h5>
                        <p>
                          responsible for the design and implementation of user
                          interfaces (UIs) and UI components using React, a
                          front-end JavaScript library. develop and maintain UIs
                          for web app .
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-brush-alt"></span>
                      </div>
                      <div className="content">
                        <h5>Backend Developer</h5>
                        <p>
                          Node. js developer deploy and maintain network
                          applications. manage the exchange of data between
                          servers and users, develop back-end components, and
                          connect applications with other web services. also
                          support front-end developers by integrating web-based
                          applications .
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-ruler-pencil"></span>
                      </div>
                      <div className="content">
                        <h5>Flutter Developer</h5>
                        <p>
                          Responsible for running and designing product
                          application features across multiple devices across
                          platforms. Flutter is Google's UI toolkit for building
                          beautiful, natively compiled apps for mobile, web, and
                          desktop from a single codebase.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-ruler-pencil"></span>
                      </div>
                      <div className="content">
                        <h5>wordpress Customizer</h5>
                        <p>
                          allows users to modify and configure theme options,
                          whilst also providing them with a live-preview of
                          those changes. Cutomize built to provide theme
                          developers with a standard interface could use when
                          providing customisation options within their theme .
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="el-card-icon">
                      <div className="el-icon">
                        <span className="el-icon-icon ti-mobile"></span>
                      </div>
                      <div className="content">
                        <h5>Marketing Online</h5>
                        <p>
                          developing, implementing, and managing marketing
                          campaigns that promote a company and its products
                          and/or services. play a major role in enhancing brand
                          awareness within the digital space as well as driving
                          website traffic and acquiring leads/customers .
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
