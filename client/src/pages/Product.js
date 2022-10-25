import React, { useState } from 'react';
import { Button, ButtonGroup, Table, Row, Col, Form, Modal } from "react-bootstrap";

function Product() {
  const [brandShow, setBrandShow] = useState(false);
  const [productShow, setProductShow] = useState(false);

  const handleBClose = () => setBrandShow(false);
  const handleBShow = () => setBrandShow(true);

  const handlePClose = () => setProductShow(false);
  const handlePShow = () => setProductShow(true);
  

  return (
    <>
       {/* 브랜드등록-모달 */}
       <Modal aria-labelledby="contained-modal-title-vcenter" centered show={brandShow} onHide={handleBClose}>
        <Modal.Header closeButton>
          <Modal.Title>브랜드 (신규)등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ModalForm.Brand">
              <Form.Label>브랜드명</Form.Label>
              <Form.Control type="input" placeholder="브랜드명 입력" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleBClose}>
            등록하기
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 상품등록-모달 */}
      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={productShow} onHide={handlePClose}>
        <Modal.Header closeButton>
          <Modal.Title>상품 (신규)등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ModalForm.Brand">
              <Form.Label>브랜드</Form.Label>
              <Form.Select aria-label="Default select example" autoFocus>
                <option>브랜드 선택</option>
                <option value="1">그린마운틴 커피</option>
                <option value="2">글로리아진스</option>
                <option value="3">기타</option>
                <option value="4">던킨도넛</option>
                <option value="5">라라</option>
                <option value="6">라바짜</option>
                <option value="7">래핑맨</option>
                <option value="8">레브</option>
                <option value="9">마카롱</option>
                <option value="10">맥카페</option>
                <option value="11">맴버스마크</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Product">
              <Form.Label>상품명</Form.Label>
              <Form.Control type="input" placeholder="상품명 입력" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Type">
              <Form.Label>투출타입</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>투출타입 선택</option>
                <option value="1">투출</option>
                <option value="2">글로리아진스</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Unit">
              <Form.Label>단위</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>단위 선택</option>
                <option value="1">낱개</option>
                <option value="2">묶음</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ModalForm.Etc">
              <Form.Label>비고</Form.Label>
              <Form.Control type="input" placeholder="비고 입력" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>이미지</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handlePClose}>
            등록하기
          </Button>
        </Modal.Footer>
      </Modal>


      <h2 className="title-h2">브랜드/상품관리</h2>

      <Row className="mt-2">
        <Col xl="5">

          <Row className="mt-4">
            <Col className="me-auto col-auto">
              <h3 className="title-h3">브랜드</h3>
            </Col>
            <Col className="col-auto">
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={handleBShow}>브랜드등록</Button>
                <Button type="reset" value="Reset" variant="outline-primary" className="ms-2">새로고침</Button>
              </ButtonGroup>
            </Col>
          </Row>

          <div className="tbl-type1 table-responsive mt-3">
            <Table hover>
              <thead>
                <tr>
                  <th>브랜드명</th>
                  <th>상품</th>
                  <th>수정</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>그린마운틴 커피</td>
                  <td>1</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>글로리아진스</td>
                  <td>1</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>던킨도넛</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>라라</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>라바짜</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>래핑맨</td>
                  <td>1</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>마카롱</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>맴버스마크</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>밀키트</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>바리스타프리마</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>스내플</td>
                  <td>1</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>스위스미스</td>
                  <td>1</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
                <tr>
                  <td>스타벅스</td>
                  <td>0</td>
                  <td><Button variant="outline-primary" size="sm">수정</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col xl="7">
          <Row className="mt-4">
            <Col className="me-auto col-auto">
              <h3 className="title-h3">상품</h3>
            </Col>
            <Col className="col-auto">
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={handlePShow}>상품등록</Button>
              </ButtonGroup>
            </Col>
          </Row>

          <div className="tbl-type1 table-responsive mt-3">
            <Table hover>
              <thead>
                <tr>
                  <th>브랜드명</th>
                  <th>상품</th>
                  <th>투출타입</th>
                  <th>단위</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>그린마운틴 커피</td>
                  <td>1</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
                <tr>
                  <td>글로리아진스</td>
                  <td>1</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
                <tr>
                  <td>던킨도넛</td>
                  <td>0</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
                <tr>
                  <td>라라</td>
                  <td>0</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
                <tr>
                  <td>라바짜</td>
                  <td>0</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
                <tr>
                  <td>래핑맨</td>
                  <td>1</td>
                  <td>투출</td>
                  <td>낱개</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

    </>
  )
}

export default Product;