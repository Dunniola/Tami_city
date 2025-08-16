import { useEffect, useState } from "react";

export default function Discover() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    console.log("Searching for:", query);
    setLoading(true);

    fetch(`http://127.0.0.1:8000/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setResults(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setResults([]);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="mt-40">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      {loading && <p>Searching...</p>}

      {query && (
        <h1>
          Search Results for "<span style={{ color: "green" }}>{query}</span>"
        </h1>
      )}

      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <span style={{ color: "blue", cursor: "pointer" }}>
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        query && !loading && <p>No results found</p>
      )}
    </div>
  );
}
