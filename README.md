# reactCafe
https://yl1017-yang.github.io/reactCafe/

# 폴더구조
참고 : https://github.com/sosohanya/sosohanya-react-admin/tree/003_layout \
https://sosohanya.tistory.com/116 \ 

/src/assets : styles, images, font 등 리소스 모음 \
/src/commons : 컴포넌트가 아닌 순수 자바스크립트 공통 함수들 모음 \
/src/components : Header / Lnb / 페이징 등 전반적인 페이지에서 공통으로 쓰는 컴포넌트 모음 \
/src/layouts : 전체 레이아웃 영역 부분 \
/src/pages : Contents 부분에 보여질 컴포넌트 모음, route로 이동하도록 할 예정 \
/src/routes : Routes 파일

# 리액트 설치
npx create-react-app client \
npm install -save gh-pages

# Router 설치
npm install react-router-dom --save

# 부트스트랩 설치
npm install bootstrap --save \
https://react-bootstrap.github.io/layout/breakpoints/

# 리액트아이콘 설치
npm install react-icons --save \
npm install @react-icons/all-files --save \
npm install react-bootstrap-icons --save \
https://react-icons.github.io/react-icons/icons?name=bs


### `client / server`

http://localhost:3000/ \
http://localhost:5000/api

### `npm start`

cd client > npm install nodemon --save \
cd client > npm install concurrently --save \
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

cd / client
### `npm run build`

build 폴더 배포

cd / client
### `npm run deploy`

gitHub 배포

### `참고화면`

https://github.com/esyeon88/simple-react-board \
게시판 만들기
https://velog.io/@e2un_9991/React-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0-oaw999qw