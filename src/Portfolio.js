import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "./components/Headline";

const portfolio = [
  {
    name: "All Works",
    items: [
      {
        id: 0,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "MERN develop",
        src: "/assets/images/portfolio/clonemusic.png",
        thumbnail: "/assets/images/portfolio/clonemusic.png",
      },
      {
        id: 1,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/dashboard.png",
        thumbnail: "/assets/images/portfolio/dashboard.png",
      },
      {
        id: 2,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/dashboard1.png",
        thumbnail: "/assets/images/portfolio/dashboard1.png",
      },
      {
        id: 3,
        title: "Crearive Design",
        subtitle: "Web Design",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/dashboard2.png",
        thumbnail: "/assets/images/portfolio/dashboard2.png",
      },
      {
        id: 4,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/movies.png",
        thumbnail: "/assets/images/portfolio/movies.png",
      },
      {
        id: 5,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/NFT.png",
        thumbnail: "/assets/images/portfolio/NFT.png",
      },
      {
        id: 6,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/pathfinder.png",
        thumbnail: "/assets/images/portfolio/pathfinder.png",
      },
      {
        id: 7,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/saahmi.png",
        thumbnail: "/assets/images/portfolio/saahmi.png",
      },
      {
        id: 8,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/tradingwolf2.png",
        thumbnail: "/assets/images/portfolio/tradingwolf2.png",
      },
      {
        id: 9,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/tradingwolf.png",
        thumbnail: "/assets/images/portfolio/tradingwolf.png",
      },
      {
        id: 9,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/Uber.jpg",
        thumbnail: "/assets/images/portfolio/Uber.jpg",
      },
    ],
  },
  {
    name: "Web Apps",
    items: [
      {
        id: 2,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/dashboard1.png",
        thumbnail: "/assets/images/portfolio/dashboard1.png",
      },
      {
        id: 3,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/dashboard2.png",
        thumbnail: "/assets/images/portfolio/dashboard2.png",
      },
      {
        id: 5,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/NFT.png",
        thumbnail: "/assets/images/portfolio/NFT.png",
      },
      {
        id: 8,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/tradingwolf2.png",
        thumbnail: "/assets/images/portfolio/tradingwolf2.png",
      },
      {
        id: 9,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/tradingwolf.png",
        thumbnail: "/assets/images/portfolio/tradingwolf.png",
      },
    ],
  },
  {
    name: "Mobile Apps",
    items: [
      {
        id: 0,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "MERN develop",
        src: "/assets/images/portfolio/clonemusic.png",
        thumbnail: "/assets/images/portfolio/clonemusic.png",
      },
      {
        id: 9,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/Uber.jpg",
        thumbnail: "/assets/images/portfolio/Uber.jpg",
      },
    ],
  },
  {
    name: "Wordpress App",
    items: [
      {
        id: 6,
        title: "pathfinder",
        subtitle: "Wordpress customize",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/pathfinder.png",
        thumbnail: "/assets/images/portfolio/pathfinder.png",
      },

      {
        id: 7,
        title: "Saahmi",
        subtitle: "Wordpress customize",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/saahmi.png",
        thumbnail: "/assets/images/portfolio/saahmi.png",
      },
    ],
  },
];

const images = [
  {
    src: "/assets/images/portfolio/clonemusic.png",
  },
  {
    src: "/assets/images/portfolio/dashboard.png",
  },
  {
    src: "/assets/images/portfolio/dashboard1.png",
  },
  {
    src: "/assets/images/portfolio/dashboard2.png",
  },
  {
    src: "/assets/images/portfolio/movies.png",
  },
  {
    src: "/assets/images/portfolio/NFT.png",
  },
  {
    src: "/assets/images/portfolio/pathfinder.png",
  },
  {
    src: "/assets/images/portfolio/saahmi.png",
  },
  {
    src: "/assets/images/portfolio/tradingwolf2.png",
  },
  {
    src: "/assets/images/portfolio/Uber.jpg",
  },
];

function Portfolio() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxIsOpen(!lightboxIsOpen);
  };

  return (
    <section className="section section-portfolio section-portfolio-1">
      <div className="display-spacing">
        <Container className="container">
          <Headline
            label="Portfolio"
            title="Let's See My Work"
            divider_1={true}
            position="center"
          />
          <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
            <TabList className="el-tabs-links">
              {portfolio.map((category, categoryIndex) => (
                <Tab key={categoryIndex}>{category.name}</Tab>
              ))}
            </TabList>
            {portfolio.map((category, categoryIndex) => (
              <TabPanel key={categoryIndex}>
                <Row className="row-center mb--30">
                  {category.items.map((item, index) => (
                    <Col
                      key={index}
                      xs={6}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      onClick={() => toggleLightbox(item.id)}
                    >
                      <div className="portfolio-item">
                        <div className="portfolio-card">
                          <div
                            className="image overlay-image"
                            style={{ backgroundImage: `url(${item.src})` }}
                          />
                          <div className="content">
                            <button className="button button-circle button-icon button-circle-md button-primary">
                              <span className="el-icon-icon ti-fullscreen"></span>
                            </button>
                            <span>{item.title}</span>
                            <h3>{item.subtitle}</h3>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPanel>
            ))}
          </Tabs>
        </Container>
        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
}

export default Portfolio;
