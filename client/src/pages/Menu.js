import React, { useState } from 'react';
import { Form, Button, Table, Card, Modal } from "react-bootstrap";

function Menu() {
  const [menuShow, setMenuShow] = useState(false);

  const handleMClose = () => setMenuShow(false);
  const handleMShow = () => setMenuShow(true);

  return (
    <>
      {/* 메뉴추가-모달 */}
      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={menuShow} onHide={handleMClose}>
        <Modal.Header closeButton>
          <Modal.Title>메뉴 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ModalForm.MenuGroup">
              <Form.Label>메뉴그룹</Form.Label>
              <Form.Control type="input" placeholder="메뉴그룹 입력" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.MenuName">
              <Form.Label>메뉴명</Form.Label>
              <Form.Control type="input" placeholder="메뉴명 입력" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.MenuPath">
              <Form.Label>메뉴경로</Form.Label>
              <Form.Control type="input" placeholder="메뉴경로 입력" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Unit">
              <Form.Label>구분</Form.Label>
              <Form.Select aria-label="Default select example">
                {/* <option>구분 선택</option> */}
                <option value="1">메뉴</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Common">
              <Form.Label>공통메뉴여부</Form.Label>
              <Form.Select aria-label="Default select example">
                {/* <option>구분 선택</option> */}
                <option value="1">Y</option>
                <option value="2">N</option>
              </Form.Select>
              <Form.Text className="text-muted">
                ※ Y일 경우 권한에 관계없이 노출됨
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleMClose}>
            등록하기
          </Button>
        </Modal.Footer>
      </Modal>


      <h2 className="title-h2">메뉴관리</h2>

      <Card className="card-con-search mt-2 mb-4">
        <Card.Body>
          <Card.Text className="row align-items-center">
            <Form className="row row-cols-lg-auto align-items-center col-auto me-auto">
              <Form.Group className="row" controlId="formDate1">
                <Form.Label className="col" column sm="4">검색어</Form.Label>
                <Form.Control className="col" sm="8" type="input" placeholder="검색어 입력" />
              </Form.Group>
              <Button variant="primary" type="submit" className="m-2">검색</Button>
              <Button variant="outline-primary">엑셀다운</Button>
            </Form>
            
            <Button variant="primary" type="submit" className="col-auto m-2" onClick={handleMShow}>메뉴추가</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div className="tbl-type1 table-responsive">
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>메뉴그룹</th>
              <th>메뉴명</th>
              <th>메뉴경로</th>
              <th>구분</th>
              <th>등록일시</th>
              <th>공통메뉴여부</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9</td>
              <td>현황</td>
              <td>메출상세조회</td>
              <td>/Menu/매출상세조회</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>현황</td>
              <td>월매출현황</td>
              <td>/Menu/월매출현황</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>관리자</td>
              <td>쿠폰관리</td>
              <td>/Menu/쿠폰관리</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>관리자</td>
              <td>기본상품관리</td>
              <td>/Menu/기본상품관리</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>관리자</td>
              <td>메뉴권한관리</td>
              <td>/Menu/메뉴권한관리</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>관리자</td>
              <td>메뉴관리</td>
              <td>/Menu/메뉴관리</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>관리자</td>
              <td>통합관리</td>
              <td>/Menu/통합관리</td>
              <td>메뉴</td>
              <td>2022-12-31</td>
              <td>아니오</td>
              <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>

    </>
  )
}

export default Menu;