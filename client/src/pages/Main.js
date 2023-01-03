import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";

// import jquery from 'jquery';
import $ from "jquery";

class Main extends React.Component {
// function Main() {

  componentDidMount(){
    $(function() {
      $('.gauge').each(function () {
        var $this = $(this);
        var value = $this.attr('value');
        $this.animate({
            width: value + "%"
        }, 1000, 'linear' );

       $this.text(value);
      });
    });
  }

  pressClick = () => {
    document.getElementById( 'press' ).value = '100';
  }
  pressClick2 = () => {
    document.getElementById( 'press' ).value = '20';
  }
  meterClick = () => {
    document.getElementById( 'meter' ).value = '100';
  }
  meterClick2 = () => {
    document.getElementById( 'meter' ).value = '0';
  }
  gaugeClick = () => {
    $(".gauge").val("");
  }

  render(){
    return (
      <>
        <Row>
          <Col><h2 className="title-h2">메인</h2></Col>
          <Col className="col-auto"><Link className="btn btn-outline-primary" role="button" to="BoardList">게시판</Link></Col>
        </Row>

        <p>프로그래스바 게이지</p>


        

        <div className="progress-box">
          <ul>
            <li>
              <label>사용량 10%</label>
              <progress min="0" max="100" value="10" id="press" className="press-move"></progress>
              <button onClick={ this.pressClick } className="btn">100% 클릭</button>
              <button onClick={ this.pressClick2 } className="btn">20% 클릭</button>
            </li>
            <li>
              <label>사용량 10%</label>
              <meter min="0" max="100" value="10" low="30" high="70" optimum="100" id="meter"></meter>
              {/* 전체 100 중에서 64만큼 차지합니다.*/}
              <button onClick={ this.meterClick } className="btn">100% 클릭</button>
              <button onClick={ this.meterClick2 } className="btn">0% 클릭</button>
            </li>
          </ul>

          <ul>
            <li>
              <div className="gauge-box">
                <input type="text" name="txt" value="10" className="gauge" />
              </div>
              {/* <button onClick={ this.gaugeClick } className="btn">클릭</button> */}

              <div className="gauge-box">
                <input type="text" name="txt" value="30" className="gauge" />
              </div>
              <div className="gauge-box">
                <input type="text" name="txt" value="60" className="gauge" />
              </div>
              <div className="gauge-box">
                <input type="text" name="txt" value="80" className="gauge" />
              </div>
              <div className="gauge-box">
                <input type="text" name="txt" value="100" className="gauge" />
              </div>
            </li>
            <li>
            </li>
          </ul>
        </div>

 

       


        <div>
          참고 : https://blog.naver.com/PostView.naver?blogId=home124&logNo=222703044367
        </div>

      </>
    );
  }
}

export default Main;