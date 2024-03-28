import React from 'react';
import './Class.scss'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function ClassSecond (props:any) {

  let navigate = useNavigate();
  const mainNotice = props.data.filter((item:any)=> item.sort === 'main');
  const special = props.data.filter((item:any)=> item.sort === 'special');
  const ptOrder = props.data.filter((item:any)=> item.sort === 'pt')

  return (
    <div className="class_content">

      <div className="back-btn"
        onClick={()=>{
          props.setIsMenuView(true);
          props.setSelectNum(0)
        }}
      >
        <FaArrowLeft />
        <p>뒤로가기</p>          
      </div>

      <div className="cover">
        <h2>개요</h2>
        {mainNotice.map((item:any, index:any) => {
          return (
            <div className='row' key={index}>
              <h3>{item.title}</h3>
              <div className="divider"></div>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>

      <div className="cover">
        <h2>공지</h2>
        {special.map((item:any, index:any) => {
          return (
            <div className='row' key={index}>
              <h3>{item.title}</h3>
              <div className="divider"></div>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>

      <div className="cover">
        <h2>발표순서</h2>
        {ptOrder.map((item:any, index:any) => {

          
          const copy = item.presenter;
          console.log();

          return (
            <div className='row' key={index}>
              <h3>{item.date}</h3>
              <div className="divider"></div>
              <div className="text">
                {
                  copy.map((subitem:any, subindex:any) => {
                    return (
                      <p key={subindex}>{subitem.name}:  {subitem.content}</p>
                    )
                  })
                }
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

