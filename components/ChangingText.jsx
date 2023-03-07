import { useState, useEffect } from 'react';

export default function ChangingText() {
  const [text, setText] = useState('I\'m From');
  const textValues = ['I Was Born In', 'I Was Raised In', 'I\'m From'];
  let currentIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextText = textValues[currentIndex];
      setText(nextText);
      currentIndex = (currentIndex + 1) % textValues.length;
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  return <p>{text}</p>;
}