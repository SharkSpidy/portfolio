import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

function read(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** Dark is the default; the choice is saved in localStorage. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", theme === "dark" ? "#080f21" : "#f5f8fe");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
