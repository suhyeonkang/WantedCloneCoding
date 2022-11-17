import Slider from "react-slick"
import React  from "react"
import "./index.css"

function MainSlickSlide () {

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            slide: 'div',
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: true,
            centerMode: true,
            variableWidth: true,
            vertical: false,
            // prevArrow: 
            // "<button type='button' class='slide-arrow next-arrow'><</button>",
            // nextArrow:
            // "<button type='button' class='slide-arrow next-arrow'>></button>", 

        };
        return (
                <>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            <div className="main_1">
                <Slider {...settings} >
                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&w=1060&q=100" alt="main_slide_img1"></img>
                    <div>
                        <h2>마키나락스에 세로들어와!</h2>
                        <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.jpg&w=1060&q=100" alt="main_slide_img2"></img>
                    <div>
                        <h2>롯데헬스케어에 세로들어와!</h2>
                        <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100" alt="main_slide_img3"></img>
                    <div>
                        <h2>[FREE] GDSC Job Fair Live</h2>
                        <h3>국내 최고 스타트업 채용소식을 볼 수 있는 기회!</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100" alt="main_slide_img4"></img>
                    <div>
                        <h2>Statup Lead Group Coaching</h2>
                        <h3>팀장을 위한 그룹코칭</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100" alt="main_slide_img5"></img>
                    <div>
                        <h2>원티드긱스 {'<'}개발자의 달{'>'}</h2>
                        <h3>프리랜서 개발자를 위한 이벤트</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="main_slide_img6"></img>
                    <div>
                        <h2>기업이 원하는 프론트 개발자 되기</h2>
                        <h3>프리온보딩 프론트엔드 코스</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100" alt="main_slide_img7"></img>
                    <div>
                        <h2>우리 회사를 소개합니다.</h2>
                        <h3>'회사'에 대한 정보, 원티드가 찾아드릴게요!</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1850%2F43625ed8.jpg&w=1060&q=100" alt="main_slide_img8"></img>
                    <div>
                        <h2>10월 원티드살롱</h2>
                        <h3>HR담당자를 위한 네트워킹</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1853%2F2464b111.jpg&w=1060&q=100" alt="main_slide_img9"></img>
                    <div>
                        <h2>리텐션 높이는 '아하 모먼트'를 찾아서</h2>
                        <h3>성공을 리드하는 번개장터 마케터</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>

                <div id="main_1_slide">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1852%2F41073f1a.jpg&w=1060&q=100" alt="main_slide_img10"></img>
                    <div>
                        <h2>단 4주! 백엔드 신입딱지 떼기</h2>
                        <h3>프리온보딩 백엔드 코스</h3><hr/>
                        <button>바로가기 {'>'} </button>
                       
                    </div>
                </div>
            </Slider>
            </div>
       
        </>   
        );
    }

export default MainSlickSlide;


