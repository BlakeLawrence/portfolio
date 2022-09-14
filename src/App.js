import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectCleanup from "./pages/ProjectCleanup";
import Squatify from "./pages/Squatify";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </Route>
        <Route path="/cleanup">
          <ProjectCleanup />
        </Route>
        <Route path="/squatify">
          <Squatify />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
