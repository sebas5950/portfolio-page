import "./App.css";
import MainPage from "./components/home/MainPage";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Blogs from "./components/blog/Blogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <MainPage />
        <About />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
