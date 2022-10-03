import { useRef, useState } from "react";
import database from "../assets/texts";
const useCharGenerator = () => {
    const textRef = useRef(null);
    const [currentChunkNumber, setCurrentChunkNumber] = useState(0);
    const [stepChunkText, setStepChunkText] = useState(3);

    const setNextPortionText = () => {
        // debugger
        if (!textRef.current) return "sdas";
        const portionText = textRef.current.slice(currentChunkNumber, currentChunkNumber + stepChunkText);
        setCurrentChunkNumber((prev) => prev + stepChunkText);
        return portionText.join(' ');
    };


    const getMeaningfulText = () => {
        // TODO get rnagom index
        let index = 0;
        const text = database[index];
        textRef.current = text.split(" ");
    };
    return {
        getMeaningfulText,
        setNextPortionText,
    };
};

export default useCharGenerator;
