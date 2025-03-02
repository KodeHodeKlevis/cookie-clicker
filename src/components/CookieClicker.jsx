import React, { useState } from "react";

const CookieClicker = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => setScore(score + 1);

  return (
    <div>
      <button onClick={handleClick}>
        <img
          src="/cookie.png"
          alt="Image of a Cookie"
          style={{ width: "100px" }}
        />
      </button>
      <p>Score: {score}</p>
    </div>
  );
};

export default CookieClicker;
