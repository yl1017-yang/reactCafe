import { Table, Row, Col } from "react-bootstrap";

function Page1() {
  return (
    <>
      <h2 className="title-h2">통합관리</h2>

      <Row>
        <Col>
          <h3 className="title-h3">총판 (20건)</h3>
          <Table responsive="md" className="tbl-type1">
            <thead>
              <tr>
                <th>No</th>
                <th>총판명 [대리점/자판기]</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>(주)르호봇 <span className="tag-exclu-01">1</span> <span className="tag-exclu-02">1</span></td>
                <td><span className="txt-exclu-case">7건</span> <span className="txt-exclu-price">100,385</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>(주)베스코 <span className="tag-exclu-01">11</span> <span className="tag-exclu-02">58</span></td>
                <td><span className="txt-exclu-case">0건</span> <span className="txt-exclu-price">0</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>(주)르호봇 <span className="tag-exclu-01">1</span> <span className="tag-exclu-02">1</span></td>
                <td><span className="txt-exclu-case">7건</span> <span className="txt-exclu-price">100,385</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>(주)베스코 <span className="tag-exclu-01">11</span> <span className="tag-exclu-02">58</span></td>
                <td><span className="txt-exclu-case">0건</span> <span className="txt-exclu-price">0</span></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col>
          <h3 className="title-h3">()SC-520개발팀 (1283)</h3>
          <Table responsive="md" className="tbl-type1">
            <thead>
              <tr>
                <th>No</th>
                <th>대리점명 [자판기]</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>개발팀 <span className="tag-exclu-01">5</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col>
          <h3 className="title-h3">SC-520 개발팀 대리점 전체</h3>
        </Col>
      </Row>

    </>
  )
}

export default Page1;