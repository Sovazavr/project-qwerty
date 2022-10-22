function SettingPage() {
  return (
    <div className="flex flex-col justify-start items-start gap-y-28 mt-20">
      <div className="flex flex-col items-start">
        <span className="text-2xl text-white">
          Настройка тестировочного режима
          <hr className="h-1 bg-additional rounded" />
        </span>

        <label className="ml-1 mt-5">
          <input type="checkbox" />
          <span className="ml-2 text-2xl text-white">
            Режим генерации из заданных символов
          </span>
        </label>

        <span className="ml-3 mt-1 text-2xl text-white">
            Доступные буквы
        </span>

        <div className="ml-3 mt-1 text-2xl text-additional w-10 h-10 setting-letter-wrapper text-center">
            E
        </div>

        <label className="mt-5 ml-1">
          <input type="checkbox" />
          <span className="ml-2 text-2xl text-white">
            Режим готового текста
          </span>
        </label>

      </div>

      <div className="flex flex-col items-start">
        <span className="text-2xl text-white">
          Настройка тестировояного режима
          <hr className="h-1 bg-additional rounded" />
        </span>
        
        <label>
          <input type="checkbox" />
          <span className="ml-1 text-2xl text-white">
            Режим генерации из заданных символов
          </span>
        </label>

      </div>
    </div>
  );
}
export default SettingPage;
