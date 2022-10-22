import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import TypeWordPage from "./pages/TypeWordPage";
import { useSelector, useDispatch } from "react-redux";
import { AuthSlice } from "./store/reducers/authSlice";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SettingPage from "./pages/SettingPage";

function App() {
  // example of using redux
  // const isAuth = useSelector(state => state.authReducer.isAuth)
  // const {setAuth} = AuthSlice.actions
  // const dispatch = useDispatch()
  return (
    <div className="App h-screen overflow-hidden bg-primary">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SettingPage/>} />
          <Route path="/typeWordPage" element={<TypeWordPage />} />
          <Route path="settings" element = {<SettingPage/>} />
          <Route path="*" element={<Navigate to="/typeWordPage" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
