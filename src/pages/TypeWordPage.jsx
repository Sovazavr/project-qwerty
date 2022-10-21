
import "../assets/styles/TypeWordPage.css";

import KeyboardWrapper from "../components/KeyboardWrapper";
import OutputText from "../components/OutputText";
import useText from "../hooks/useText";
const TypeWordPage = () => {
  const { cuurentText } = useText("RANDOM_RUSSIA");
  return (
    <>
      <div className="typeWordLayout">
        <div className="textCheck">
          <OutputText cuurentText={cuurentText} />
        </div>

        {/* <KeyboardEN/> */}
        <KeyboardWrapper/>
      </div>
      
    </>
  );
};
export default TypeWordPage;
