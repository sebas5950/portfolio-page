import "./about.css";
import Js from "../../assets/js.png";
import CSS from "../../assets/css-3.png";
import HTML from "../../assets/html-5.png";
import Python from "../../assets/python.png";
import image from "../../assets/React.png";
import Ruby from "../../assets/ruby.png";
import SQL from "../../assets/SQL.png"
import typescript from "../../assets/postgre.png"
import rails from "../../assets/Rails.png"
import bootstrap from "../../assets/bootstrap.png"
const About = () => {
  return (
    <section className="about section" id="about">
      <div>
        <h1>About Me</h1>
        <p>
          Hey! My name is Alex, a Full-Stack Software Engineer who enjoys the
          challenge and the opportunity for continuous learning that programming
          entails.
        </p>
        <h2>Skills</h2>
        <img src={Js} alt="Js Icon" />
        <h3>JavaScript</h3>
        <img src={CSS} alt="CSS Icon" />
        <h3>CSS</h3>
        <img src={HTML} alt="HTML Icon" />
        <h3>HTML</h3>
        <img src={image} alt="React Icon" />
        <h3>React</h3>
        <img src={Python} alt="Python Icon" />
        <h3>Python</h3>
        <img src={Ruby} alt="Ruby Icon" />
        <h3>Ruby</h3>
        <img src={rails} alt="Rails Icon"/>
        <h3>Ruby on Rails</h3>
        <img src={typescript} alt="Typescript Icon"/>
        <h3>Typescript</h3>
        <img src={bootstrap} alt="Bootstrap Icon" />
        <h3>Bootstrap</h3>
        <img src={SQL} alt="SQL Icon"  />
      </div>
    </section>
  );
};

export default About;
