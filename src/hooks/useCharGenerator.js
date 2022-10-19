import { useRef, useState } from "react";
import database from "../assets/texts";
const useCharGenerator = () => {
    const textRef = useRef(null);
    const [currentChunkNumber, setCurrentChunkNumber] = useState(0);
    const [stepChunkText, setStepChunkText] = useState(10);
    const [randomLengthValue, setRandomLengthValue] = useState(30)

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const setNextPortionText = () => {
        if (!textRef.current) return "sdas";
        const portionText = textRef.current.slice(currentChunkNumber, currentChunkNumber + stepChunkText);
        setCurrentChunkNumber((prev) => prev + stepChunkText);
        return portionText.join(' ');
    };

    const generateRandomEnglishString = () => {
        const strArr = new Array(randomLengthValue).fill(null)
        const test =  strArr.map( _ =>  String.fromCharCode(getRandomArbitrary(65,122))).join('')
        return test
    }

    // TODO get ranom index
    const getMeaningfulText = () => {
        let index = 0;
        const text = database[index];
        textRef.current = text.split(" ");
    };
    return {
        getMeaningfulText,
        setNextPortionText,
        generateRandomEnglishString,
    };
};

export default useCharGenerator;
