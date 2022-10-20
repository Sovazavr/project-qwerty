import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import TypeWordPage from "./pages/TypeWordPage";
import { useSelector,useDispatch } from "react-redux";
import { AuthSlice } from "./store/reducers/authSlice";


function App() {
  // example of using redux
  // const isAuth = useSelector(state => state.authReducer.isAuth)
  // const {setAuth} = AuthSlice.actions
  // const dispatch = useDispatch()
  return (
    <div className="App">
      <TypeWordPage />
    </div>
  );
}

export default App;
