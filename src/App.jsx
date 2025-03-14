import React, { useEffect, useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import londyn1 from './images/londyn1.jpg';
import londyn2 from './images/londyn2.jpg';
import londyn3 from './images/londyn3.jpg';
import paris1 from './images/paris1.jpg';
import paris2 from './images/paris2.jpg';
import paris3 from './images/paris3.jpg';
import barcelona1 from './images/barcelona1.jpg';
import barcelona2 from './images/barcelona2.jpg';
import barcelona3 from './images/barcelona3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap';

const images = [image1, image2, image3];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [city, setCity] = useState(0);
  const [hotel, setHotel] = useState(0);
  const [hotelName, setHotelName] = useState("");
  const [toDate, setToDate] = useState(0);
  const [fromDate, setFromDate] = useState(0);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [text, setText] = useState("");
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
    setCity(currentImage)
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
    setCity(currentImage)
  };

  useEffect(() => {
    // Define hotel names based on city and hotel number
    const hotelNames = {
      0: ['Londyn Premium', 'Londyn Comfort', 'Londyn Budget'],
      1: ['Paris Luxury', 'Paris Classic', 'Paris Express'],
      2: ['Barcelona Deluxe', 'Barcelona Seaside', 'Barcelona Central']
    };
    
    // If a hotel is selected (hotel values are 1-3, subtract 1 for array index)
    if (hotel > 0) {
      setHotelName(hotelNames[city][hotel - 1]);
    } else {
      // Default case when no hotel is selected yet
      setHotelName("");
    }
  }
  , [hotel, city]);

  function handleSubmit() {
    setText(`Wybrano hotel ${hotelName}, termin pobytu od ${fromDate} do ${toDate}, z iloscią ${adults} dorosłych i ${kids} dzieci`);
  }

  // Define hotel images
  const hotelImages = {
    0: [londyn1, londyn2, londyn3],
    1: [paris1, paris2, paris3],
    2: [barcelona1, barcelona2, barcelona3]
  };

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
          <div className="carousel">
            <Button onClick={prevImage}>{"<"}</Button>
            <img src={images[currentImage]} alt={"image"} />
            <Button onClick={nextImage}>{">"}</Button>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Wybierz hotel</Card.Title>
              <Form>
                <Form.Group>
                  <Row>
                    {[0, 1, 2].map((id) => (
                      <Col key={id} xs={4} className="text-center">
                        <div
                          onClick={() => setHotel(id + 1)}
                          className={`hotel-option ${hotel === id + 1 ? 'selected' : ''}`}
                        >

                          <img
                            src={hotelImages[city][id]}
                            alt={hotelName}
                            className="img-fluid mb-2"
                            style={{
                              border: hotel === id + 1 ? '3px solid #007bff' : '1px solid #ddd',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Form.Group>
              </Form>
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
              <Button variant="success" className="w-100" onClick={handleSubmit}>
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
    </Container >
  );
}

export default App;