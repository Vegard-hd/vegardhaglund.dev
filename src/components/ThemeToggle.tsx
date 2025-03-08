import { SetStateAction, useEffect, useState } from "react";
import { themeChange } from "theme-change";

export function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    themeChange(false);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: SetStateAction<string>) => {
    setTheme(newTheme);
  };

  const handleChange = (event: { target: { checked: any } }) => {
    toggleTheme(event.target.checked ? "abyss" : "nord");
  };

  return (
    <label className="cursor-pointer gap-2 text-center">
      <span className="label-text ">Abyss</span>
      <input
        type="checkbox"
        className="toggle theme-controller"
        checked={theme === "abyss"}
        onChange={handleChange}
        value={theme === "abyss" ? "nord" : "abyss"}
      />
      <span className="label-text ">Nord</span>
    </label>
  );
}
