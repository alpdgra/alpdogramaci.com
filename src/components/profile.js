import React from "react";
import { Options } from "./options";

export const Profile = ({
  image,
  name,
  occupation,
  location,
  email,
  phone,
  profileLabel,
  profile,
  skillsLabel,
  interestsLabel,
  skills,
  interests,
  socialLabel,
  socials
}) => {
  return (
    <section>
      <section className="profile" id="home">
        <div className="profile__container section bd-grid">
          <div className="profile__data bd-grid">
            <img src={image} alt="profile_image" className="profile__img"/>
            <h1 className="profile__title">
              <strong>{name}</strong>
            </h1>
            <h3 className="profile__profession">{occupation}</h3>
          </div>

          <div className="profile__address bd-grid">
            <span className="profile__information">
              <i className="bx bx-map profile__icon"/> {location}
            </span>
            <span className="profile__information">
              <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}><i className="bx bx-envelope profile__icon"/> {email}</a>
            </span>
            {/* <span className="profile__information">
              <i className="bx bx-phone profile__icon"/> {phone}
            </span> */}
            <span className="profile__information">
            <a href="/resume.pdf" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}><i className="bx bx-file profile__icon"/>PDF CV</a>
            </span>
          </div>
        </div>
        <Options/>
      </section>

      <section className="profile section" id="profile">
        <h2 className="section-title">{profileLabel}</h2>
        <p className="profile__description">{profile}</p>
      </section>

      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{skillsLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {skills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>

      <section className="soft-skills section">
        <h2 className="section-title">{interestsLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {interests.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>

      <section className="social section">
        <h2 className="section-title">{socialLabel}</h2>
        <div className="social__container bd-grid">
          {socials.map((socials) => <Social key={socials.name} {...socials} />)}
        </div>
      </section>

    </section>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle"/> {skill}
  </li>
);

const Social = ({ label, url, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className="social__link">
    <i className={`bx ${className} social__icon`}></i> {label}
  </a>
);
