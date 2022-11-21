import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main() {

  return (
    <>
      <Row>
        <Col><h2 className="title-h2">메인</h2></Col>
        <Col className="col-auto"><Link className="btn btn-outline-primary" role="button" to="/reactTest/SalesDetail">매출상세조회</Link></Col>
      </Row>

      <div>
        <p>리액트 client/server</p>
        <p>게시판 리스트 : 게시판 리스트,글쓰기,상세</p>
        <p>상품 리스트 : 상품 리스트,글쓰기,상세</p>
      </div>

      {/* <Card className="card-con mt-2 mb-4">
        <Card.Body>
          <Card.Title>최근 1년동안 매출 추이</Card.Title>
          <Card.Text>당월예상매출액 : 50건 <span>500,000원</span></Card.Text>
        </Card.Body>
      </Card>

      <div className="tbl-type1 table-responsive">
        <Table hover>
          <thead>
            <tr>
              <th>당일</th>
              <th>1월판매 (1~말일)</th>
              <th>2월판매 (1~말일)</th>
              <th>3월판매 (1~말일)</th>
              <th>2월일평균 (1~말일)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="txt-exclu-case">17건</span></td>
              <td><span className="txt-exclu-case">7건</span></td>
              <td><span className="txt-exclu-case">1건</span></td>
              <td><span className="txt-exclu-case">25건</span></td>
              <td><span className="txt-exclu-case">37건</span></td>
            </tr>
            <tr>
              <td><span className="txt-exclu-price">988,385원</span></td>
              <td><span className="txt-exclu-price">200,000원</span></td>
              <td><span className="txt-exclu-price">180,300원</span></td>
              <td><span className="txt-exclu-price">300,385원</span></td>
              <td><span className="txt-exclu-price">450,385원</span></td>
            </tr>
          </tbody>
        </Table>
      </div> */}

    </>
  )
}

export default Main;