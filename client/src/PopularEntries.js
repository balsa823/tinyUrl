import React, { useEffect, useState } from "react";
import axios from "axios";

export class ScoreEntry {
  constructor(url, times) {
    this.url = url;
    this.times = times;
  }
}

const PopularEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/popular"
        );
        setEntries(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      margin: "10px 0",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
    },
    times: {
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Popular Entries</h1>
      <ul style={styles.list}>
        {entries.map((entry, index) => (
          <li key={index} style={styles.listItem}>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              {entry.url}
            </a>{" "}
            <span style={styles.times}>{entry.times} times</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularEntries;
