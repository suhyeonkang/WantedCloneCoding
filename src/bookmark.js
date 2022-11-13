import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import "./bookmark.css";
import recruitData from './recruitNotice.json';
import styled from "styled-components";
import { bookmarkIn } from "./modules/bookmarkStore";

const ShowBookmark = () => {

    // 채용보상금 숫자 컴마    
    const num = 1000000
    const num_comma = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const StyledLink = styled(Link)`
        text-decoration: none;,
        StyledLink:visited{color : #333};
    `;

    const dispatch = useDispatch();
    const select = useSelector(state => state.bookmarkReducer.bookmarkList);

    const bookMark = (e) => {
        if(select.includes(e.target.id)){
            dispatch({type: 'bookmarkStore/bookmarkOut', id : e.target.id});   
        } else {
            dispatch({type: 'bookmarkStore/bookmarkIn', id : e.target.id}); 
        }
        
        
    }

    // 북마크 한 데이터 뿌리기 

    const bookmarkList = useSelector(state => state.bookmarkReducer.bookmarkList);
    
    const filterList = recruitData["recruitList"].filter((id) => {
       if( bookmarkList.includes(id.id)){
        return id
       }
    }).map((list) => (
        <>
        <div class="company1" id="com1">
            <div class="container">
                <div >
                    <StyledLink to={`/developeAll/${list.id}`} key={list.id}>
                    <img src={list.mainImg} alt="" ></img>
                    </StyledLink>
                    <button ><img src={list.bookmarkImg} onClick={bookMark} id={list.id} alt=""></img></button>
                </div>

                <StyledLink to={`/developeAll/${list.id}`} key={list.id}>
                <div>
                    <h1>{list.title}</h1>
                    <h2>{list.companyName}</h2>
                    <span>{list.response}</span>
                    <h3>{list.location}</h3>
                    <p>{list.reward} {num_comma}원</p>
                </div>
                </StyledLink>
            </div>
            
        </div>
        </>
    ))
    
    return(
        <div class="main">
            <div class="container">
                <h3> 북마크 </h3>
                <div className="bookmarkList">
                    {filterList}
                </div>
            </div>
        </div>
    )
}

export default ShowBookmark;