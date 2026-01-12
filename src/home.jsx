import { useState } from "react";
import "./home.css";

function Schools() {
  return (
    <div>
      <h3>
        <u>Schools</u>
      </h3>
      <div>
        <h4>Carnegie Mellon University</h4>
        <p>B.S. in CS</p>
        <ul>
          <li>GPA - :( </li>
          <li>Data Structures, Computer Graphics, Functional Programming</li>
          <li>Real Analysis, Vector Calculus, Matrices/LinAlg</li>
          <li></li>
        </ul>
      </div>
      <div>
        <br></br>
        <h4>University of Wisconsin - Madison</h4>
        <p>High School Early College Credit Program</p>
        <ul>
          <li>GPA - 3.85/4</li>
          <li>
            Intro to Algorithms, Intro to AI,<br></br>Data Structures 1 and 2
          </li>
          <li>Discrete Math, Multivariable Calculus</li>
          <li>Introductory Ecology</li>
        </ul>
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <h3>
        <u>Jobs</u>
      </h3>
      <div>
        <h4>Millenia Ventures - AI Intern</h4>
        <ul></ul>
      </div>
      <div>
        <br></br>
        <h4>YW Apparel - Shopify Frontend Developer Intern</h4>
        <ul>
          <li>Duties: Design landing page</li>
        </ul>
      </div>
      <div>
        <br></br>
        <h4>Art of Problem Solving - Grader/TA</h4>
        <ul>
          <li>Graded hundreds of math writing problems</li>
          <li>
            Assisted and moderated online courses<br></br>(AMC 10/12,
            Prealgebra)
          </li>
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <div>
        <h3>
          <u>Projects</u>
        </h3>
        <h4>This</h4>
      </div>
      <div>
        <br></br>
        <h4>
          <a href="https://www.daemontime.com" target="_blank">
            Daemon Time
          </a>
        </h4>
        <p>PvP Practice Tool for SAT/ACT Math and English</p>
      </div>
    </div>
  );
}

function Unrelated() {
  return (
    <div id="unrelated">
      <a
        href="https://op.gg/lol/summoners/na/IattackUprotect-NA10"
        target="_blank"
      >
        League of Legends
      </a>
      <a href="https://www.nitrotype.com/racer/kevinyiyangsong" target="_blank">
        Nitro Type
      </a>
    </div>
  );
}

function Footer() {
  return <></>;
}

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 id="name">Kevin Yiyang Song</h1>
      <div id="initials">
        My initials are KYS (also my argument after getting chat banned in
        League)
      </div>
      <div id="experience">
        <Schools />
        <Jobs />
        <Projects />
      </div>
      <Unrelated />
      <Footer />
    </>
  );
}

export default Home;
