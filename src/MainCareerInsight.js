import "./MainCareerInsight.css";
import dummyData from "./MainCareerInsight.json";

function MainCareerInsight () {
        // 더미데이터 가져와서 뿌려주기
        const contentsList = dummyData.map((content) => (
            <>
            <div class="main2_contents_detail">
                <div class="main2_contents_detail_cover">
                    <div class="main2_mainImg"><img src={content.image} alt=""/></div>
                    <div><h3>{content.title}</h3>
                    <p>{content.desciption}</p>
                    </div>
                    <div class="main2_logo"><img src={content.logo} alt=""/><p>{content.writer}</p></div>
                </div>
            </div>
            </>
        ));

        
    return (
        <>
        <div class = "main_2">
                <div id="main_2_title">
                    <h2>나에게 필요한 커리어 인사이트<i class="fa fa-question-circle-o" aria-hidden="true"></i></h2>
                </div>
                <div id="main_2_nav">
                    <button>조직문화</button>
                    <button>취업/이직</button>
                    <button>IT/기술</button>
                    <button>커리어고민</button>
                    <button>라이프스타일</button>
                    <button>회사생활</button>
                    <button>인간관계</button>
                    <button>리더십</button>
                    <button>HR</button>
                
                </div>
                <div class="main_2_contents">
                    {contentsList}         
                </div>
                
                <div class="main_2_more">
                    <button>더 많은 콘텐츠 보기<img src="data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyMSAxMyIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0icHJlc2VudGF0aW9uIj4KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMC4xMDA1IDIuNzE2OUwxMC45OTMxIDExLjgyNDRDMTAuNDcyNCAxMi4zNDUxIDkuNjI4MTUgMTIuMzQ1MSA5LjEwNzQ1IDExLjgyNDRMLTguMDA4MjllLTA2IDIuNzE2OUwxLjg4NTYxIDAuODMxMjc4TDEwLjA1MDMgOC45OTU5M0wxOC4yMTQ5IDAuODMxMjc4TDIwLjEwMDUgMi43MTY5WiIgLz4KPC9zdmc+Cg==" alt="m2_contents_img17"/></button>
        
                </div>
                <hr id="main_2_finishline"/>
            </div>
            
            </>
    )
}

export default MainCareerInsight;