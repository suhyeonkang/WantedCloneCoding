import { Outlet } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return(
        <>
        
        <div class = "footer">
            <div id="foot_con1">
                <div id="foot_con1_logo">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="footer_logo"/>
                </div>
                <div id="foot_con1_nav">
                    <h3>기업소개</h3>
                    <h3>이용약관</h3>
                    <h3>개인정보 처리방침</h3>
                    <h3>고객센터</h3>

                </div>
                <div id="foot_con1_sns">
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100" alt="instagram_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100" alt="youtube_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100" alt="facebook_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100" alt="blog_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100" alt="kakao_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100" alt="naver_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100" alt="apple_logo"/></div>
                    <div><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100" alt="googleplay_logo"/></div>
                </div>
            </div>
            <hr id="foot_con1_finishline"/>
            <div id="foot_con2">
                <div id="foot_con2_address">
                    <p>(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147</p>
                    <p>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 200-86-00021 | 02-539-7118</p>
                    <p>ⓒ Wantedlab, Inc.</p>
                </div>
                <div id="foot_con2_lan">
                    <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="korea_flag"/>
                    <select>
                        <option value="KR"> 한국 (한국어) </option> 
                        <option value="JP"> 日本 (日本語)</option>
                        <option value="WW">Worldwide (English)</option>
                        <option value="SG">Singapore (English)</option>
                    </select>
                    <span class="material-symbols-outlined"></span>

                </div>
            </div>
        </div>
        
        </>
    )
}

export default Footer;