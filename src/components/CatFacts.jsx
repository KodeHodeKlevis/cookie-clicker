import React, { useState, useEffect } from "react";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFact = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      setError("Failed to fetch a cat fact.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  if (loading)
    return (
      <p style={{ color: "purple", fontFamily: "Comic Sans MS" }}>Loading...</p>
    );
  if (error)
    return <p style={{ color: "red", fontFamily: "Comic Sans MS" }}>{error}</p>;

  return (
    <div>
      <p style={{ color: "white", fontFamily: "Comic Sans MS" }}>{fact}</p>
      <button onClick={fetchFact}>Get New Cat Fact</button>
    </div>
  );
};

export default CatFacts;
