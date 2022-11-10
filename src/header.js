import React, { useState, useRef} from "react";
import {Outlet, Link} from "react-router-dom";
import JoinModal from "./joinModal";
import "./header.css";
import Recruit from './recruit';
import styled from 'styled-components';
import Search from "./search";
import {useSelector, useDispatch} from 'react-redux';
import { loginOpen, joinOpen, modalClose, searchOpen, searchClose } from "./modules/modalStore";





const Header = () => {

    // 회원가입 모달창 띄우는 부분
    // 검색창 모달창 띄우는 부분

    const modalOpen = useSelector(state => state.modalOpen);
    const searchFilter = useSelector(state => state.searchFilter);
    const dispatch = useDispatch();

    
    // 드롭다운 메뉴 hovering
    const [isHovering, setIsHovering] = useState(0);

    const StyledLink = styled(Link)`
        text-decoration: none;,
        StyledLink:visited{color : #333};
    `;

    const StyledLink2 = styled(Link)`
        &:hover{color : #36f};
        text-decoration: none;,
        font-weight: 800;,
        StyledLink2:visited {color: #333};
    `;

    // 직군별 드롭다운 메뉴 hovering
    const [isHoveringContents, setIsHoveringContents] = useState(0);
    const StyledLink3 = styled(Link)`
        &: hover{color: #36f};
        text-decoration: none;,
        font-weight: 600;,
        StyledLink3:visited {color: #333};
    `;
    

    return(
        <>
        <div className = "header">
            <div className = "header_child1">
                <div className="header_menu1">
                    
                    <div id="menu1_hamberger"
                        onMouseOver = {() => setIsHovering(true)}>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamburger"/>
                    </div>
                   
                    <div id="menu1_logo">
                        <Link to="/">
                        <img src="img/wanted_BI_logotype.png" alt="BI_logo"/>
                        </Link>
                    </div>
                </div>
                <div className="header_menu2">
                    <div><StyledLink to="/recruit">채용</StyledLink></div>
                    <div>이벤트</div>
                    <div>직군별 연봉</div>
                    <div>이력서</div>
                    <div>커뮤니티<em>New</em></div>
                    <div>프리랜서</div>
                    <div>AI 합격예측<em>Beta</em></div>
                </div>
                <div className="header_menu3">
                    <div id="menu3_search" onClick={()=> dispatch(searchOpen())}><img src="/img/search_icon.png" alt=""/></div>
                    <div id="menu3_join"><button id="menu3_join_btn" onClick={() => dispatch(loginOpen())}>회원가입/로그인</button></div>
                    <div id="menu3_divider"></div>
                    <div id="menu3_service">기업 서비스</div>
                </div>    
            </div>
            {isHovering ? (
            <div className="dropdown-content"
                onMouseLeave={() => setIsHovering(false)}>
                <span><StyledLink2 >직군 전체</StyledLink2></span>
                <span onMouseOver={() => setIsHoveringContents(true)}><StyledLink2>개발</StyledLink2></span>
                    {isHoveringContents ? ( 
                    <div class="dropdown-develope" onMouseLeave={() => setIsHoveringContents(false)}>
                                <span><StyledLink3 to ="/developeAll">개발 전체</StyledLink3></span>
                                <span><StyledLink3>웹 개발자</StyledLink3></span>
                                <span><StyledLink3>서버 개발자</StyledLink3></span>
                                <span><StyledLink3>소프트웨어 엔지니어</StyledLink3></span>
                                <span><StyledLink3>프론트엔드 개발자</StyledLink3></span>
                                <span><StyledLink3>자바 개발자</StyledLink3></span>
                                <span><StyledLink3>안드로이드 개발자</StyledLink3></span>
                                <span><StyledLink3>C,C++ 개발자</StyledLink3></span>
                                <span><StyledLink3>iOS 개발자</StyledLink3></span>
                                <span><StyledLink3>파이썬 개발자</StyledLink3></span>
                                <span><StyledLink3>데이터 엔지니어</StyledLink3></span>
                                <span><StyledLink3>Node.js 개발자</StyledLink3></span>
                                <span><StyledLink3>DevOps / 시스템 관리자</StyledLink3></span>
                                <span><StyledLink3>시스템, 네트워크 관리자</StyledLink3></span>
                                <span><StyledLink3>머신러닝 엔지니어</StyledLink3></span>
                                <span><StyledLink3>개발 매니저</StyledLink3></span>
                                <span><StyledLink3>데이터 사이언티스트</StyledLink3></span>
                                <span><StyledLink3>기술지원</StyledLink3></span>
                                <span><StyledLink3>빅데이터 엔지니어</StyledLink3></span>
                                <span><StyledLink3>QA, 테스트 엔지니어</StyledLink3></span>
                                <span><StyledLink3>보안 엔지니어</StyledLink3></span>
                                <span><StyledLink3>프로덕트 매니저</StyledLink3></span>
                                <span><StyledLink3>임베디드 개발자</StyledLink3></span>
                                <span><StyledLink3>블록체인 플랫폼 엔지니어</StyledLink3></span>
                                <span><StyledLink3>PHP 개발자</StyledLink3></span>
                                <span><StyledLink3>하드웨어 엔지니어</StyledLink3></span>
                                <span><StyledLink3>.NET 개발자</StyledLink3></span>
                                <span><StyledLink3>DBA</StyledLink3></span>
                                <span><StyledLink3>웹 퍼블리셔</StyledLink3></span>
                                <span><StyledLink3>영상,음성 엔지니어</StyledLink3></span>
                                <span><StyledLink3>크로스플랫폼 앱 개발자</StyledLink3></span>
                                <span><StyledLink3>그래픽스 엔지니어</StyledLink3></span>
                                <span><StyledLink3>CTO,Chief Technology</StyledLink3></span>
                                <span><StyledLink3>ERP전문가</StyledLink3></span>
                                <span><StyledLink3>BI 엔지니어</StyledLink3></span>
                                <span><StyledLink3>VR 엔지니어</StyledLink3></span>
                                <span><StyledLink3>루비온레일즈 개발자</StyledLink3></span>
                                <span><StyledLink3>CIO, Chief Information </StyledLink3></span>
                            </div>) : null}
                                
                <span><StyledLink2>경영·비즈니스</StyledLink2></span>
                <span><StyledLink2>마케팅·광고</StyledLink2></span>
                <span><StyledLink2>디자인</StyledLink2></span>
                <span><StyledLink2>영업</StyledLink2></span>
                <span><StyledLink2>고객서비스·리테일</StyledLink2></span>
                <span><StyledLink2>HR</StyledLink2></span>
                <span><StyledLink2>게임 제작</StyledLink2></span>
                <span><StyledLink2>미디어</StyledLink2></span>
                <span><StyledLink2>엔지니어링·설계</StyledLink2></span>
                <span><StyledLink2>금융</StyledLink2></span>
                <span><StyledLink2>제조·생산</StyledLink2></span>
                <span><StyledLink2>물류·무역</StyledLink2></span>
                <span><StyledLink2>의료·제약·바이오</StyledLink2></span>
                <span><StyledLink2>교육</StyledLink2></span>
                <span><StyledLink2>식·음료</StyledLink2></span>
                <span><StyledLink2>법률·법집행기관</StyledLink2></span>
                <span><StyledLink2>건설·시설</StyledLink2></span>
                <span><StyledLink2>공공·복지</StyledLink2></span>
                <span><StyledLink2>프리랜서</StyledLink2></span>
        </div>): null}                      
    </div>
        
        {modalOpen > 0 ? <JoinModal /> : null }
        {searchFilter ? <Search /> : null}

        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Header;


