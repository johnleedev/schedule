import React from 'react';
import Footer from '../components/Footer';
import './Main.scss'
import data from "../data/Data_Main";

export default function Main(props:any) {

  const mainNotice = data.filter((item:any)=> item.sort === 'main');
  const special = data.filter((item:any)=> item.sort === 'special');

	return (
		<div className='main'>
				
				<div className="inner">

        <div className="main_content">

          <div className="cover">
            <h2>개요</h2>
            {mainNotice.map((item, index) => {
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
            {special.map((item, index) => {
              return (
                <div className='row' key={index}>
                  <h3>{item.title}</h3>
                  <div className="divider"></div>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>

        

        </div>
			</div>

			<Footer />

		</div>
	);
}
