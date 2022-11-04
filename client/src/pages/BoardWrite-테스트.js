import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from "axios";
// import Editor from '../components/Editor';
import UploadFiles from '../commons/UploadFiles';
// import LFSelect from '../commons/LFSelect';


const BoardWrite = () => {

  const uploadReferenece = React.createRef();

    async function onClickSearch() {
        await uploadReferenece.current.upload().then(function (result) {
            const files = result;
            alert('저장 완료');
        }).catch(function (err) {
        });
    }

  return (
    <>
      <h2 className="title-h2">글쓰기</h2>

      <div className="d-md-flex justify-content-md-end">
        <Link to="/reactCafe/BoardList" className="btn btn-secondary">목록</Link>
      </div>

      <div>
          <UploadFiles ref={uploadReferenece} />
          <div className="text-center pd12">
             <button className="lf-button primary" onClick={onClickSearch}>저장</button>
          </div>
      </div>

    </>
  )
}

export default BoardWrite;