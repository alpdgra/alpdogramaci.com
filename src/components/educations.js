import React, { useState } from "react";

export const Educations = ({ educations }) => {
  return (
    <section className="education-timeline section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline__container bd-grid">
        {educations.map((education) => (
          <Education key={education.title} {...education} />
        ))}
      </div>
    </section>
  );
};

const Education = ({ title, period, institution, country, description, additionalInfo}) => {
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="timeline__content">
      <div className="timeline__time">
        <span className="timeline__rounder"></span>
        <span className="timeline__line"></span>
      </div>
      <div className="timeline__data bd-grid">
        <h3 className="timeline__title">{title}&nbsp;
          <a onClick={() => showResults ? setShowResults(false) : setShowResults(true)}><i className={`bx bx-info-square`}></i></a>
          {showResults &&
          <div className="timeline__fade">
            <br></br>
            {additionalInfo.map((info) => (
              <p>{info}</p>
            ))}
          </div>}
        </h3> 
        <span className="timeline__fade">{period} | {institution} <img width="17" src={`https://cdn.jsdelivr.net/npm/country-flag-icons/1x1/${country}.svg`} alt={country}></img></span>
        <span className="timeline__description">{description}</span>
      </div>
    </div>
  );
};