import React, { useState, useRef, useEffect } from 'react';
import "./search.css";
import SearchDetail from "./searchDetail";
import { useNavigate } from 'react-router-dom';

const Search = (props) => {

    const {searchFilter, setSearchFilter} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const inputEl = useRef(null);

    useEffect(()=> {
        inputEl.current.focus();
    }, []);

    
    const closeSearchFilter = () => {
        setSearchFilter(false);
    };

    const linkToSearchDetail = (value) => {
        setSearchTerm(value);
        navigate('/search', {
            state: searchTerm,
        });
        closeSearchFilter();
    };
    


    return (
        <>
        {searchFilter ? (
            
        <>
        <div class="search_main">
           <div class="search_bar">
            <img src="/img/search_icon.png" alt=""/>    
            <input type="search" placeholder="#태그,회사,포지션 검색" onChange={(e) => {setSearchTerm(e.target.value);}} onKeyPress={(e) => linkToSearchDetail(e.target.value)} ref={inputEl}/>
            <img src="/img/close_FILL1_wght400_GRAD0_opsz48.png" alt="" onClick={closeSearchFilter}/>
           </div>
           <div class="search_description">
                <span>추천태그로 검색해보세요</span>
                <button>기업태그 홈 이동하기 {'>'}</button>
           </div>
           <div class="search_tag" >
                <button>#핀테크</button>
                <button>#Macbook</button>
                <button>#퇴사율5%이하</button>
                <button>#과일</button>
                <button>#연봉상위2~5%</button>
           </div> 
        </div>
        <div class="search_background" onClick={closeSearchFilter}> 
        </div>
        </>
    
        ) : null }

        {searchTerm ? <SearchDetail searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
        
        </>

        
    );
    
};

export default Search;