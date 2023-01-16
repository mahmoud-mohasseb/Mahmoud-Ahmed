import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="section section-contact section-contact-1">
      <div className="display-spacing">
        <Container>
          <Row>
            <Hidden xs sm md>
              <Col lg={5}>
                <div className="contact-image">
                  <div
                    className="image overlay-image"
                    style={{
                      backgroundImage: `url(/assets/images/contact/5-1.jpg)`,
                    }}
                  ></div>
                </div>
              </Col>
            </Hidden>
            <Col lg={7}>
              <div className="contact-content">
                <header className="el-heading">
                  <h2 className="el-icon">
                    <span className="el-icon-title">CONTACT ME</span>
                  </h2>
                  <h3>
                    <span>Get in touch.</span>
                    <br />
                  </h3>
                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 20 }}
                  >
                    <a href="https://www.upwork.com/workwith/mahmouda72">
                      <p>UpWork</p>
                    </a>
                    <a href="https://www.fiverr.com/mahmoudahmed668?up_rollout=true">
                      <p>Fiverr</p>
                    </a>
                  </div>
                  <div className="divider divider-1"></div>
                  <p>
                    If you are looking for a MERN stack developer and React
                    native , then welcome, you are in the right place. Just let
                    me know about your requirements, and then I will get into it
                    and start work on it . I have excellent working experience -
                    React Native 🔥 - ReactJs 🚀 -React query 🤖 - React Hooks
                    👍 - Redux toolkit 👾 - Redux RTK 🎃 - Bootstrap ☀️ - Rest
                    API 🌈 - Responsive Web design (RWD) 💥 - Sass⚡️ - Firebase
                    (Auth, Realtime DB, Storage, FCM, Dynamic links ...) 📱 -
                    NodeJs 👁 - ExpressJs❄️ - MongoDb 👨🏼‍💻 - SocketIO 💬 - Git /
                    GitLab / GitHub 🧞‍♂️ - CI/CD🪂 - Heroku 🕶 - Netlify 🐯
                  </p>
                </header>
                <form className="form form-1 pt-15">
                  <Row className="row">
                    <Col xs={12} sm={12} md={6}>
                      <div className="form-item">
                        <input type="text" id="form-item-name" />
                        <label htmlFor="form-item-name">Your Name</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <div className="form-item">
                        <input type="email" id="form-item-email" />
                        <label htmlFor="form-item-email">Your Email</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <div className="form-item">
                        <textarea id="form-item-message"></textarea>
                        <label htmlFor="form-item-message">Your Message</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <button className="button button-md button-primary">
                        Send Message
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
