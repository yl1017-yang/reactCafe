import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
// import Editor from '../components/Editor';
import 'react-quill/dist/quill.snow.css';

//https://bigexecution.tistory.com/8

const BoardDetail = (props) => {

  const { location: { state: { id } } } = props;
  const [post, setPost] = useState([]);
  // const [fileList, setFileList] = useState([]);
  // const [isWriter, setIsWriter] = useState(false);
  
  useEffect(() => {
    axios.post('/api/board/BoardDetail', { id })
      .then(res => setPost(res.data.result))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //      let res = axios.post('/api/board/BoardDetail', { id });

  //      if (res.data && res.data.length == 0) {
  //         alert('조회된 결과가 없습니다');
  //      } else {
  //         setPost(res.data.result);
  //         setFileList(res.data.result.fileList);
  //         setIsWriter(res.data.result.isWriter)
  //         axios.post('/api/board/BoardDetail', { id });
  //      }
  //   }

  //   fetchPost();
  // }, []);


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
            <tr>
              <th>첨부</th>
              <td>
                  {/* {fileList.map((name, index) => (
                    <span key={index}> <a href={'/uploads/' + name} target="_blank">{name}</a></span>
                  ))} */}
              </td>
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
        <Link to="/reactCafe/BoardList" className="btn btn-secondary">목록</Link>
      </div>

    </>
  )
}

export default BoardDetail;