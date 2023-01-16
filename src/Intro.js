import React from "react";
// import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import ReactRotatingText from "react-rotating-text";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

function Intro() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(/assets/images/blog/5-1.jpg)` }}
      className="section section-hero section-hero-5 overlay-image"
    >
      <Particles
        className="el-particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 50,
          interactivity: {
            events: {
              //   onClick: {
              //     enable: true,
              //     mode: "push",
              //   },
              //   onHover: {
              //     enable: true,
              //     mode: "repulse",
              //   },
              //   resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="display-center">
        <Container>
          <div className="el-heading">
            <h1>
              I'm a{" "}
              <ReactRotatingText
                items={[
                  `MERN Developer.`,
                  `React native , Reactjs, Flutter Developer.`,
                  `Backend Nodejs Mongodb Developer.`,
                  `🤖 Web Developer.`,
                ]}
              />
              <br />
              I create Websites and Mobile Applications .
              <br />
              Based in Brașov, Romania.
            </h1>
            <div style={{ display: "flex" }}>
              <div className="el-icon">
                <p className="el-icon-title">
                  About Me
                  <Link to={`./about`}>
                    <span className="icon ti-arrow-down" />
                  </Link>
                </p>
              </div>
              <div className="el-icon" style={{ marginLeft: 20 }}>
                <p className="el-icon-title">
                  CV Download
                  <a href={`/assets/MahmoudAhmed.pdf`} download>
                    <span className="icon ti-download" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Intro;
