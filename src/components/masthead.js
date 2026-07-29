import React from "react";
import { Icon } from "./icon";

export const Masthead = ({
  image,
  name,
  occupation,
  location,
  emails = [],
  aboutLabel,
  about,
  socials = [],
}) => {
  // Surname carries the weight, matching the reference layout.
  const [first, ...rest] = name.split(" ");

  return (
    <header className="masthead">
      <div className="masthead__grid">
        <div className="masthead__col">
          <h2 className="h-display section__title">Contact</h2>
          <ul className="contact">
            {location && (
              <li className="contact__item">
                <span>
                  <span className="contact__ring">
                    <Icon name="location" size={17} />
                  </span>
                  {location}
                </span>
              </li>
            )}

            {emails.map((email) => (
              <li className="contact__item" key={email}>
                <a href={`mailto:${email}`}>
                  <span className="contact__ring">
                    <Icon name="mail" size={17} />
                  </span>
                  {email}
                </a>
              </li>
            ))}

            {socials.map(({ label, url, icon, handle }) => (
              <li className="contact__item" key={label}>
                <a href={url} target="_blank" rel="noreferrer">
                  <span className="contact__ring">
                    <Icon name={icon} size={17} />
                  </span>
                  {handle || label}
                </a>
              </li>
            ))}

          </ul>
        </div>

        <div className="masthead__center">
          <img
            className="portrait"
            src={image}
            alt={name}
            width="184"
            height="184"
          />
          <h1 className="masthead__name">
            {first} <strong>{rest.join(" ")}</strong>
          </h1>
          {occupation && <p className="masthead__title">{occupation}</p>}
        </div>

        <div className="masthead__col">
          <h2 className="h-display section__title">{aboutLabel}</h2>
          <p className="masthead__summary">{about}</p>
        </div>
      </div>
    </header>
  );
};
