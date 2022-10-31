import { useMemo } from "react";
import SettingLetter from "../components/SettingLetter";

function SettingPage() {
  const englishLetters = useMemo(() => {
    return [
      {
        key: "A",
        active: true,
      },
      {
        key: "B",
        active: true,
      },
      {
        key: "C",
        active: true,
      },
      {
        key: "E",
        active: true,
      },
      {
        key: "F",
        active: true,
      },
      {
        key: "G",
        active: true,
      },
      {
        key: "I",
        active: true,
      },
      {
        key: "J",
        active: true,
      },
      {
        key: "K",
        active: true,
      },
      {
        key: "M",
        active: false,
      },
      {
        key: "N",
        active: false,
      },
      {
        key: "O",
        active: false,
      },
      {
        key: "P",
        active: false,
      },
      {
        key: "Q",
        active: false,
      },
      {
        key: "R",
        active: false,
      },
      {
        key: "S",
        active: false,
      },
      {
        key: "T",
        active: false,
      },
      {
        key: "U",
        active: false,
      },
      {
        key: "V",
        active: false,
      },
      {
        key: "W",
        active: false,
      },
      {
        key: "X",
        active: false,
      },
      {
        key: "Y",
        active: false,
      },
      {
        key: "Z",
        active: false,
      },
      {
        key: "А",
        active: false,
      },
      {
        key: "Б",
        active: false,
      },
      {
        key: "В",
        active: false,
      },
      {
        key: "Г",
        active: false,
      },
      {
        key: "Д",
        active: false,
      },
      {
        key: "Е",
        active: false,
      },
      {
        key: "Ё",
        active: false,
      },
      {
        key: "Ж",
        active: false,
      },
      {
        key: "З",
        active: false,
      },
      {
        key: "К",
        active: false,
      },
      {
        key: "Л",
        active: false,
      },
      {
        key: "М",
        active: false,
      },
      {
        key: "Н",
        active: false,
      },
      {
        key: "О",
        active: false,
      },
      {
        key: "П",
        active: false,
      },
      {
        key: "Р",
        active: false,
      },
      {
        key: "С",
        active: false,
      },
      {
        key: "Т",
        active: false,
      },
      {
        key: "V",
        active: false,
      },
      {
        key: "W",
        active: false,
      },
      {
        key: "X",
        active: false,
      },
      {
        key: "Y",
        active: false,
      },
      {
        key: "Z",
        active: false,
      },
    ];
  }, []);

  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col justify-start items-start gap-y-20">
        <div className="flex flex-col items-start">
          <span className="text-4xl text-white">
            Настройка тестировочного режима
            <hr className="h-1 mt-3 bg-additional rounded" />
          </span>

          <label className="ml-3 mt-3">
            <input type="checkbox" />
            <span className="ml-4 text-2xl text-white">
              Режим генерации из заданных символов
            </span>
          </label>

          <span className="ml-12 mt-5 text-2xl text-white ">Доступные буквы</span>

          <div className="ml-14 mt-3 flex gap-1 flex-wrap typed-information-wrapper">
            {englishLetters.map((charObj) => (
              
              <SettingLetter letterChar={charObj.key} isActive = {charObj.active} />
            ))}
          </div>

          <label className="mt-5 ml-4">
            <input type="checkbox" />
            <span className="ml-2 text-2xl text-white">
              Режим готового текста
            </span>
          </label>
        </div>

        <div className="flex flex-col items-start">
          <span className="text-4xl text-white">
            Настройка тренировочного режима
            <hr className="h-1 mt-3 bg-additional rounded" />
          </span>

          <label className="mt-3">
            <span className="ml-12  text-2xl text-white">Длина cлова:</span>

            <input className="ml-3 w-7 text-lg" placeholder="4" type="number" />
          </label>

          <label className="mt-5">
            <span className="ml-12 text-2xl text-white">Доступные буквы</span>
            <div className="ml-14 mt-3 flex gap-1 flex-wrap typed-information-wrapper">
              {englishLetters.map((charObj) => (
                <SettingLetter letterChar={charObj.key} isActive = {charObj.active} />
              ))}
            </div>
          </label>
        </div>

        <div className="flex flex-col items-start">
          <span className="text-4xl text-white">
            Общие
            <hr className="h-1 mt-3 bg-additional rounded" />
          </span>

          <label className="mt-5">
            <span className="ml-12  text-2xl text-white">Язык: </span>

            <select className="ml-3 w-19 text-lg" placeholder="EN">
              <option> EN </option>
              <option> RU </option>
            </select>

          </label>

        </div>
      </div>
    </div>
  );
}
export default SettingPage;
