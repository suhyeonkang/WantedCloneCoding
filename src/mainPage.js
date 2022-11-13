
import MainSlickSlide from "./mainSlickSlide.js";
import MainCareerInsight from "./MainCareerInsight.js";
import "./index.css";
import {Outlet} from 'react-router-dom';


function mainPage() {
    return (
        <>
            
            <div class="main">
            <MainSlickSlide />
            <MainCareerInsight />

            
            <div class="main_3">
                <div id="main_3_title">
                    <div id="main_3_subtitle">
                    <p>3분만에 읽는 Wanted+ 아티클</p>
                    <button id="main_3_title_viewall">아티클 전체보기 {'>'}</button>
                    </div>
                    <div id="main_3_title_viewmore"><button> {'>'} </button></div>
                </div>
                <div id="main_3_contents">
                    <div id="m3_con1">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2427%2F9d71c6cc.jpg&w=800&q=75"/>
                        <h3>애써 모셔온 시니어,우리 조직엔 안 맞는 사람?</h3>
                        <p>#HR #조직문화 #리더십</p>
                    </div>
                    <div id="m3_con2">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"/>
                        <h3>LG전자 | 애플에서 8년은 일하는 방법을 가르쳐 준 시간</h3>
                        <p>#개발 #IT/기술 #데이터</p>
                    </div>
                    <div id="m3_con3">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75"/>
                        <h3>IP 확장 그리고 글로벌 진출로 세계 선구자가 되다</h3>
                        <p>#미디어 #콘텐츠 제작 #회사생활</p>
                    </div>
                    <div id="m3_con4">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2438%2F9890601e.jpg&w=800&q=75"/>
                        <h3>CX 팀 조직 구조 설계부터 채용 공고 작성법까지</h3>
                        <p>#고객서비스.리테일 #CS/CX #서비스기획</p>
                    </div>
                    
                </div>
                <hr id="main_3_finishline"/>   
            </div>

            <div class="main_4">
                <div id="main_4_title">
                    <div id="main_4_subtitle">
                        <p>직장인을 위한 Wanted+ VOD</p>
                        <button>VOD 전체보기 {'>'}</button>
                    </div>
                    <div id="main_4_title_viewmore"><button> {'>'}</button></div>
                </div>
                <div id="main_4_contents">
                    <div id="m4_con1">
                        <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F46759799.jpg&w=800&q=75"/>
                        <span>41:05</span>
                        <h3>애프터모멘트 박창선</h3>
                        <h2>터지는 콘텐츠는 이렇게 만듭니다 Part 2 : 독자의 마음 - 박창선</h2>
                        <p>터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To</p>
                    </div>
                    <div id="m4_con2">
                        <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&w=800&q=75"/>
                        <span>24:02</span>
                        <h3>전{')'} 원티드랩 최보명</h3>
                        <h2>포트폴리오를 부탁해</h2>
                        <p>[무료] 포트폴리오를 부탁해 by 원티드</p>
                    </div>
                    <div id="m4_con3">
                        <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210609%2F7%2F01781563.jpg&w=800&q=75"/>
                        <span>1:15:37</span>
                        <h3>노무법인미담 김동미</h3>
                        <h2>선택적 근로시간제의 모든 것 (주52시간제 정착 시리즈3)</h2>
                        <p>선택적 근로시간제의 모든 것 (주52시간제 정착 시리즈3) : Wanted HR Open </p>
                    </div>
                    <div id="m4_con4">
                        <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210224%2F8%2F90123633.jpg&w=800&q=75"/>
                        <span>06:47</span>
                        <h3>원티드랩 류다현</h3>
                        <h2>Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 - 서버 배포 방식</h2>
                        <p>(무료) 테스트 코드와 배포 시스템 : Wanted Talk Engineering #1 </p>
                    </div>
                </div>
                <div id="main_4_recommend">
                    <button>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀 {'>'} </button>
                </div>
            </div>

            <div class="main_5">
                <div id="main_5_title">
                    <div id="main_5_subtitle">
                        <p>커리어 성장을 위한 맞춤 이벤트</p>
                        <button id="main_5_viewall">이벤트 전체보기 {'>'}</button>
                    </div>
                    <div id="main_5_viewmore">
                        <button> {'>'} </button>
                    </div>
                </div>
                <div id="main_5_contents">
                    <div id="m5_con1">
                        <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2444%2Fee83ad13.jpg&w=1200&q=100"/></div>
                        <div id="m5_con1_detail">
                            <div>
                            <span class="material-symbols-outlined">online_prediction온라인</span>
                            <span>교육</span>
                            </div>
                            <h3>프리온보딩 백엔드 코스</h3>
                            <p>2022.10.20 (목)</p>
                        </div>
                    </div>
                    <div id="m5_con2">
                        <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=1200&q=100"/></div>
                        <div id="m5_con2_detail">
                            <div><span>아티클</span></div>
                            <h3>기업의 성공을 리드하는 번개장터 마케터의 데이터</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main_6">
                <div id="m6_con1">
                    <h3>wanted + 구독해야 하는 이유</h3>
                    <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                    <button><span class="material-symbols-outlined">
                        </span>첫 구독 0원 신청하기</button>
                </div>
                <div id="m6_con2">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"/>
                </div>
            </div>

            <div class="main_7">
                <div id="m7_con1"><h3>채용 정보를 찾고 계셨나요?</h3></div>
                <div id="m7_con2">
                    <div>
                        <img src="img/search_FILL0_wght400_GRAD200_opsz48.png"/>
                        <h3>채용공고 {'>'} </h3>
                    </div>
                    <div>
                        <img src="img/person_FILL0_wght400_GRAD200_opsz48.png"/>
                        <h3>내 프로필 {'>'}</h3>
                    </div>
                    <div>
                        <img src="img/apartment_FILL0_wght400_GRAD200_opsz48.png"/>
                        <h3>매치업 {'>'} </h3>
                    </div>
                    <div>
                        <img src="img/tune_FILL0_wght400_GRAD200_opsz48.png"/>
                        <h3>직군별 연봉 {'>'} </h3>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default mainPage;