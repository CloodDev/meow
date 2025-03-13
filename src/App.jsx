import React, { useState } from 'react';
import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form, Card, Carousel } from 'react-bootstrap';

const images = [image1, image2, image3];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hotel, setHotel] = useState(0);
  const [toDate, setToDate] = useState(0);
  const [fromDate, setFromDate] = useState(0);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [text, setText] = useState("");

  function getHotel(hotelid) {
    switch (hotelid) {
      case 1:
        return "Barcelona";
      case 2:
        return "Paris";
      case 3:
        return "Londyn";
      default:
        return "Brak";
    }
  }

  function handleSubmit() {
    setText(`Wybrano hotel ${getHotel(hotel)}, termin pobytu od ${fromDate} do ${toDate}, z iloscią ${adults} dorosłych i ${kids} dzieci`);
  }

  return (
    <Container className="py-4">
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="display-4">Biuro Podróży</h1>
          <h2 className="text-muted">Elektronik.pl</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Carousel activeIndex={currentImage} onSelect={setCurrentImage} className="mb-4">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Wybierz hotel</Card.Title>
              <Form>
                <Form.Group>
                  {[1, 2, 3].map((id) => (
                    <Form.Check
                      key={id}
                      type="checkbox"
                      id={`hotel${id}`}
                      label={getHotel(id)}
                      checked={hotel === id}
                      onChange={() => setHotel(hotel === id ? 0 : id)}
                      className="mb-2"
                    />
                  ))}
                </Form.Group>
              </Form>
              <Form >
                <Form.Group>
                  <Form.Label>Termin pobytu:</Form.Label>
                  <Row>
                    <Col>
                      <Form.Label>od</Form.Label>
                      <Form.Control type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                    </Col>
                    <Col>
                      <Form.Label>do</Form.Label>
                      <Form.Control type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Ilość dorosłych:</Form.Label>
                      <Form.Control type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Ilość dzieci:</Form.Label>
                      <Form.Control type="number" value={kids} onChange={(e) => setKids(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <Button variant="primary" className="w-100" onClick={handleSubmit}>
                Zatwierdź
              </Button>

              {text && (
                <Card className="mt-3 bg-light">
                  <Card.Body>{text}</Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;