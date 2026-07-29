import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const readStoredTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch (error) {
    // Storage can be blocked entirely (private mode, cookie settings).
    return null;
  }
};

const systemTheme = () =>
  window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => readStoredTheme() || systemTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* nothing to persist to — the in-memory theme still applies */
    }
  }, [theme]);

  // Follow the OS until the visitor makes an explicit choice.
  useEffect(() => {
    if (readStoredTheme()) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => setTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return [theme, () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))];
};

// Highlights the nav item for whichever section is currently on screen.
export const useScrollSpy = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.5, 1] }
    );

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

export const useScrolledPast = (offset = 400) => {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return passed;
};
