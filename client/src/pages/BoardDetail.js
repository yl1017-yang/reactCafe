import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

//https://bigexecution.tistory.com/8
// async, await 사용 https://intrepidgeeks.com/tutorial/use-axios-to-send-get-and-post-requests-from-react-js
// https://jsonplaceholder.typicode.com/posts
// router 6X https://reactrouter.com/en/v6.3.0/upgrading/v5

const BoardDetail = (props) => {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log("params : ", id);

  const [post, setPost] = useState([]);

  const fetchPost = useCallback(async () => {
    try {
      const res = await axios.get(`/board/${id}`);
      console.log(res.status);
      console.log(res.data);
      setPost(res.data);
    } catch (err) {
      console.log("something went wrong!", err);
    }
  }, [id]);
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);


  return (
    <>
      <h2 className="title-h2">공지사항 내용</h2>

      <div className="board-detail">
        <h3>{post.title}</h3>
        <div className="board-desc">
          <span>번호 : {post.id}</span>
          <span>구분 : {post.type}</span>
          <span>작성자 : {post.username}</span>
          <span>조회수 : {post.readCount}</span>
          <span>작성일시 : {moment(post.date).format('YYYY-MM-DD')}</span>
        </div>      
        <div className="board-con">
          {post.desc}
        </div>
      </div>
      

      <div className="d-md-flex justify-content-md-end">
        <button className="btn btn-secondary" onClick={() => navigate(-1) }>목록</button>
      </div>

    </>
  )
}

export default BoardDetail;