import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function Share() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    return (
      <div style={{marginTop:'5%'}}>
        <Container>
          <Row >
            <Col >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Bộ lọc</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Toàn bộ send</Card.Subtitle>
                  <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  <Card.Text>
                    Các loại
                  </Card.Text>
                  <Card.Link href="#">Văn bản</Card.Link>
                  <Card.Link href="#">Tập tin</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Table striped bordered hover variant="transparent">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên</th>
                  <th>Ngày xóa</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </Table>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleShow}>Tạo Send mới</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Send mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Tên</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form>
                    <Form.Label>Loại Send</Form.Label>
                      {[ 'radio'].map((type) => (
                        <div key={`reverse-${type}`} className="mb-3">
                          <Form.Check
                            reverse
                            label="Tập tin"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-1`}
                            
                          />
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Default file input example</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Check
                            reverse
                            label="Văn bản"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-2`}
                          />
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Văn bản</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                          <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                          >
                            Tùy chọn
                          </Button>
                          <Collapse in={open}>
                            <div>
                            <Form.Label>Ngày xóa</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option value="">Chọn một mục</option>
                                <option value="option1">1 giờ</option>
                                <option value="option2">1 ngày</option>
                                <option value="option3">1 tuần</option>
                                <option value="option3">30 ngày</option>
                              </Form.Select>
                              <Form.Label>Ngày hết hạn</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option value="">Không bao giờ</option>
                                <option value="option1">1 giờ</option>
                                <option value="option2">1 ngày</option>
                                <option value="option3">1 tuần</option>
                                <option value="option3">30 ngày</option>
                              </Form.Select>
                              <Form.Label>Mật Khẩu</Form.Label>
                                <Form.Control
                                  type="password"
                                  id="password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                            </div>
                          </Collapse>
                        </div>
                      ))}
                    </Form>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Hủy
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Tạo Send
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            
          </Row>
        
        </Container>
      </div>
      
      
  );
}

export default Share