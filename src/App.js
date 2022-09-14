import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Route path="/">
        <Switch>
          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
