import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import useCharGenerator from "./useCharGenerator";

const useText = (TEXT_MODE) => {
  const { getMeaningfulText, setNextPortionText,generateRandomEnglishString, generateRandomSelectedChars,generateRandomRussiaString } = useCharGenerator();
  const [cuurentText, setcurrentText] = useState([{ key: "" }]);

  const isWrong = useRef(false);
  const currentPostion = useRef(0);

  const textAdpater = (text) => {
    return text.split("").map((key, index) => {
      return {
        key,
        isActice: false,
        isWrong: false,
      };
    });
  }
  const setMeangfulTextState = () => {
    const text = setNextPortionText();
    setcurrentText(textAdpater(text));
  };

  useEffect(() => {
    document.addEventListener("keyup", keyDownHandler, false);
    return () => {
      document.removeEventListener("keyup", keyDownHandler);
    };
  }, [cuurentText]);


  const setRandomText = (text) => {
    setcurrentText(textAdpater(text));
  }

  const setRandomEnglishText = () => {
    const text = generateRandomEnglishString();
    setRandomText(text)
  }

  const setRandomSelectedText = () => {
    const text = generateRandomSelectedChars();
    setRandomText(text)
  }

  const setRandomRussiaText = () => {
    const text = generateRandomRussiaString();
    setRandomText(text)
  }

  const getNextText = () => {
    if (TEXT_MODE === "MEANINGFUL") {
      setMeangfulTextState();
    } 
    else if (TEXT_MODE === "RANDOM_ENGLISH") {
      setRandomEnglishText()
    }
    else if(TEXT_MODE === "RANDOM_SELECTED") {
      setRandomSelectedText()
    }
    else if (TEXT_MODE === "RANDOM_RUSSIA") {
      setRandomRussiaText()
    }
    else{
      setMeangfulTextState();
    }
  };

  const intialLoadText = () => {
    if (TEXT_MODE === "MEANINGFUL") {
      getMeaningfulText();
    }
  };

  useLayoutEffect(() => {
    intialLoadText();
    getNextText();
  }, []);

  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === "Shift") return;
      console.log(e.key);
      const prevPosition = currentPostion.current;
      const newObj = cuurentText.map((textObj, index) => {
        if (index === prevPosition) {
          if (textObj.key === e.key) {
            currentPostion.current += 1;
            if (index === cuurentText.length - 1) {
              setTimeout(() => {
                getNextText();
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

  return { cuurentText, keyDownHandler };
};
export default useText;
