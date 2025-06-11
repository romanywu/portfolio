import { useEffect, useState } from "react";
import classes from "./DarkMode.module.css";

/**
 * DarkMode Component
 *
 * This component renders a dark mode toggle switch.
 * It uses CSS modules for styling.
 *
 * The component maintains a state variable 'theme' to keep track of the current theme.
 * The initial state is set to the value of 'theme' in localStorage, or 'light' if 'theme' is not in localStorage.
 *
 * The component includes two functions, 'setDarkMode' and 'setLightMode', to change the theme.
 * These functions update the 'data-theme' attribute on the body element, the 'theme' item in localStorage, and the 'theme' state variable.
 *
 * The 'toggleTheme' function is attached to the 'onChange' event of the checkbox.
 * It calls 'setDarkMode' if the checkbox is checked, and 'setLightMode' if the checkbox is not checked.
 *
 * The component uses the useEffect hook to set the 'data-theme' attribute on the body element to the value of 'theme' in localStorage when the component mounts.
 *
 * The checkbox is checked if the 'theme' state variable is 'dark'.
 *
 */
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const toggleTheme = (event: any) => {
    if (event.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.querySelector("body")?.setAttribute("data-theme", localTheme);
      setTheme(localTheme);
    } else {
      // Apply system preference if no local storage theme is set
      const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      document.querySelector("body")?.setAttribute("data-theme", initialTheme);
      setTheme(initialTheme);
    }

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if no theme is manually set in localStorage
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.querySelector("body")?.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={classes.dark_mode}>
      <input
        className={classes.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label
        className={classes.dark_mode_label}
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
};

export default DarkMode;
