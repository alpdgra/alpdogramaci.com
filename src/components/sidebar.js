import React from "react";
import { Icon } from "./icon";
import { Reveal } from "./reveal";

export const Sidebar = ({
  image,
  name,
  occupation,
  location,
  email,
  toggleTheme,
  theme,
  aboutLabel,
  about,
  skillsLabel,
  skills = [],
  interestsLabel,
  interests = [],
  socialLabel,
  socials = [],
}) => {
  return (
    <Reveal as="aside" className="card sidebar" id="profile">
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
      </button>

      <header className="identity">
        <img
          className="identity__avatar"
          src={image}
          alt={name}
          width="116"
          height="116"
        />
        <h1 className="identity__name">{name}</h1>
        {occupation && <p className="identity__headline">{occupation}</p>}
      </header>

      <ul className="contact">
        {location && (
          <li className="contact__item">
            <span>
              <Icon name="location" size={17} />
              {location}
            </span>
          </li>
        )}
        {email && (
          <li className="contact__item">
            <a href={`mailto:${email}`}>
              <Icon name="mail" size={17} />
              {email}
            </a>
          </li>
        )}
        <li className="contact__item contact__item--action">
          {/* The print stylesheet turns this page into the CV itself, so
              there is no separate PDF file to fall out of date. */}
          <button type="button" onClick={() => window.print()}>
            <Icon name="download" size={17} />
            Save as PDF
          </button>
        </li>
      </ul>

      {about && (
        <section>
          <h2 className="panel__title">{aboutLabel}</h2>
          <p className="panel__text">{about}</p>
        </section>
      )}

      {skills.length > 0 && (
        <section id="skills">
          <h2 className="panel__title">{skillsLabel}</h2>
          <ul className="chips">
            {skills.map((skill) => (
              <li className="chip" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {interests.length > 0 && (
        <section>
          <h2 className="panel__title">{interestsLabel}</h2>
          <ul className="chips">
            {interests.map((interest) => (
              <li className="chip" key={interest}>
                {interest}
              </li>
            ))}
          </ul>
        </section>
      )}

      {socials.length > 0 && (
        <section>
          <h2 className="panel__title">{socialLabel}</h2>
          <div className="socials">
            {socials.map(({ label, name: key, url, icon }) => (
              <a
                key={key}
                className="social"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={icon} size={17} />
                {label}
              </a>
            ))}
          </div>
        </section>
      )}
    </Reveal>
  );
};
