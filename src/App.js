
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';



function App() {
  const text = "Проверка ебла блять"
  const arrText = text.split('')
  const [symbol, setSymbol] = useState('')
  const [number, setNumber] = useState(0)
  const [value, setValue] = useState('')
  const [end, setEnd] = useState(false)
  const check = (e) => {
    setValue(e.target.value)




  }
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const spanElem = document.getElementById(number)
    console.log(spanElem);
    if (spanElem) {
      if (value == spanElem.innerHTML) {
        setNumber(number + 1)
      }
      setValue('')
    } else {
      console.log("елсэ отработал");
      setEnd(true)
    }

  }, [value]);



  return (
    <div className="App">
      {end
        ? (
          <p>ну молодец иди на хуй</p>
        )
        : (
          <div className='textCheck'>
            <input type="text" value={value} autoFocus onChange={check} />
            <>
              {arrText.map((e, i) => (<span key={i} id={i} className={i == number ? "wgreen" : "wblack"}>
                {e}
              </span>
              ))}
            </>
          </div>
        )
      }

    </div>
  );
}

export default App;
