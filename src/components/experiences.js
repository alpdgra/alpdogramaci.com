import React from "react";

export const Experiences = ({ experiences }) => {
  return (
    <section className="experience-timeline section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline__container bd-grid">
        {experiences.map((experience) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
};

const Experience = ({ title, period, company, country, description }) => {
  return (
    <div className="timeline__content">
      <div className="timeline__time">
        <span className="timeline__rounder"></span>
        <span className="timeline__line"></span>
      </div>
      <div className="timeline__data bd-grid">
        <h3 className="timeline__title">{company}</h3>
        <span className="timeline__fade">{period} | {title} <img width="17" src={`https://cdn.jsdelivr.net/npm/country-flag-icons/1x1/${country}.svg`} alt={country}></img></span>
        <span className="timeline__description">{description}</span>
      </div>
    </div>
  );
};