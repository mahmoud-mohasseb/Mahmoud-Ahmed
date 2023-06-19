import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// Sections
import Blog from "./Blog.js";
import About from "./About.js";
import Intro from "./Intro.js";
import Header from "./Header.js";
import Resume from "./Resume.js";
import Service from "./Service.js";
import Contact from "./Contact.js";
import Portfolio from "./Portfolio.js";
import Testimonial from "./Testimonial.js";
import BlogSinglePost from "./BlogSinglePost.js";
// Components
import Helmet from "./components/Helmet.js";
import Switch from "./components/Switch.js";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const routes = [
  {
    path: "/",
    component: <Intro />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/resume",
    component: <Resume />,
  },
  {
    path: "/service",
    component: <Service />,
  },
  {
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
  {
    path: "/blog/single-post",
    component: <BlogSinglePost />,
  },
  {
    path: "/testimonial",
    component: <Testimonial />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
];

const App = () => {
  // let { path } = useHistory();

  useEffect(() => {
    //seleting skin will change colors of theme skin
    document.documentElement.className = "home-5 skin-5";
    return () => {
      document.documentElement.className = "";
    };
  });

  return (
    <div>
      <Helmet title="🇪🇬🇷🇴 Mahmoud" />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/intro" exact />
        </Route>
        {routes.map((item, index) => (
          <Route key={index} path={`${item.path}`} exact>
            {item.component}
          </Route>
        ))}
      </Switch>
      <div>
        <FloatingWhatsApp
          darkMode={false}
          phoneNumber="+40752 331 545"
          avatar="https://scontent.fcnd1-1.fna.fbcdn.net/v/t1.6435-9/69455862_343263659961158_572450369540456448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=07Dx6bhshGoAX-ZPOAb&_nc_ht=scontent.fcnd1-1.fna&oh=00_AfAGzDX5T380VO2KYh4QHuqwbLkpEQGMHmY3MWtEXQZNtg&oe=64B7F6E1"
          accountName="Mahmoud Ahmed"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </div>
    </div>
  );
};

export default App;
