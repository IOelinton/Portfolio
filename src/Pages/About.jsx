import React from "react";

import perfilPhoto from "../imgs/perfilPhoto.png";

import "../styles/about.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="foto-area">
        <img src={perfilPhoto} alt="foto de perfil" className="photo" />
      </div>
      <div className="title-area">
        <h1>Oelinton Araujo</h1>
        <h2 className="title">Dev Front-end</h2>
      </div>
      <div className="sobre-area">
        <article>
          <p>
            Sou um desenvolvedor Front End apaixonado por criar interfaces web
            dinâmicas e responsivas. Tenho sólidos conhecimentos em tecnologias
            como JavaScript, React, TypeScript, CSS e HTML, além de experiência
            com ferramentas de teste como Jest.
          </p>
          <p>
            Minha abordagem ao desenvolvimento é guiada pela busca constante de
            eficiência e inovação, sempre com foco na experiência do usuário.
            Minha jornada começou na confeitaria, onde aprendi a importância da
            atenção aos detalhes e do trabalho em equipe.
          </p>
          <p>
            Essas habilidades são agora aplicadas no desenvolvimento de soluções
            web eficientes. Com forte capacidade de comunicação e experiência em
            metodologias ágeis como SCRUM e KANBAN, estou preparado para
            colaborar em projetos reais. Atualmente, busco oportunidades que me
            permitam desenvolver e aprender mais sobre a área de front-end. Os
            campos de interesse específicos incluem desenvolvimento web e web
            mobile.
          </p>
        </article>
      </div>
    </div>
  );
}
