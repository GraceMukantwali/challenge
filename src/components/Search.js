import { useState } from "react";

function Search({ setUserData, setError }) {
  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-6">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-grow p-2 border rounded"
        placeholder="Search GitHub username..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
    </form>
  );
}

export default Search;
