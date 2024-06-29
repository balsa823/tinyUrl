import React, { useState } from "react";
import "./App.css";

function Generator() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();

      setShortUrl(`http://localhost:2000/api/v1/${data.shortUrl}`);
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TinyURL</h1>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter URL to shorten"
        />
        <button onClick={handleButtonClick}>Generate TinyURL</button>
        {shortUrl && <div className="result">{shortUrl}</div>}
      </header>
    </div>
  );
}

export default Generator;
