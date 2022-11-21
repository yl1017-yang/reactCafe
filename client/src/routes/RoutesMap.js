import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main";
import BoardList from "../pages/BoardList";
import BoardDetail from "../pages/BoardDetail";
import BoardWrite from "../pages/BoardWrite";
import Product from "../pages/Product";
// import SalesDetail from "../pages/SalesDetail";
// import Menu from "../pages/Menu";
// import MenuPermission from "../pages/MenuPermission";
import NoLayout from "../pages/NoLayout";

//라우터 링크 내용 https://velog.io/@hwang-eunji/React-Route-%EA%B8%B0%EB%B3%B8%EC%84%A4%EC%A0%95

const NotFound = () => {
	return (
		<Link to="..">
			<p>404 페이지</p>
			<p>없는 페이지임</p>
		</Link>
	);
};

function RoutesMap(props) {
	return (
    // PUBLIC_URL은 package.json의 homepage URL값으로 설정
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <BrowserRouter> */}
      <Routes>
				<Route exact path="/" element={<Layout />}>
					<Route path="/" element={<Main />} />
          <Route path="BoardList" element={<BoardList />} />
          <Route path="BoardDetail/:id" element={<BoardDetail />} />
          <Route path="BoardWrite" element={<BoardWrite />} />					
					<Route path="Product" element={<Product />} />
          {/* <Route path="/SalesDetail" element={<SalesDetail />} /> */}
					{/* <Route path="/Menu" element={<Menu />} /> */}
					{/* <Route path="/MenuPermission" element={<MenuPermission />} /> */}
				</Route>
				<Route path="/no-layout" element={<NoLayout />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesMap;