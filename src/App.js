import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div class="container-medium">
        <NavBar />
      </div>
        <div class="d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
