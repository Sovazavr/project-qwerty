import { useMemo } from "react";
import SettingLetter from "../components/SettingLetter";

function SettingPage() {
  const englishLetters = useMemo(() => {
    return [
      {
        key: "A",
        active: false,
      },
      {
        key: "B",
        active: false,
      },
      {
        key: "C",
        active: false,
      },
      {
        key: "E",
        active: false,
      },
      {
        key: "F",
        active: false,
      },
      {
        key: "G",
        active: false,
      },
      {
        key: "I",
        active: false,
      },
      {
        key: "J",
        active: false,
      },
      {
        key: "K",
        active: false,
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
    ];
  }, []);

  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col justify-start items-start gap-y-24">
        <div className="flex flex-col items-start">
          <span className="text-4xl text-white">
            Настройка тестировочного режима
            <hr className="h-1 mt-3 bg-additional rounded" />
          </span>

          <label className="ml-1 mt-5">
            <input type="checkbox" />
            <span className="ml-2 text-2xl text-white">
              Режим генерации из заданных символов
            </span>
          </label>

          <span className="ml-3 mt-3 text-2xl text-white">Доступные буквы</span>

          <div className="ml-4 mt-1 flex gap-1">
            {englishLetters.map((charObj) => (
              <SettingLetter letterChar={charObj.key} />
            ))}
          </div>

          <label className="mt-5 ml-1">
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

          <label className="mt-5">
            <span className="ml-1  text-2xl text-white">Длина cлова:</span>

            <input className="ml-3 w-7 text-lg" placeholder="4" type="number" />
          </label>

          <label className="mt-3">
            <span className="ml-1 text-2xl text-white">Доступные буквы</span>
            <div className="ml-2 mt-1 flex gap-1">
              {englishLetters.map((charObj) => (
                <SettingLetter letterChar={charObj.key} />
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
            <span className="ml-1  text-2xl text-white">Язык: </span>

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
