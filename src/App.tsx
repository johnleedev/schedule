import './App.scss';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './screens/Main';
import Header from './components/Header';
import MainClass from './screens/MainClass';
import Class1_esg from './Class/Class';

function App() {

  return (
    <div className="App">
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/class" element={<MainClass/>}/>
        <Route path="/class1_esg" element={<Class1_esg/>}/>
      </Routes>
    </div>
  );
}

export default App;