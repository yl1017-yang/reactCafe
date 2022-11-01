import { useState, useEffect } from "react";
import Editor from '../components/Editor';


const BoardWrite = () => {

  const [desc, setDesc] = useState('');

  function onEditorChange(value) {
    setDesc(value)
  }

  return (
    <>
      <h2 className="title-h2">게시판 수정</h2>

      <div>
        <Editor value={desc} onChange={onEditorChange} />
      </div>

    </>
  )
}

export default BoardWrite;