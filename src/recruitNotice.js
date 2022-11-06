import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./recruitNotice.css";
import dummyData1 from "./recruitNotice.json";
import styled from 'styled-components';

const RecruitNotice = () => {

    

// 채용보상금 숫자 컴마    
    const num = 1000000
    const num_comma = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// 적극 채용 중인 회사 더미데이터 뿌리기
    const companyContents = dummyData1["company"].map((content) => (
        <>
        <div class="list">
            <div><img src={content.mainImg}  alt=""/></div>
            <div><img src={content.logo} alt=""/></div>
            <div>
                <h3>{content.companyName}</h3>
                <p>{content.numPosition}</p>
            </div>
        </div>
        </>

    ));

// 채용 리스트 스타일 링크 설정 

const StyledLink = styled(Link)`
        text-decoration: none;,
        StyledLink:visited{color : #333};
    `;

// 채용 리스트 더미데이터 뿌리기
    const recruitList = dummyData1["recruitList"].map((list) => (
        <>
        <div class="company1" id="com1">
            <StyledLink to={`/developeAll/${list.id}`} key={list.id}>
            <div >
                <img src={list.mainImg} alt=""/>
                <h1>{list.title}</h1>
                <h2>{list.companyName}</h2>
                <span>{list.response}</span>
                <h3>{list.location}</h3>
                <p>{list.reward} {num_comma}원</p>
            </div>
            </StyledLink>
        </div>
        </>
    ))


    
    return(
        <>
    
        <div class="main">
            <div class="main_navigator">
                <div class="main_navigator1">
                    <div id="main_navigator1_select">
                        <button>
                            <span>개발</span>
                            <span><img src="./img/expand_more_FILL0_wght400_GRAD0_opsz48.png"/></span>
                        </button>
                    </div>
                    <div></div>
                    <div id="main_navigator1_select1">
                        <button>
                            <span>개발 전체</span>
                            <span><img src="./img/expand_more_FILL0_wght400_GRAD0_opsz48.png"/></span>
                        </button>
                    </div>
                </div>

                <div class="main_navigator2">
                    <div class="main_navigator2_select1">
                        <span>지역</span>
                        <span>한국</span>
                    </div>
                    <div class="main_navigator2_select2">
                        <span>경력</span>
                        <span>전체</span>
                        <span><img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.png"/></span>
                    </div>
                    <div class="main_navigator2_select3">
                        <span>기술스택</span>
                        <span><img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.png"/></span>
                    </div>
                    <div class="main_navigator2_select4">
                        <span>응답률순</span>
                        <span><img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.png"/></span>
                    </div>
                </div>
                <hr id="main_navigator2_finishline"/>
                <div class="main_category">
                    <div class="main_category_detail">
                        <div id="detail1"><button>연봉이 최고의 복지<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"/></button></div>
                        <div id="detail2"><button>재택근무<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"/></button></div>
                        <div id="detail3"><button>퇴사율 10% 이하<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"/></button></div>
                        <div id="detail4"><button>급성장 중<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"/></button></div>
                        <div id="detail5"><button>병역특례<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"/></button></div>
                        <div id="detail6"><button>50인 이하<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75"/></button></div>
                        <div id="detail7"><button>50인 이상<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75"/></button></div>
                        <div id="detail8"><button>업력 5년 이상<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75"/></button></div>
                    </div>
                    <div class="main_category_arrow">
                        <button><img src="./img/chevron_right_FILL0_wght400_GRAD0_opsz48.png"/></button>
                    </div>
                </div>
            </div>

            <div class="main_contents_wrapper">
                <div class="main_contents_title">
                    <button id="bookmark_btn"><img src="img/bookmark.png" alt="bookmark"/>북마크 모아보기 {'>'} </button>
                    <h3>적극 채용 중인 회사</h3>
                </div>

                <div class="main_contents_list">
                        {companyContents}
                </div>

                <div class="main_contents_company">
                    {recruitList}
                </div>

            </div>

        </div>
        </>

    );
};
export default RecruitNotice;