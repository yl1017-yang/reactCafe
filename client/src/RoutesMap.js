import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import SalesDetail from "./pages/SalesDetail";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import MenuPermission from "./pages/MenuPermission";
import Integrate from "./pages/Integrate";
import NoLayout from "./pages/NoLayout";

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
					<Route path="SalesDetail" element={<SalesDetail />} />
					<Route path="Product" element={<Product />} />
					<Route path="Menu" element={<Menu />} />
					<Route path="MenuPermission" element={<MenuPermission />} />
					<Route path="Integrate" element={<Integrate />} />
				</Route>
				<Route path="/reactCafe/no-layout" element={<NoLayout />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesMap;