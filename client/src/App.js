import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Generator from "./Generator";
import PopularEntries from "./PopularEntries";

const App = () => {
  const navigate = useNavigate();

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    button: {
      margin: "0 10px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    container: {
      textAlign: "center",
    },
  };

  return (
    <div className="container">
      <div className="navbar">
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          onClick={() => navigate("/analytics")}
        >
          Go to Analytics
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          onClick={() => navigate("/generator")}
        >
          Go to Generator
        </button>
      </div>

      <Routes>
        <Route path="/analytics" element={<PopularEntries />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </div>
  );
};

export default App;
