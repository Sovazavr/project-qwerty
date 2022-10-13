import "../assets/styles/letterStyles.css";
const OutputText = ({ cuurentText }) => {
  const getClasNameForLetter = (letterObj) => {
    if(letterObj.isActice){
        if(letterObj.isWrong)
            return 'letter_wrong'
        else 
            return 'letter_right'
    }
    else
        return ''
  }

  return (
    <>
      {cuurentText.map((letterObj) => {
        return (
          <span className={`letter ${getClasNameForLetter(letterObj)}`} >
            {letterObj.key === " " ? "_" : letterObj.key}
          </span>
        );
      })}
    </>
  );
};
export default OutputText;
