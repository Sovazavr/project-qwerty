import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import TypeWordPage from "./pages/TypeWordPage";
import { useSelector, useDispatch } from "react-redux";
import { AuthSlice } from "./store/reducers/authSlice";
import { Route, Routes } from "react-router-dom";

function App() {
  // example of using redux
  // const isAuth = useSelector(state => state.authReducer.isAuth)
  // const {setAuth} = AuthSlice.actions
  // const dispatch = useDispatch()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TypeWordPage/>} />
      </Routes> 
    </div>
  );
}

export default App;
