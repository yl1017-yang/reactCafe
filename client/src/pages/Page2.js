import { Form, Button, ButtonGroup, Table, Pagination, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function Page2() {
  return (
    <>
      <h2 className="title-h2">매출상세조회</h2>

      <Form className="d-flex">
        <span>매출상세조회 결제일시</span>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>

      <h3 className="title-h3">SC-520 개발팀 대리점 전체</h3>

      {/* 테이블 */}
      <Table responsive="md" className="tbl-type1">
        <thead>
          <tr>
            <th>No</th>
            <th>설치장소-자판기번</th>
            <th>
              통신
              {['right'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      안내메시지
                    </Tooltip>
                  }
                >
                  <Button variant="">{placement}</Button>
                </OverlayTrigger>
              ))}
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
            <td><span className="tag-comm-request">점검요청</span></td>
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
            <td><span className="tag-comm-unused">장기미사용</span></td>
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
            <td><span className="tag-comm-normal">정상</span></td>
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
            <td><span className="tag-comm-none">이력없음</span></td>
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

      <Row>
        <Col lg="8">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>

        <Col lg="4" className="text-end">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary">목록</Button>
            <Button variant="secondary" className="ms-2">등록</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Table responsive="md" className="tbl-type1 mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>MID</th>
            <th>설치장소</th>
            <th>결제일시</th>
            <th>구분</th>
            <th>TID</th>
            <th>카드결제</th>
            <th>쿠폰결제</th>
            <th>총 결제금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>51</td>
            <td>7860</td>
            <td>36연구소32인치터치</td>
            <td>2022-12-31 15:00:00</td>
            <td>카드</td>
            <td>숫자</td>
            <td>1,000</td>
            <td>0</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>50</td>
            <td>7860</td>
            <td>36연구소32인치터치</td>
            <td>2022-12-31 15:00:00</td>
            <td>복합</td>
            <td>숫자</td>
            <td>1,000</td>
            <td>500</td>
            <td>1,500</td>
          </tr>
          <tr>
            <td>49</td>
            <td>7860</td>
            <td>36연구소32인치터치</td>
            <td>2022-12-31 15:00:00</td>
            <td>쿠폰</td>
            <td>숫자</td>
            <td>0</td>
            <td>2,000</td>
            <td>2,000</td>
          </tr>
        </tbody>
      </Table>

      <ButtonGroup aria-label="Basic example" className="text-end">
        <Button variant="outline-secondary">목록</Button>
        <Button variant="secondary" className="ms-2">다운로드</Button>
      </ButtonGroup>


    </>
  )
}

export default Page2;