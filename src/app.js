import React, { useState, useEffect, Fragment } from "react";

import { Profile } from "./components/profile";
import { Experiences } from "./components/experiences";
import { Educations } from "./components/educations";
import { Projects } from "./components/projects";
import { Menu } from "./components/menu";

import { Data as dataSchema } from "./schemas/data";
import { Menu as menuSchema } from "./schemas/menu";

export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, timeline} = dataSchema;

  return (
    <Fragment>
      {!matches && <Menu {...menuSchema} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} />
          </div>
          <div className="resume__right">
            <Experiences {...timeline} />
            <Educations {...timeline} />
            <Projects {...timeline} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};