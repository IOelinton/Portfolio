import React from "react";
import { Link } from "react-router-dom";

import "../styles/aside.css";

export default function NavBar() {
  return (
    <aside className="navbar">
      <h1 className="navbar-title">Oelinton Araujo</h1>
      <h2 className="navbar-subtitle">Desenvolvedor Web</h2>
      <nav>
        <ul className="navbar-links">
          <li className="cool-link selected">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="cool-link">
            <Link to={`/about`}>Sobre</Link>
          </li>
          <li className="cool-link">
            <Link to={`/skills`}>Skills</Link>
          </li>
          <li className="cool-link">
            <Link to={`/projects`}>Projetos</Link>
          </li>
          <li className="cool-link">
            <Link to={`/contact`}>Contatos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
