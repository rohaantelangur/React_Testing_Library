import React, { useState } from 'react'
import { Slider } from './Slider';
import '../App.css';

const que = [
    {
      id: 1,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
    },
    {
      id: 2,
      question: "Can web browsers read JSX directly?",
      answer:
        "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object",
    },
    {
      id: 3,
      question: " What is the virtual DOM?",
      answer:
        "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.",
    },
    {
      id: 4,
      question: "Explain how lists work in React",
      answer:
        "We create lists in React as we do in regular JavaScript. Lists display data in an ordered format",
    },
    {
      id: 5,
      question: "Why is there a need for using keys in Lists?",
      answer:
        "A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists",
    },
  ];

export const Question = () => {

  const [currensl, setcurrentsl] = useState(0);

  const nextslide = () => {
    setcurrentsl(currensl + 1);
  };
  const prevslide = () => {
    setcurrentsl(currensl - 1);
  };

  return (
    <div className='App'>
         <h1 data-testid="header">Slides</h1>
      <Slider
        question={que[currensl].question}
        answer={que[currensl].answer}
      />
      <button data-testid="prev" onClick={prevslide} disabled={currensl === 0}>
        Prev
      </button>
      <button
        data-testid="next"
        onClick={nextslide}
        disabled={currensl === que.length - 1}
      >
        Next
      </button>
    </div>
  )
}
