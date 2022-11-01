import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

{/* json데이터 : https://goddino.tistory.com/154 */}

function Integrate() {
  const [info, setInfo] = useState([]);
  const [seleted, setSeleted] = useState('');
  const [modalOn, setModalOn] = useState(false);

  //고유 값으로 사용될 id, ref를 사용하여 변수 담기
  const nextId = useRef(11);

  //데이터 호출 http://localhost:5000/users
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setInfo(res.data))
    .catch(err => console.log(err));
  }, []);

  // const handleSave = (data) => {

  // }

  return ( 
    <>
      <h2 className="title-h2">회원 리스트</h2>

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
            
            {
              info.map(function(item) {
                // <td key={ item.id }></td>
                <tr info={ info }>
                  <td>{ item.id }</td>
                </tr>
              })
            }
            
          </tbody>
        </Table>
      </div>

    </>
  )
}

// function UsersTr({ info }) {
//     return (
//       <tr>
//         { info.map (item => {
//           return (
//             <td key={ item.id } item={ item }></td>
//           )
//         })}
//       </tr>
//     )  
// }

export default Integrate;