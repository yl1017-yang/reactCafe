// import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Lnb(){
	return( 
	<div className="menus">
		<ul>
      <li>
        <Link exact to="/reactTest/">매출요인</Link> <br />
        <Link exact to="/reactTest/">매출상세조회</Link>
      </li>
      <li>
      <h2>관리자화면</h2>
        <Link exact to="/reactTest/Page1">상품관리</Link>
      </li>
      <li>        
        <Link exact to="/reactTest/Page2">메뉴관리</Link>
      </li>
      <li>
        <Link exact to="/reactTest/Page2">메뉴권한관리</Link>
      </li>
      <li>
        <Link exact to="/reactTest/Page2">통합관리</Link>
      </li>
    </ul>
	</div>
	)
}

export default Lnb;