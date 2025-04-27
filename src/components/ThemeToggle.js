import { useTheme } from "../ThemeContext";

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded bg-indigo-500 text-white">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeToggle;
