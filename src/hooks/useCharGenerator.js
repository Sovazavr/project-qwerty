import { useRef, useState } from "react";
import database from "../assets/texts";
const useCharGenerator = () => {
    const textRef = useRef(null);
    const [currentChunkNumber, setCurrentChunkNumber] = useState(0);
    const [stepChunkText, setStepChunkText] = useState(10);
    const [randomLengthValue, setRandomLengthValue] = useState(10)
    const [selectedlistChar, setSelectedlistChar] = useState(['a','z','e','1','!','r','q'])


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

    const generateRandomRussiaString = () => {
        const strArr = new Array(randomLengthValue).fill(null)
        const test =  strArr.map( _ =>  String.fromCharCode(getRandomArbitrary(1040,1103))).join('')
        return test
    }

    const generateRandomSelectedChars = () => {
        const strArr = new Array(randomLengthValue).fill(null)
        const test =  strArr.map( _ =>  selectedlistChar[getRandomArbitrary(0,selectedlistChar.length)] ).join('')
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
        generateRandomSelectedChars,
        generateRandomRussiaString
    };
};

export default useCharGenerator;
