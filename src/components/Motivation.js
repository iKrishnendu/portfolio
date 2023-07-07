import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Motivation.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <>
      <h1>Quote Of The Day</h1>
      <div className="quote-box" data-aos="fade-up">
        <div className="quote-container">
          <p className="quote">{quote}</p>
          <p className="author">- {author}</p>
          <button onClick={handleClick}>New Quote</button>
        </div>
      </div>
      <br />
    </>
  );
}

export default App;
