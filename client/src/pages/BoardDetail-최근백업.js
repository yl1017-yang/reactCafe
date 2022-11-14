import { useState, useEffect, useParams, history } from "react";
// import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

//https://bigexecution.tistory.com/8
// async, await 사용 https://intrepidgeeks.com/tutorial/use-axios-to-send-get-and-post-requests-from-react-js

const BoardDetail = (props) => {

  // const { id } = useParams();
  const [post, setPost] = useState([]);

  const fetchPost = async (id) => {
    try {
      const res = await axios.post(`/api/board/${id}`);
      console.log(res.status);
      console.log(res.data);
      setPost(res.data);
    } catch (err) {
      console.log("something went wrong!", err);
    }
  }  
  useEffect(() => {
    fetchPost(props.match.params.id);
    // fetchPost();
  }, [props.match.params.id]);

  return (
    <>
      <h2 className="title-h2">공지사항 내용</h2>

      <div className="tbl-type1 table-responsive mt-3">
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <td>{post.id}</td>
            </tr>
            <tr>
              <th>구분</th>
              <td>{post.type}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{post.userName}</td>
            </tr>
            <tr>
              <th>작성일시</th>
              <td>{moment(post.date).format('YYYY-MM-DD')}</td>
            </tr>
            <tr>
              <th>조회수</th>
              <td>{post.readCount}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1111111111111111
                내용
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="d-md-flex justify-content-md-end">
        {/* <Link to="/reactCafe/BoardList" className="btn btn-secondary">목록</Link> */}
        <button className="btn btn-secondary" onClick={() => history.push('/reactCafe/BoardList')}>목록</button>
      </div>



    </>
  )
}

export default BoardDetail;