import React, { useEffect, useRef, useState } from 'react';
import './MainClass.scss'
import '../Class/Class.scss'
import { useSetRecoilState } from 'recoil';
import Footer from '../components/Footer';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Class from '../Class/Class';
import Data_Class1_esg from '../data/Data_Class1_esg';
import Data_Class2_art from '../data/Data_Class2_art';
import Data_Class3_design from '../data/Data_Class3_design';
import Data_Class4_franchise from '../data/Data_Class4_franchise';
import Data_Class5_consulting from '../data/Data_Class5_ consulting';
import ClassSecond from '../Class/ClassSecond';
import Data_Class6_local from '../data/Data_Class6_local';

export default function MainClass(props : any) {

  const [isMenuView, setIsMenuView] = useState<boolean>(true);
  const [selectNum, setSelectNum] = useState(0);


  return (
    <div className="mainclass" >
			<div className="inner">

        {
          isMenuView &&
          <div className="mainclass_content">
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(1);}}
            >
              <p>ESG경영</p>
              <FaAngleRight size={20}/>
            </div>
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(2);}}
            >
              <p>예술문화경영</p>
              <FaAngleRight size={20}/>
            </div>
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(3);}}
            >
              <p>디자인씽킹</p>
              <FaAngleRight size={20}/>
            </div>
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(4);}}
            >
              <p>프랜차이즈 경영원론</p>
              <FaAngleRight size={20}/>
            </div>
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(5);}}
            >
              <p>창업컨설팅 및 코칭</p>
              <FaAngleRight size={20}/>
            </div>
            <div className="box"
              onClick={()=>{setIsMenuView(false); setSelectNum(6);}}
            >
              <p>로컬크리에이터 창업사례</p>
              <FaAngleRight size={20}/>
            </div>
          </div>
        }
        
        { selectNum === 1 &&
          <Class
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class1_esg}/>
        }

        { selectNum === 2 &&
          <Class
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class2_art}/>
        }

        { selectNum === 3 &&
          <ClassSecond
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class3_design}/>
        }

        { selectNum === 4 &&
          <ClassSecond
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class4_franchise}/>
        }

        { selectNum === 5 &&
          <Class
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class5_consulting}/>
        }

        { selectNum === 6 &&
          <Class
            setIsMenuView={setIsMenuView}
            setSelectNum={setSelectNum} 
            data={Data_Class6_local}/>
        }

			</div>
      <Footer />
    </div>
  );
}