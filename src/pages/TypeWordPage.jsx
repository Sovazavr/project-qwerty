import "../assets/styles/TypeWordPage.css";
import OutputText from "../components/OutputText";
import useText from "../hooks/useText";
const TypeWordPage = () => {
  const { cuurentText } = useText("MEANINGFUL");
  return (
    <>
      <div className="typeWordLayout">
        <div className="textCheck">
          <OutputText cuurentText={cuurentText} />
        </div>
      </div>
    </>
  );
};
export default TypeWordPage;
