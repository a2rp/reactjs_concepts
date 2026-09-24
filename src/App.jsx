import React from "react";
import { FiArrowRight, FiBookOpen, FiCode, FiCoffee, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import "./index.css";

const concepts = [
  ["Components", "Build focused UI pieces that are easy to compose and reuse.", FiBookOpen],
  ["JSX", "Describe interface structure with familiar JavaScript expressions.", FiCode],
  ["State", "Keep changing values predictable and close to the UI that owns them.", FiHeart],
  ["Props", "Pass clear data and behavior between related components.", FiArrowRight],
];

const links = [
  ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
  ["GitHub", "https://github.com/a2rp", FiGithub],
  ["CodePen", "https://codepen.io/ash1198", FiCode],
  ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
  ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
  ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
  ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
  ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
  ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
  ["Patreon", "https://patreon.com/a2rp", FiHeart],
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="React concepts home"><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" /><span><small>A2RP</small>React Concepts</span></a>
        <a className="header-link" href="#concepts">Explore concepts <FiArrowRight /></a>
      </header>
      <main id="top" className="page-content">
        <section className="hero">
          <p className="eyebrow">Frontend foundations</p>
          <h1>Learn React one clear idea at a time.</h1>
          <p>A small, focused starting point for exploring the building blocks behind modern React interfaces.</p>
          <a className="primary-link" href="#concepts">Browse the concepts <FiArrowRight /></a>
        </section>
        <section id="concepts" className="concept-grid" aria-label="React concepts">
          {concepts.map(([title, description, Icon], index) => <article className="concept-card" key={title}><span className="card-number">0{index + 1}</span><span className="card-icon">{React.createElement(Icon)}</span><h2>{title}</h2><p>{description}</p></article>)}
        </section>
        <section className="next-step"><div><p className="eyebrow">Keep building</p><h2>Good interfaces start with understandable fundamentals.</h2></div><FiArrowRight aria-hidden="true" /></section>
      </main>
      <footer className="site-footer"><div className="footer-main"><span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span><div className="footer-links">{links.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{React.createElement(Icon)}</a>)}</div></div></footer>
    </div>
  );
}
export default App;
