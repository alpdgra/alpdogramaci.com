import React, { useEffect } from "react";

import { Masthead } from "./components/masthead";
import { Section, Entry, Band } from "./components/entry";
import { Icon } from "./components/icon";

import { Data } from "./schemas/data";
import { useTheme, useScrolledPast } from "./hooks";

export const Resume = () => {
  const [theme, toggleTheme] = useTheme();
  const showToTop = useScrolledPast(400);

  const { profile, timeline } = Data;
  const { experiences, educations, projects } = timeline;

  // Arms the scroll-reveal styles only once JS is running.
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
  }, []);

  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to content
      </a>

      <div className="sheet">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>

        <Masthead {...profile} />

        <div className="columns">
          {/* Skills and interests ride in the short column so it doesn't
              leave a well of white space beside the longer job history. */}
          <div className="column">
            <Section id="education" title="Education">
              {educations.map((item) => (
                <Entry
                  key={`${item.institution}-${item.title}`}
                  org={item.institution}
                  role={item.title}
                  period={item.period}
                  description={item.description}
                  details={item.details}
                />
              ))}
            </Section>

            <Band
              id="skills"
              title={profile.skillsLabel}
              items={profile.skills}
              inColumn
            />
            <Band
              title={profile.interestsLabel}
              items={profile.interests}
              inColumn
            />
          </div>

          <Section id="experience" title="Work Experience">
            {experiences.map((item, index) => (
              <Entry
                key={`${item.company}-${index}`}
                org={item.company}
                role={item.title}
                period={item.period}
                location={item.location}
                highlights={item.highlights}
              />
            ))}
          </Section>
        </div>

        {projects.length > 0 && (
          <div className="columns columns--single">
            <Section id="projects" title="Projects">
              {projects.map((item, index) => (
                <Entry
                  key={`${item.name}-${index}`}
                  org={item.name}
                  role={item.company}
                  period={item.period}
                  description={item.description}
                  url={item.url}
                />
              ))}
            </Section>
          </div>
        )}
      </div>

      <button
        type="button"
        className={`to-top ${showToTop ? "is-visible" : ""}`.trim()}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon name="arrowUp" size={18} />
      </button>
    </>
  );
};
