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

const Education = ({ title, period, institution, country, description, additionalInfo }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="timeline__content">
      <div className="timeline__time">
        <span className="timeline__rounder"></span>
        <span className="timeline__line"></span>
      </div>
      <div className="timeline__data bd-grid">
        <h3 className="timeline__title">
          {title}
          {additionalInfo && additionalInfo.length > 0 && (
            <button
              type="button"
              onClick={() => setShowResults(!showResults)}
              className="timeline__info-button"
              aria-expanded={showResults}
              aria-label={showResults ? "Hide additional information" : "Show additional information"}
            >
              <i className="bx bx-info-square" aria-hidden="true"></i>
            </button>
          )}
        </h3>
        
        {showResults && additionalInfo && (
          <div 
            className="timeline__fade timeline__additional-info"
            role="region"
            aria-label="Additional education information"
          >
            {additionalInfo.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>
        )}

        <div className="timeline__institution">
          <span className="timeline__fade">
            {period} | {institution}
            {country && (
              <img 
                width="17" 
                height="17"
                src={`https://cdn.jsdelivr.net/npm/country-flag-icons/1x1/${country}.svg`} 
                alt={`Flag of ${country}`}
                className="timeline__country-flag"
              />
            )}
          </span>
        </div>
        
        <span className="timeline__description">{description}</span>
      </div>
    </div>
  );
};

export default Educations;