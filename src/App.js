import "./App.css";

import {Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Home from "./views/Home/home";
import Agreement from "./views/Agreement/agreement";
import About from "./views/About/about";

function App() {
  return (
   
    <div className="App">
       <HashRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/agreement" element={<Agreement />} />
            <Route  path="/about/:query" element={<About />} />
            <Route  path="*" element={<Home  />} />
        </Routes>
       </HashRouter>
     
    </div>
  );
}

export default App;
