# Wanted 사이트 클론 코딩 

JavaScript와 React 스터디를 위한 Wanted 사이트 클론 코딩 

## 폴더 구조 및 파일 설명

### `public`

공통으로 쓰이는 Image, font 파일 등을 저장한 폴더 

### `public/img`

페이지에 쓰이는 Image 파일들을 모두 저장한 폴더 

### `src/modules`

Redux를 사용하여 전역 상태 관리를 진행하는 데이터의 Store와 Reducer를 구현, 저장한 폴더 

- bookmarkStore.js 
  채용 공고의 북마크 상태를 관리하는 store
- combineReducer.js 
  여러개의 Store를 root Store로 합치는 combineReducer
- loginStore.js
  로그인 / 로그아웃 상태를 관리하는 store
- modalStore.js
  모달창의 on, off 상태를 관리하는 store

### `src/slick`

slick slider 라이브러리 폴더 

### `src/App.js`

### `src/MainCareerInsight.js`

원티드 사이트의 초기 페이지에 들어갈 인사이트, 강의 정보에 대한 card 등을 구현
- 자주 변경되어 보여지는 정보로 컴포넌트로 분리하여 구현함 
- mainPage.js에서는 이 컴포넌트를 import 해서 사용함 

### `src/bookmark.js`

채용 공고 중 유저가 북마크 표시를 한 공고만 볼 수 있는 기능 및 페이지 구현 

### `src/footer.js`

공통 되는 footer를 컴포넌트로 분리하여 별도로 구현 및 적용함 

### `src/header.js`

공통 되는 header를 컴포넌트로 분리하여 별도로 구현 및 적용함 
(원티드 사이트의 네비게이터 바 부분)

### `src/index.js`

초기 설정 

### `src/joinModal.js`

로그인 버튼을 클릭했을 때 표시되는 로그인 모달창을 구현 

### `src/joinModalForm.js`

회원가입이 되어 있지 않은 유저의 경우 회원가입을 할 수 있는 모달창을 보여줄 수 있도록 구현 

### `src/mainPage.js`

원티드 사이트의 초기 페이지를 구현
- 채용 정보에 대한 carousel (slick-slider) 
- 인사이트, 강의 정보에 대한 card 등을 컴포넌트로 import 하여 보여줌 

### `src/mainSlickSlide.js`

메인페이지에 들어갈 carousel 부분 구현 
- carousel에 보여지는 정보가 주기적으로 변경되기 때문에 유지보수에 용이하도록 컴포넌트로 구현함 

### `src/password.js`

### `src/recruit.js`

채용 정보를 모아서 볼 수 있는 페이지 
mainPage의 header에서 '개발'을 클릭하면 볼 수 있음 

### `src/recruitBluebeaker.js`

채용 정보를 상세 정보로 확인할 수 있는 페이지 
- 클론 코딩에서는 bluebeaker라는 회사의 채용 공고를 바탕으로 클론 코딩 진행 

### `src/recruitNotice.js`

### `src/search.js`

검색 기능을 구현 
원하는 키워드를 검색하면 해당 키워드를 포함하고 있는 채용 공고를 찾아서 보여줌 
(예) '프론트' 검색 -> '프론트'를 포함하고 있는 채용 공고를 찾아 보여줌 

### `src/searchDetail.js`

