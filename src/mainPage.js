
import MainSlickSlide from "./mainSlickSlide.js";
import MainCareerInsight from "./MainCareerInsight.js";
import "./mainPage.css";
import mainPageData from "./mainPage.json";
import styled from "styled-components";

function mainPage() {

    //3분만에 읽는 아티클 데이터 뿌리기 
    const threeminutesList = mainPageData["3minutes"].map((list) => (
        <>
        <div className = "articleList" key={list.id}>
            <img src={list.img} alt=""></img>
            <h3>{list.title}</h3>
            <p>{list.tag}</p>
        </div>
        </>
    ));

    //wanted vod 컨텐츠 데이터 뿌리기
    const wantedVodList = mainPageData["wantedVod"].map((list) => (
        <>
        <div className= "vodList" key={list.id}>
            <img src={list.img} alt=""/>
            <span>{list.time}</span>
            <h3>{list.writer}</h3>
            <h2>{list.title}</h2>
            <p>{list.discription}</p>         
        </div>
        </>
    ))

    // 반복되는 CSS 요소를 styled-component로 반영 
    
    const ContentsWrapper = styled.div`
        display: flex;
        flex-direction: ${props => props.fdirection || "column"};
        width: ${props => props.width || "1080px"};
        height: ${props => props.height || "580px"};
        padding: 30px 0px 0px 0px;
    `;

    const ContentsTitle = styled.div`
        text-align: center;
        height: 50px;
        color: #333333;
        font-size: 22px;
        display: flex;
        flex-direction: row;
        flex-basis: 1;
        justify-content: center;
    `;

    const Subtitle = styled.p`
        font-size: 22px;
        font-weight: 700;
        color: #333333;
    `;

    const Button = styled.button`
        font-size: 16px;
        font-weight: 500;
        color: #767676;
        background-color: white;
        border: ${props => props.border || "none"};
        width: ${props => props.width || "auto"};
        height: ${props => props.height || "auto"};
        border-radius: ${props => props.radius || "0"};
        vertical-align: middle;
        margin-top: 3px;
    `

    const FinishLine = styled.hr`
        width: 1080px;
        border: 1px solid #e1e2e3;
    `;

    return (
        <>
            
            <div class="main">
            <MainSlickSlide />
            <MainCareerInsight />

            {/* 3분만에 읽는 아티클 */}
            <ContentsWrapper>
            
                <ContentsTitle>
                    <div>
                        <Subtitle>3분만에 읽는 Wanted+ 아티클</Subtitle>
                        <Button>아티클 전체보기 {'>'}</Button>
                    </div>
                    <div id="main_3_title_viewmore">
                        <Button border="1px solid #e1e2e3" width="36px" height="36px" radius="50%"> {'>'} </Button>
                    </div>
                </ContentsTitle>
                
               
                <ContentsWrapper fdirection="row" width="1080px" height="340px" >
                    {threeminutesList}
                </ContentsWrapper>
               

                <FinishLine />    
            </ContentsWrapper>
            
            {/* 직장인을 위한 Wanted+ VOD */}

            <ContentsWrapper>
            
                <ContentsTitle>
                    <div>
                        <Subtitle>직장인을 위한 Wanted+ VOD</Subtitle>
                        <Button>VOD 전체보기 {'>'}</Button>
                    </div>
                    <div id="main_4_title_viewmore">
                    <Button border="1px solid #e1e2e3" width="36px" height="36px" radius="50%"> {'>'} </Button>
                    </div>
                </ContentsTitle>
                
                <ContentsWrapper fdirection="row" width="1080px" height="340px" >
                    {wantedVodList}
                </ContentsWrapper>
                
                <div id="main_4_recommend">
                    <button>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀 {'>'} </button>
                </div>
            
            </ContentsWrapper>

            {/* 커리어 성장을 위한 맞춤 이벤트 */}
            
            <ContentsWrapper>
                <ContentsTitle>
                    <div>
                        <Subtitle>커리어 성장을 위한 맞춤 이벤트</Subtitle>
                        <Button>이벤트 전체보기 {'>'}</Button>
                    </div>
                    <div id="main_5_viewmore">
                    <Button border="1px solid #e1e2e3" width="36px" height="36px" radius="50%"> {'>'} </Button>
                    </div>
                </ContentsTitle>    
                
                <ContentsWrapper fdirection="row" height="360px">
                    <div id="m5_con1">
                        <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2444%2Fee83ad13.jpg&w=1200&q=100" alt=""/></div>
                        <div id="m5_con1_detail">
                            <div>
                            <span>온라인</span>
                            <span>교육</span>
                            </div>
                            <h3>프리온보딩 백엔드 코스</h3>
                            <p>2022.10.20 (목)</p>
                        </div>
                    </div>
                    <div id="m5_con2">
                        <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=1200&q=100" alt=""/></div>
                        <div id="m5_con2_detail">
                            <div><span>아티클</span></div>
                            <h3>기업의 성공을 리드하는 번개장터 마케터의 데이터</h3>
                        </div>
                    </div>
                
                </ContentsWrapper>
            </ContentsWrapper>    
            

            <div class="main_6">
                <div id="m6_con1">
                    <h3>wanted + 구독해야 하는 이유</h3>
                    <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                    <button><span class="material-symbols-outlined">
                        </span>첫 구독 0원 신청하기</button>
                </div>
                <div id="m6_con2">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" alt=""/>
                </div>
            </div>

            <div class="main_7">
                <div id="m7_con1"><h3>채용 정보를 찾고 계셨나요?</h3></div>
                <div id="m7_con2">
                    <div>
                        <img src="img/search_FILL0_wght400_GRAD200_opsz48.png" alt=""/>
                        <h3>채용공고 {'>'} </h3>
                    </div>
                    <div>
                        <img src="img/person_FILL0_wght400_GRAD200_opsz48.png" alt=""/>
                        <h3>내 프로필 {'>'}</h3>
                    </div>
                    <div>
                        <img src="img/apartment_FILL0_wght400_GRAD200_opsz48.png" alt=""/>
                        <h3>매치업 {'>'} </h3>
                    </div>
                    <div>
                        <img src="img/tune_FILL0_wght400_GRAD200_opsz48.png" alt=""/>
                        <h3>직군별 연봉 {'>'} </h3>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default mainPage;