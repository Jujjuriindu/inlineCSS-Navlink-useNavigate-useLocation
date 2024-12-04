import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import WelcomePage from "./components/WelcomePage";
import SignOut from "./components/SignOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./components/Images";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/welcome" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/images" element={<Images></Images>}></Route>
        <Route path="/signout" element={<SignOut></SignOut>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
