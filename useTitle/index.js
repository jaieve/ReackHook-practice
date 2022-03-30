import { useState, useEffect } from "react";

export const UseTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  // updateTitle = componentDidMount()
  // [] = componentWillUpdatE()
  return setTitle;
};
