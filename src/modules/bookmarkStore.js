import React from "react";
import dummyData1 from '../recruitNotice.json';

// 액션 타입 정의

const BookmarkIn = 'bookmarkStore/bookmarkIn';
const BookmarkOut = 'booknarkStore/bookmarkOut';

// 액션 생성 함수

export const bookmarkIn = id => ({
    type: BookmarkIn,
    id
});

export const bookmarkOut = id => ({
    type: BookmarkOut,
    id
});

// 초기 상태 및 리듀서 함수

const initialstate = {
    bookmarkList: []
};

const bookmarkReducer = (state = initialstate, action) => {
    switch(action.type) {

        case BookmarkIn :
            return {
                ...state,
                bookmarkList: state.bookmarkList.concat(action.id)
            } 
            
        case BookmarkOut :
            return {
                ...state, 
                bookmarkList: state.bookmarkList.filter(id =>
                    id !== action.id)};
        default : 
            return state;        
    }
};

export default bookmarkReducer;