import React, { useEffect, useMemo } from "react";

import { Sidebar } from "./components/sidebar";
import { Timeline } from "./components/timeline";
import { Nav } from "./components/nav";
import { Icon } from "./components/icon";

import { Data } from "./schemas/data";
import { useTheme, useScrollSpy, useScrolledPast } from "./hooks";

export const Resume = () => {
  const [theme, toggleTheme] = useTheme();
  const showToTop = useScrolledPast(400);

  const { profile, timeline } = Data;

  // Normalise each source into the shape the shared Timeline renders.
  const sections = useMemo(() => {
    const experiences = timeline.experiences.map((item) => ({
      ...item,
      subtitle: item.company,
    }));

    const educations = timeline.educations.map((item) => ({
      ...item,
      subtitle: item.institution,
    }));

    const projects = timeline.projects.map((item) => ({
      ...item,
      title: item.name,
      subtitle: item.company,
    }));

    return [
      {
        id: "experience",
        title: "Experience",
        icon: "briefcase",
        items: experiences,
      },
      { id: "education", title: "Education", icon: "education", items: educations },
      { id: "projects", title: "Projects", icon: "projects", items: projects },
    ].filter((section) => section.items.length > 0);
  }, [timeline]);

  const navItems = useMemo(
    () => [
      { id: "profile", label: "Profile", icon: "user" },
      ...sections.map(({ id, title, icon }) => ({ id, label: title, icon })),
    ],
    [sections]
  );

  const navIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const active = useScrollSpy(navIds);

  // Arms the scroll-reveal styles only once JS is running.
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
  }, []);

  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to content
      </a>

      <div className="page">
        <div className="resume">
          <Sidebar {...profile} theme={theme} toggleTheme={toggleTheme} />
          <main className="main">
            {sections.map((section) => (
              <Timeline key={section.id} {...section} />
            ))}
          </main>
        </div>
      </div>

      <Nav items={navItems} active={active} />

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
