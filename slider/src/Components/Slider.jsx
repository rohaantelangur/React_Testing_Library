import React from "react";
import '../App.css';


export const Slider = ({question,answer}) => {
  return (
    <div className="slide-container" data-testid="slide">
    <h3 data-testid="question">{question}</h3>
    <p data-testid="answer">{answer}</p>
  </div>
  );
};
