import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Integrate(){
  const Board = () => {
    const [info, setInfo] = useState([]);
    const [seleted, setSeleted] = useState('');
    const [modalOn, setModalOn] = useState(false);

    //고유 값으로 사용될 id, ref를 사용하여 변수 담기
    const nextId = useRef(11);

    //데이터 호출
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
    }, []);
  }

  return( 
    <>
      {/* json데이터 : https://goddino.tistory.com/154 */}

      <h2 className="title-h2">회원 게시판</h2>

      <div className="tbl-type1 table-responsive mt-3">
        <Table hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>별명</th>
              <th>이메일</th>
              <th>휴대폰</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>하지원</td>
              <td>lee</td>
              <td>lee.naver.cm</td>
              <td>010-000-0000</td>
              <td>수정</td>
              <td>삭제</td>
            </tr>
          </tbody>
        </Table>
      </div>

    </>
  )
}

export default Integrate;