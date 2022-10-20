import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import useCharGenerator from "./useCharGenerator";

const useText = () => {
  const { getMeaningfulText, setNextPortionText } = useCharGenerator();
  const [cuurentText, setcurrentText] = useState([{ key: "" }]);

  const isWrong = useRef(false);
  const currentPostion = useRef(0);

  const setTextState = () => {
    const text = setNextPortionText();
    const textObj = text.split("").map((key, index) => {
      return {
        key,
        isActice: false,
        isWrong: false,
      };
    });
    setcurrentText(textObj);
  };

  useEffect(() => {
    document.addEventListener("keyup", keyDownHandler, false);
    return () => {
      document.removeEventListener("keyup", keyDownHandler);

    };
  }, [cuurentText]);

  useLayoutEffect(() => {
    getMeaningfulText();
    setTextState();
  }, []);

  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === "Shift") return;
      // console.log(e.key);
      const prevPosition = currentPostion.current;
      const newObj = cuurentText.map((textObj, index) => {
        if (index === prevPosition) {
          if (textObj.key === e.key) {
            currentPostion.current += 1;
            if (index === cuurentText.length - 1) {
              setTimeout(() => {
                setTextState();
                currentPostion.current = 0;
              });
            }
            let obj = {};
            if (!isWrong.current)
              obj = { ...textObj, isActice: true, isWrong: false };
            else obj = { ...textObj, isActice: true, isWrong: true };
            isWrong.current = false;
            return obj;
          } else {
            isWrong.current = true;
            return { ...textObj };
          }
        } else return { ...textObj };
      });
      setcurrentText(newObj);
      
    },
    [cuurentText]
  );


  return {cuurentText, keyDownHandler};
};
export default useText
