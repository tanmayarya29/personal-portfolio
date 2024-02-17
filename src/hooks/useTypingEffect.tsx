import { useState, useEffect } from "react";

/*
this custom hook takes array of strings and
for each string it
displays text letter by letter
cursor should be blinking
after text is displayed, it should be removed letter by letter
after text is removed, it should be displayed again
*/

interface Props {
  text: string[];
  delay: number;
}

export const useTypingEffect = ({ text, delay }: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverse) {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setReverse(false);
          setIndex((index + 1) % text.length);
        }
      } else {
        if (displayText.length === text[index].length) {
          setReverse(true);
        } else {
          setDisplayText(text[index].slice(0, displayText.length + 1));
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [displayText, index, reverse]);

  return displayText;
};
