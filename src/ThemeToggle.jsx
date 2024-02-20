import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      <button type="button" onClick={toggleDarkTheme} className="dark-toggle ">
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaSun className="toggle-icon" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
