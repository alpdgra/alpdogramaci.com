import React, { useState } from "react";
import { Icon } from "./icon";
import { Reveal } from "./reveal";

// Shared section shell: condensed uppercase heading over a hairline rule.
export const Section = ({ id, title, className = "", children }) => (
  <Reveal as="section" id={id} className={className}>
    <h2 className="h-display section__title">{title}</h2>
    {children}
  </Reveal>
);

// One timeline record. Experience and Education differ only in which fields
// are populated — org/role map to company/position and school/degree.
export const Entry = ({
  org,
  role,
  period,
  location,
  description,
  highlights = [],
  details = [],
  url,
}) => {
  const [open, setOpen] = useState(false);
  const meta = [period, location].filter(Boolean).join(" · ");

  return (
    <article className="entry">
      <h3 className="entry__org">
        {org}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="entry__link"
            aria-label={`${org} (opens in a new tab)`}
          >
            <Icon name="external" size={14} />
          </a>
        )}
      </h3>

      {role && <p className="entry__role">{role}</p>}
      {meta && <span className="entry__meta">{meta}</span>}
      {description && <p className="entry__desc">{description}</p>}

      {highlights.length > 0 && (
        <ul className="entry__list">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      {details.length > 0 && (
        <>
          <button
            type="button"
            className="entry__toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <Icon name="info" size={13} />
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
    </article>
  );
};

// Full-width hatched chip row used for Skills and Interests.
export const Band = ({ id, title, items = [], inColumn = false }) => {
  if (items.length === 0) return null;

  return (
    <Reveal
      as="section"
      id={id}
      className={`band ${inColumn ? "band--column" : ""}`.trim()}
    >
      <h2 className="h-display band__title">{title}</h2>
      <ul className="chips">
        {items.map((item) => (
          <li className="chip" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};
