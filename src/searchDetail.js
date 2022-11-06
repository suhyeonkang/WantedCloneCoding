import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./searchDetail.css";
import contentsList from "./searchDetail.json";
import styled from 'styled-components';

const RecruitNotice = (props) => {

    const state = useLocation();
    const searchTerm = state.state;
 


// 채용보상금 숫자 컴마    
    const num = 1000000
    const num_comma = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


// 채용 리스트 스타일 링크 설정 

const StyledLink = styled(Link)`
        text-decoration: none;,
        StyledLink:visited{color : #333};
    `;

// 검색 완료한 리스트 더미데이터 뿌리기
    const dataList2 = contentsList["contentsList"].filter((val) => {
        if(props.searchTerm === "" ) {
            return val
        }else if (val.title.includes(props.searchTerm)){
            return val
        }else if (searchTerm === "") {
            return val
        }else if (val.title.includes(searchTerm)){
            return val
        }
        }).map((list) => (
        
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
            <div class="main_searchResult">
                <div class="searchTitle">
                    <h1>
                        {props.searchTerm || searchTerm}
                    </h1>
                </div>
                <div class="searchTag">
                    <h3>연관 직무 1</h3>
                    <span>{props.searchTerm || searchTerm}</span>
                </div>
                <div class="searchCompany">
                    <div class="searchCompanyTitle">
                        <h3>회사 17</h3>
                        <button> {'<'} </button>
                        <button> {'>'} </button>
                    </div>
                    <div class="searchCompanyList">
                        <div>
                            <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" alt=""></img>
                            <div>
                                <h3>캐롯아이</h3>
                                <p>IT, 컨텐츠</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div>
                            <img src="https://static.wanted.co.kr/images/wdes/0_5.b1b23ec0.jpg" alt=""></img>
                            <div>
                                <h3>퓨처로봇</h3>
                                <p>제조</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div>
                            <img src="https://static.wanted.co.kr/images/wdes/0_5.75c9f4ea.png"></img>
                            <div>
                                <h3>페이브</h3>
                                <p>IT, 컨텐츠</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div>
                            <img src="https://static.wanted.co.kr/images/img_company_empty_new.png"></img>
                            <div>
                                <h3>한국게임개발자협회</h3>
                                <p>예술, 스포츠, 여가</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div>
                            <img src="https://static.wanted.co.kr/images/wdes/0_5.4e3b9887.jpg"></img>
                            <div>
                                <h3>사막여우엔터테인먼트</h3>
                                <p>IT, 컨텐츠</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div>
                            <img src="https://static.wanted.co.kr/images/wdes/0_5.3232ded7.jpg"></img>
                            <div>
                                <h3>똑똑한개발자</h3>
                                <p>IT, 컨텐츠</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="main_navigator">
                <div class="main_navigator_title">
                    <h3>포지션 357 </h3>
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
                </div>
            </div>

            <div class="main_contents_wrapper">

                <div class="main_contents_company">
                    {dataList2}
                </div>

            </div>

        </div>
        </>

    );
};
export default RecruitNotice;