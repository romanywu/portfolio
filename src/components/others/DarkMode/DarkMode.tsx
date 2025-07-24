import { useEffect, useState } from "react";
import classes from "./DarkMode.module.css";

type ThemeOption = "auto" | "light" | "dark";

const DarkMode = () => {
  const [themePreference, setThemePreference] = useState<ThemeOption>(
    (localStorage.getItem("themePreference") as ThemeOption) || "auto"
  );
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  const applyTheme = (theme: "light" | "dark") => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    setActualTheme(theme);
  };

  const getSystemTheme = (): "light" | "dark" => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const updateActualTheme = (preference: ThemeOption) => {
    let newTheme: "light" | "dark";
    
    switch (preference) {
      case "dark":
        newTheme = "dark";
        break;
      case "light":
        newTheme = "light";
        break;
      case "auto":
      default:
        newTheme = getSystemTheme();
        break;
    }
    
    applyTheme(newTheme);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPreference = event.target.value as ThemeOption;
    setThemePreference(newPreference);
    localStorage.setItem("themePreference", newPreference);
    updateActualTheme(newPreference);
  };

  useEffect(() => {
    // Migration from old theme system
    const oldTheme = localStorage.getItem("theme");
    const newThemePreference = localStorage.getItem("themePreference");
    
    let initialPreference: ThemeOption = "auto";
    
    if (newThemePreference) {
      // New system exists, use it
      initialPreference = newThemePreference as ThemeOption;
    } else if (oldTheme) {
      // Migrate from old system
      initialPreference = oldTheme === "dark" ? "dark" : "light";
      localStorage.setItem("themePreference", initialPreference);
      localStorage.removeItem("theme"); // Clean up old key
    }
    
    setThemePreference(initialPreference);
    updateActualTheme(initialPreference);

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      // Get the current preference from localStorage to avoid stale closure
      const currentPreference = (localStorage.getItem("themePreference") as ThemeOption) || "auto";
      // Only apply system changes when preference is "auto"
      if (currentPreference === "auto") {
        const newTheme = e.matches ? "dark" : "light";
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []); // Remove themePreference from dependencies to avoid infinite re-renders

  return (
    <div className={classes.themeSelector}>
      <label htmlFor="theme-select" className={classes.themeLabel}>
        Theme:
      </label>
      <div className={classes.selectWrapper}>
        <select
          id="theme-select"
          className={classes.themeSelect}
          value={themePreference}
          onChange={handleThemeChange}
        >
          <option value="auto">Device default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default DarkMode;
