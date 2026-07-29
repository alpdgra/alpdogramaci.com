import React, { useState } from "react";
import { Icon } from "./icon";
import { Reveal } from "./reveal";

// One timeline drives Experience, Education and Projects — they only differ in
// which fields are populated.
export const Timeline = ({ id, title, icon, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <Reveal as="section" className="card section" id={id}>
      <h2 className="section__title">
        <Icon name={icon} size={22} />
        {title}
      </h2>
      <ol className="timeline">
        {items.map((item, index) => (
          <Entry key={`${item.subtitle}-${item.title}-${index}`} {...item} />
        ))}
      </ol>
    </Reveal>
  );
};

const Entry = ({
  title,
  subtitle,
  period,
  location,
  current,
  description,
  highlights = [],
  details = [],
  url,
}) => {
  const [open, setOpen] = useState(false);
  const hasDetails = details.length > 0;

  return (
    <li className={`entry ${current ? "is-current" : ""}`.trim()}>
      <div className="entry__head">
        <h3 className="entry__title">
          {title}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="entry__link"
              aria-label={`${title} (opens in a new tab)`}
            >
              <Icon name="external" size={15} />
            </a>
          )}
        </h3>
        <span className="entry__period">{period}</span>
      </div>

      <p className="entry__org">
        {subtitle}
        {location && <span className="entry__tag">{location}</span>}
      </p>

      {description && <p className="entry__desc">{description}</p>}

      {highlights.length > 0 && (
        <ul className="entry__list">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      {hasDetails && (
        <>
          <button
            type="button"
            className="entry__toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <Icon name="info" size={14} />
            {open ? "Hide details" : "Show details"}
          </button>
          {open && (
            <div className="entry__details">
              {details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          )}
        </>
      )}
    </li>
  );
};
