import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./ThemeContext";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const { theme } = useTheme();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className={theme === "light" ? "bg-white text-black min-h-screen" : "bg-gray-900 text-white min-h-screen"}>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">GitHub User Search</h1>
          <ThemeToggle />
        </header>

        <Search setUserData={setUserData} setError={setError} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {userData && <Profile user={userData} />}
      </div>
    </div>
  );
}

export default App;
