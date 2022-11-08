import axios from "axios";
import { useEffect } from 'react';

import "./assets/styles/custom.scss";
// import 'bootstrap/dist/css/bootstrap.css';
import RoutesMap from "./routes/RoutesMap"; //일반 라우터 설치

function App() {
  const callApi = async()=>{
    axios.post("/api").then((res)=>{
      // console.log(res.data.test)
      console.log(res.data)
    });
  };

  useEffect(()=>{
    callApi();
  }, []);
  
  return (
    <>
    <RoutesMap />
    </>
  )
}

export default App;