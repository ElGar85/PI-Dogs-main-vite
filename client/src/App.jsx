import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Nav from "./components/Nav/Nav";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import React from 'react';
import { Routes, Route, useLocation} from "react-router-dom";



function App() {


  const location = useLocation();
  return (
    <div className="App">
     
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
