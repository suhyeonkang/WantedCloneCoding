import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./joinModal.css";
import JoinModalForm from "./joinModalForm";
import {useSelector, useDispatch} from 'react-redux';
import { loginOpen, joinOpen, modalClose, searchOpen, searchClose } from "./modules/modalStore";


const JoinModal = () => {

    const modalOpen = useSelector(state => state.modalOpen);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 이메일유효성이 바뀔 때만 마운트
    useEffect(()=> {
        if(emailValid ) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid]);

    // 이메일 유효성 검사
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = 
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };
   
    return (
        <>
        {modalOpen > 0  ? (
        <div class="join_modal_background" >
            <div class="join_modal">
                <div class="join_modal_header">
                    <div><img src="img/wanted_BI_logotype.png" alt="wanted_bi"/></div>
                    <div><button id="title_close" onClick={()=> dispatch(modalClose())}><img src="img/close_FILL1_wght400_GRAD0_opsz48.png" alt="close"/></button></div>
                </div>
            <div class="join_modal_title">
                <h1>직장인을 위한<br/> 
                    커리어 플랫폼, 원티드!</h1>
                <h2>커리어 성장과 행복을 위한 여정<br/>
                    지금 원티드에서 시작하세요.</h2>
            </div>
            <div class="join_modal_email">
                <span>이메일</span><br/>
                <input 
                    type= "text"
                    placeholder=" 이메일을 입력해 주세요." 
                    onChange={handleEmail} 
                    value={email}
                    pattern={regex} 
                    />
                <div class="errorMessageWrap1">
                {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
                )}
            </div>
            
            </div>
            
            <div class="join_modal_login">
                <button id="join_modal_loginbtn" onClick={()=> dispatch(joinOpen())} disabled={notAllow}><i class="fa fa-envelope-o" aria-hidden="true"></i> 이메일로 계속하기</button>
                <p>or</p>
                <p>다음 계정으로 계속하기</p>
            </div>
            <div class="join_modal_snslogin">
                <div><button><img src="img/kakao.png" alt="kakao"/></button><h3>Kakao</h3></div>
                <div><button><img src="/img/f_logo_RGB-Blue_58.png" alt="facebook"/></button><h3>Facebook</h3></div>
                <div><button><img src="img/google.png"alt="google"/></button><h3>Google</h3></div>
                <div><button><img src="img/apple-logo-coverflow.jpg" alt="apple"/></button><h3>Apple</h3></div>
            </div>
            <div class="join_modal_footer">
                <p>걱정마세요!여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
                    회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.</p>
            </div>
        </div>
        </div>
        ) : null }
        
        {modalOpen > 1 ? <JoinModalForm  email={email}  /> : null}
        </>
    )
}

export default JoinModal;

