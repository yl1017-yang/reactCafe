import { Table, Row, Col, Form, Button, OverlayTrigger, Tooltip, Card } from "react-bootstrap";
// import { IoInformationCircleSharp } from "react-icons/sl";

function SalesDetail() {
  return (
    <>
      <h2 className="title-h2">매출상세조회</h2>

      <Card className="card-con-search mt-2 mb-4">
        <Card.Body>
          <Card.Title>매출상세조회 결제일시</Card.Title>
          <Card.Text>
            <Form className="d-flex row-cols-lg-auto align-items-center">
              <Form.Group controlId="formDate1">
                <Form.Label className="visually-hidden">조회시작</Form.Label>
                <Form.Control type="input" placeholder="2022.00.00" />
              </Form.Group>

              <Form.Group controlId="formDate2" className="m-2">
                <Form.Label className="visually-hidden">조회끝</Form.Label>
                <Form.Control type="input" placeholder="2022.00.00" />
              </Form.Group>
              
              <Button variant="outline-primary" className="m-2">오늘</Button>
              <Button variant="outline-primary">이번달</Button>
              <Button variant="outline-primary"className="m-2">지난달</Button>
              <Button variant="primary" type="submit">조회</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className="mt-5">
        <Col xl="3">
          <h3 className="title-h3">총판 (20건)</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
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
          </div>
        </Col>

        <Col xl="3">
          <h3 className="title-h3">SC-520개발팀 (1283)</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
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
          </div>
        </Col>

        <Col xl="6">
          <h3 className="title-h3">SC-520 개발팀 대리점 전체</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>설치장소-<br/>자판기번</th>
                  <th>
                    통신
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">이력없음, 장기미사용(118일전 보고), 점검요청(19시간전 보고), 정상(5분전 보고)</Tooltip>}>
                      <Button variant="" size="sm">
                        ⓘ {/* <IoInformationCircleSharp /> */}
                      </Button>
                    </OverlayTrigger>
                  </th>
                  <th>랙 상태</th>
                  <th>총 결제건수</th>
                  <th>카드결제</th>
                  <th>쿠폰결제</th>
                  <th>총 결제금액</th>
                  <th>설치일</th>
                  <th>관리연락처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>36연구소회의실 - 7000</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">19시간 전 보고가 있는 경우</Tooltip>}>
                      <Button variant="danger" size="sm">점검요청</Button>
                    </OverlayTrigger>
                  </td>
                  <td>정상</td>
                  <td>32</td>
                  <td>215,500</td>
                  <td>3,000</td>
                  <td>248,500</td>
                  <td>2022-12-31</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>36연구소개발방 - 7000</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">118일 전 보고가 있는 경우</Tooltip>}>
                      <Button variant="warning" size="sm">장기미사용</Button>
                    </OverlayTrigger>
                  </td>
                  <td>점검요청</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>2022-12-31</td>
                  <td>010-333-1000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>36연구소서디방 - 7000</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">5분 전 보고가 있는 경우</Tooltip>}>
                      <Button variant="primary" size="sm">정상</Button>
                    </OverlayTrigger>
                  </td>
                  <td>정상</td>
                  <td>15</td>
                  <td>0</td>
                  <td>15,000</td>
                  <td>15,000</td>
                  <td>2022-12-31</td>
                  <td>010-333-1000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>36연구소소장실 - 7000</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">보고 이력의 없습니다</Tooltip>}>
                      <Button variant="secondary" size="sm">이력없음</Button>
                    </OverlayTrigger>
                  </td>
                  <td>이력없음</td>
                  <td>1</td>
                  <td>100</td>
                  <td>0</td>
                  <td>100</td>
                  <td>2022-12-31</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>36연구소옥상휴게실 - 7000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>3</td>
                  <td>1500</td>
                  <td>3,000</td>
                  <td>4,500</td>
                  <td>2022-12-31</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

    </>
  )
}

export default SalesDetail;