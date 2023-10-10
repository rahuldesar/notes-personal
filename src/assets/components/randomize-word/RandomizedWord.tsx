import React from "react";

const RandomizedWord = ({ str }: { str: string }) => {
  let capitalString = str.toUpperCase();

  const handleRandomizeWords = (e: any) => {
    let word: string = capitalString;

    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = word
        .split("")
        .map((item, index) => {
          if (index < iterations) {
            return word[index];
          }

          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (iterations >= word.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 20);
  };

  return (
    <>
      <span onMouseOver={handleRandomizeWords} onClick={handleRandomizeWords}>
        {capitalString}
      </span>
    </>
  );
};

export default RandomizedWord;
