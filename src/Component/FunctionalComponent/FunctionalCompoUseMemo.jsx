import React, { useMemo, useState } from 'react'

const FunctionalCompoUseMemo = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex];

    const computeLetterCount = (word) => {
        console.log("computeLetterCount", word);
        let i = 0;
        while (i < 100000) i++;
        return word.length;
    }

    const letterCount = useMemo(() => computeLetterCount(word))

    return (
        <>
            Word : {words[wordIndex]}
            <br />
            wordIndex : {wordIndex}
            <br />
            word: {word}
            <br />
            <p>"{word}" has {letterCount} letters</p>
            <button onClick={() => {
                if (wordIndex + 1 === words.length) {
                    setWordIndex(0);
                } else {
                    setWordIndex(wordIndex + 1);
                }
            }}>
                Click
            </button>
        </>
    )
}

export default FunctionalCompoUseMemo
