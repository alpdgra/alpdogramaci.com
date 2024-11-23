import React from "react";

export const Projects = ({ projects }) => {
  return (
    <section className="projects-timeline section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="timeline__container bd-grid">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description, url }) => {
  return (
    <div className="timeline__content">
      <div className="timeline__time">
        <span className="timeline__rounder"></span>
        <span className="timeline__line"></span>
      </div>
      <div className="timeline__data bd-grid">
        <h3 className="timeline__title">{name} &nbsp;
            <a href={url} target="_blank" rel="noreferrer" className="social__link"><i className={`bx bx-link-external`}></i></a>
        </h3>
        <span className="timeline__fade">{period} | {company}</span>
        <span className="timeline__description">{description}</span>
      </div>
    </div>
  );
};