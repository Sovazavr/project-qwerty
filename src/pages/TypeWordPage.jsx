import "../assets/styles/TypeWordPage.css";

import KeyboardWrapper from "../components/KeyboardWrapper";
import OutputText from "../components/OutputText";
import TypedInfornation from "../components/TypedInfornation";
import useText from "../hooks/useText";
const TypeWordPage = () => {
  const { cuurentText } = useText("RANDOM_RUSSIA");
  return (
    <>
      <div className="h-screen justify-center flex items-center justify-items-center ">
        <div className="flex flex-col gap-y-28 typed-information-wrapper ">
          <div className="flex min-w-1200 justify-center ">
            <div className="typed-information-wrapper flex min-w-1200 gap-y-2 flex-col">
              <TypedInfornation />
              <hr className="h-1 bg-additional rounded"/>
              <div className="textCheck">
                <OutputText cuurentText={cuurentText} />
              </div>
            </div>
          </div>
          <div className="typeWordLayout">
            <KeyboardWrapper />
          </div>
        </div>
      </div>
    </>
  );
};
export default TypeWordPage;
