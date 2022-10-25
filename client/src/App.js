import axios from "axios";
import { useEffect } from 'react';

import "./assets/styles/custom.scss";
// import 'bootstrap/dist/css/bootstrap.css';
import RoutesMap from "./RoutesMap"; //일반 라우터 설치

function App() {
  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
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