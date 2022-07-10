import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Slider } from "./Components/Slider";

 const data = [
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

test("the application has the required elements", () => {
  const { getByTestId } = render(<App />);
  let app_header = getByTestId("header");
  let slide = getByTestId("slide");
  let question = getByTestId("question");
  let answer = getByTestId("answer");
  let prev = getByTestId("prev");
  let next = getByTestId("next");

  expect(app_header.textContent).toBe("Slides");
  expect(slide).toBeDefined();
  expect(question).toBeDefined();
  expect(answer).toBeDefined();
  expect(prev).toBeDefined();
  expect(prev.textContent).toBe("Prev");
  expect(next).toBeDefined();
  expect(next.textContent).toBe("Next");
});

test("prev button to be disabled", () => {
  const { getByTestId } = render(<App />);
  let prev = getByTestId("prev");

  expect(prev).toHaveAttribute("disabled");
  expect(prev).toBeDisabled();
});

test("slides to have correct information when moving from page to page", async () => {
  const { getByTestId } = render(<App />);
  let prev = getByTestId("prev");
  let next = getByTestId("next");
  let question = getByTestId("question");
  let answer = getByTestId("answer");

  expect(question.textContent).toBe(data[0].question);
  expect(answer.textContent).toBe(data[0].answer);

  fireEvent.click(next);
  expect(question.textContent).toBe(data[1].question);
  expect(answer.textContent).toBe(data[1].answer);

  fireEvent.click(next);
  expect(question.textContent).toBe(data[2].question);
  expect(answer.textContent).toBe(data[2].answer);
  
  fireEvent.click(next);
  expect(question.textContent).toBe(data[3].question);
  expect(answer.textContent).toBe(data[3].answer);
  
  fireEvent.click(next);
  expect(question.textContent).toBe(data[4].question);
  expect(answer.textContent).toBe(data[4].answer);
  

  expect(next).toHaveAttribute("disabled");
  expect(next).toBeDisabled();

  fireEvent.click(prev);
  expect(question.textContent).toBe(data[3].question);
  expect(answer.textContent).toBe(data[3].answer);

  fireEvent.click(prev);
  expect(question.textContent).toBe(data[2].question);
  expect(answer.textContent).toBe(data[2].answer);

  fireEvent.click(prev);
  expect(question.textContent).toBe(data[1].question);
  expect(answer.textContent).toBe(data[1].answer);

  fireEvent.click(prev);
  expect(question.textContent).toBe(data[0].question);
  expect(answer.textContent).toBe(data[0].answer);
  expect(prev).toHaveAttribute("disabled");
  expect(prev).toBeDisabled();
});

test("Slides unit testing", () => {
  const { getByTestId } = render(<Slider question="Hello" answer="World" />);
  let question = getByTestId("question");
  let answer = getByTestId("answer");
  expect(question.textContent).toBe("Hello");
  expect(answer.textContent).toBe("World");
});

