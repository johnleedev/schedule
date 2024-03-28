import React, {  useState, useEffect, useRef } from "react";
import './header.scss'
import logo from '../images/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Header () {
  
  let navigate = useNavigate();


  return (
    
    <header className="header">

      <div className="mainmenu">
        <div className="inner">
        
          <div className="box box1" >
            <h1>일정표</h1>
          </div>
          
          <div className="box box2">
            <div className="menu"
              onClick={()=>{navigate('/');}}
            >
             전체
            </div>
            <div className="menu"
              onClick={()=>{navigate('/class');}}
            >
             수업별
            </div>
          </div>

   
        </div>
      </div>
       
    </header>
    
  );
};

