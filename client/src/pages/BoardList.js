import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import Pagination from '../components/Pagination';
import { SlDoc } from "react-icons/sl";

// https://bigexecution.tistory.com/4?category=847175
// https://goddino.tistory.com/154
// https://wonyoung2257.tistory.com/6


const BoardList = (props) => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  //데이터 호출  https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    axios.get('/api/board')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
      <h2 className="title-h2">게시판 리스트</h2>

      <div className="tbl-type1 table-responsive mt-3">
        <Table hover>
          <colgroup>
            <col width="5%" />
            <col width="*" />
            <col width="50%" />
            <col width="*" />
            <col width="*" />
            <col width="*" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
              <th>조회수</th>
              <th>첨부</th>
            </tr>
          </thead>
          <tbody>

            {currentPosts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.type}</td>
                <td><Link to={{ pathname: '/reactCafe/BoardDetail', state: { id: post.id } }}>{post.title}</Link></td>
                <td>{post.userName}</td>
                <td>{moment(post.date).format('YYYY-MM-DD')}</td>
                <td>{post.readCount}</td>
                <td>
                  {post.fileList.length > 0 &&
                    // <img src="/images/board_attach.gif" />
                    <SlDoc size="18" />
                  }
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>

      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate}></Pagination>

    </>
  )
}

export default BoardList;