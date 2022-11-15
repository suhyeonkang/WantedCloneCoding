import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./password.css";
import JoinModalForm from "./joinModalForm";
import {useSelector, useDispatch} from 'react-redux';
import { loginOpen, joinOpen, modalClose, searchOpen, searchClose } from "./modules/modalStore";
import { loginStatus } from "./modules/loginStore";


const Password = () => {

   const modalOpen = useSelector(state => state.reducer.modalOpen);
   const dispatch = useDispatch();
   
   let sessionStorage = window.sessionStorage;
   const pw = sessionStorage.getItem('Pw');

   const [confirmPw, setConfirmPw] = useState('');

   const handlePw = e => {
     setConfirmPw(e.target.value);
   };

   const login = () => {
    if(pw === confirmPw) {
        dispatch(loginStatus());
        dispatch(modalClose());
    }else {
        alert('비밀번호를 다시 확인해주세요');
    }
   }


   
    return (
        <>
        {modalOpen === 3 ? (

        <div className="password_background" >
            <div className="password_wrapper">
                <div className="password_header">
                    <div><h1>이메일로 로그인</h1></div>
                </div>
            
                <div className="password_input">
                    <span>비밀번호</span><br/>
                    <input 
                        type= "password"
                        placeholder=" 비밀번호를 입력해 주세요." 
                        onChange={handlePw}
                    />
            
                </div>
            
                <div className="password_next">
                    <button id="password_nextBtn" onClick={login} ><i class="fa fa-envelope-o" aria-hidden="true"></i> 다음</button>
                </div>
                <div className="password_change">
                    <div><button>비밀번호 초기화/변경</button></div>
                </div>
           
            </div>
        </div>
        
       
        ) : null }
         </>
    )
}

export default Password;

