
import "../assets/styles/TypeWordPage.css";
import KeyboardEN from "../components/KeyboardEN";
import OutputText from "../components/OutputText";
import useText from "../hooks/useText";
const TypeWordPage = () => {
  const { cuurentText } = useText();
  return (
    <>
      <div className="typeWordLayout">
        <div className="textCheck">
          <OutputText cuurentText={cuurentText} />
        </div>

        <KeyboardEN/>
      </div>
      
    </>
  );
};
export default TypeWordPage;
