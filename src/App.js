import { Routes, Route } from "react-router-dom";
import ContactMe from "./components/contactMe/ContactMe";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
};

export default App;
