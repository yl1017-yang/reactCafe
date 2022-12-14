// 리액트 링크 : https://react-router.vlpt.us/1/03.html
// css 수정 : https://think0wise.tistory.com/m/24
// 아이콘: https://react-icons.github.io/react-icons/icons?name=sl
// https://velog.io/@sangbin2/NavLink-%EC%82%AC%EC%9A%A9%EB%B2%95
// https://blog.naver.com/PostView.naver?blogId=azanghs&logNo=222827522522
// https://samtao.tistory.com/32

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { SlHome, SlPeople, SlSettings } from "react-icons/sl";

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-util">
      <Container fluid="xxl">
          <Navbar.Brand onClick={() => { navigate('/') }}>YANG CAFE</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link onClick={() => { navigate('/') }}><SlHome size="18" /> 메인</Nav.Link>
              <Nav.Link onClick={() => { navigate('Product') }}><SlPeople size="18" /> 관리자</Nav.Link> */}
              {/* <Nav.Link onClick={() => { navigate('Integrate') }}><SlSettings size="18" /> 현황</Nav.Link> */}
              {/* <Nav.Link href="/reactCafe/#">Home</Nav.Link>
              <Nav.Link href="/reactCafe/#Page1">Features</Nav.Link>
              <Nav.Link href="/reactCafe/#Page2">Pricing</Nav.Link> */}
            </Nav>

            <div className="text-state">
              <span>하지원</span>님 로그인 상태입니다
            </div>
            <Button variant="primary" size="sm">로그인</Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="primary" variant="dark" className="header-nav" sticky="top">
        <Container fluid="xxl">
          <Nav className="flex-wrap">
            <Nav.Link onClick={() => { navigate('/') }}>메인</Nav.Link>
            <Nav.Link onClick={() => { navigate('BoardList') }}>게시판 리스트</Nav.Link>
            <Nav.Link onClick={() => { navigate('Product') }}>상품 리스트</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate('SalesDetail') }}>매출상세조회</Nav.Link> */}
            {/* <Nav.Link onClick={() => { navigate('Menu') }}>메뉴관리</Nav.Link> */}
            {/* <Nav.Link onClick={() => { navigate('MenuPermission') }}>메뉴권한관리</Nav.Link> */}
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;