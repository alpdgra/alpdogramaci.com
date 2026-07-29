import React, { useEffect, useRef, useState } from "react";

// Fades content in as it scrolls into view. Falls back to visible immediately
// when IntersectionObserver is unavailable, so content is never stranded.
export const Reveal = ({ as: Tag = "div", className = "", children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};
