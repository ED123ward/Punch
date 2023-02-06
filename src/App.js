import "./App.css";
import 'antd/dist/antd.min.css';

import {Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Home from "./views/Home/home";
import Agreement from "./views/Agreement/agreement";
import About from "./views/About/about";
import UserLogin from "./views/UserLogin/userLogin"
import EmailLogin from "./views/EmailLogin/emailLogin"
import Currency from "./views/Currency/currency";
import Exchange from "./views/Exchange/exchange";
import Task from "./views/Task/task"

import useFirebase from "./hooks/firebase";

function App() {
  useFirebase();
  return (
    <div className="App">
       <HashRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/agreement/:query" element={<Agreement />} />
            <Route  path="/about/:query" element={<About />} />
            <Route  path="/userlogin" element={<UserLogin  />} />
            <Route  path="/emaillogin" element={<EmailLogin  />} />
            <Route  path="/currency" element={<Currency  />} />
            <Route  path="/exchange" element={<Exchange  />} />
            <Route  path="/task" element={<Task  />} />
            <Route  path="*" element={<Home  />} />
           
        </Routes>
       </HashRouter>
     
    </div>
  );
}

export default App;
