import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Editor from '../components/Editor';
import UploadFiles from '../commons/UploadFiles';
// import LFSelect from '../commons/LFSelect';


const BoardWrite = () => {

  const tabs = [
    { value: '공지사항', text: '공지사항' },
    { value: '업데이트', text: '업데이트' }
  ]

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('공지사항');
  const uploadReferenece = React.createRef();

  async function onClickSearch() {
    if (title.trim() == '') {
      alert('제목을 입력해주세요'); return;
    }

    if (desc.trim() == '') {
      alert('내용을 입력해주세요'); return;
    }

    // await uploadReferenece.current.upload().then(function (result) {
    //   const files = result;
    //   ajax('/api/notice/saveNotice', { title: title, desc: desc, type: type, files: files }, (res) => {
    //     if (res.data && res.data.ok === 1) {
    //       alert('저장 완료');
    //       setId(res.data.insertedId);
    //       var linkToClick = document.getElementById('notice_Detail_Link');
    //       linkToClick.click();
    //     } else {
    //       alert('공지사항을 저장하는 도중 오류가 발생하였습니다.')
    //     }
    //   }, null, true);
    //   }).catch(function (err) {
    // });


  }

  // async function onClickSearch() {
  //   await uploadReferenece.current.upload().then(function (result) {
  //       const files = result;
  //       alert('저장 완료');
  //   }).catch(function (err) {
  //   });
  // }

  function onEditorChange(value) {
    setDesc(value)
  }

  return (
    <>
      <h2 className="title-h2">글쓰기</h2>

      <div className="d-md-flex justify-content-md-end">
        <Link to="/reactCafe/BoardList" className="btn btn-secondary">목록</Link>
      </div>

      <div style={{ padding: "12px" }}>

        <div className="form-group">
          {/* <LFSelect options={tabs} onChange={(event) => setType(event.target.value)}/> */}
        </div>
        <div className="form-group">
          <input type="text" placeholder="제목" className="form-control" onChange={(event) => setTitle(event.target.value)} />
        </div>

        <UploadFiles ref={uploadReferenece} />
        <Editor value={desc} onChange={onEditorChange} />

        <div className="text-center pd12">
          <button className="lf-button primary" onClick={onClickSearch}>저장</button>
        </div>
        <Link id="notice_Detail_Link" to={{ pathname: '/BoardDetail', state: { _id: id } }}></Link>
      </div>

    </>
  )
}

export default BoardWrite;