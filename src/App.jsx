import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Marketplace } from "./components/Marketplace/Marketplace";
import { SpecificCreator } from './components/Marketplace/SpecificCreator'
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { InputForm } from "./form/inputForm";

// const BASE_URL = process.env.REACT_APP_BASE_URL

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            {/* <Features data={landingPageData.Features} /> */}
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            {/* <Gallery data={landingPageData.Gallery}/> */}
            <Testimonials data={landingPageData.Testimonials} />
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={landingPageData.Contact} />
          </div>
        </Route>
        <Route exact path="/marketplace">
          <Marketplace data={landingPageData.Gallery}/>
        </Route>
        <Route exact path="/creator_onboard">
          <InputForm />
        </Route>
        <Route exact path="/marketplace/:id">
          <SpecificCreator />
        </Route>
        <Route exact path="/terms"></Route>
        <Route path="*">
          <div style={{padding: 28}}>
            <p>Error, the page you requested couldnt be found!</p>
            <p>Return to the <a href="/marketplace">marketplace</a></p>
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;
