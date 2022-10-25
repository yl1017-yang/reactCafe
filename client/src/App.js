import axios from "axios";
import { useEffect } from 'react';

function App() {
  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);
  
  return (
    <div className="App">
	  node js + react 적용
    </div>
  );
}

export default App;