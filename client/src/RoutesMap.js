import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Integrate from "./pages/Integrate";
import SalesDetail from "./pages/SalesDetail";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import MenuPermission from "./pages/MenuPermission";
import NoLayout from "./pages/NoLayout";

//라우터 링크 내용 https://velog.io/@hwang-eunji/React-Route-%EA%B8%B0%EB%B3%B8%EC%84%A4%EC%A0%95

const NotFound = () => {
	return (
		<Link to="..">
			<p>404 페이지</p>
			<p>없는 페이지임</p>
		</Link>
	);
};

function RoutesMap() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/reactCafe/" element={<Layout />}>
					<Route path="/reactCafe/" element={<Main />} />
          <Route path="Integrate" element={<Integrate />} />
					<Route path="SalesDetail" element={<SalesDetail />} />
					<Route path="Product" element={<Product />} />
					<Route path="Menu" element={<Menu />} />
					<Route path="MenuPermission" element={<MenuPermission />} />
				</Route>
				<Route path="/reactCafe/no-layout" element={<NoLayout />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesMap;