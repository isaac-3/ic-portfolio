import React, { useState, useEffect } from "react";

interface TypeWriterTypes {
  words: string[];
}

export const TypeWriter = ({ words }: TypeWriterTypes) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentWord(currentWord.substring(0, currentWord.length - 1));
      } else {
        setCurrentWord(
          words[currentWordIndex].substring(0, currentWord.length + 1)
        );
      }

      if (!isDeleting && currentWord === words[currentWordIndex]) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [isDeleting, currentWordIndex, currentWord, words]);

  return <span className="type-writer">{currentWord}</span>;
};
