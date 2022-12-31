import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
