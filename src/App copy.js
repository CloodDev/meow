import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const images = [image1, image2, image3];

function App() {
  const [currentImage, setCurrentImage] = useState(0);


  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };



  return (
    <div className="App">
      <header>
        <h1>Biuro Podróży</h1>
        <h2>Elektronik.pl</h2>
      </header>

      <main>
        <div className="carousel">
          <button onClick={prevImage}>Left</button>
          <img src={images[currentImage]}/>
          <button onClick={nextImage}>Right</button>
        </div>

        <section className="hotel-selection">
          <h3>Wybierz hotel</h3>
          <div className="hotels">
            <div>H1</div>
            <div>H2</div>
            <div>H3</div>
          </div>

          <label>
            Termin pobytu:
            <input type="date" name="from" />
            od
            <input type="date" name="to" />
            do
          </label>

          <label>
            Ilość dorosłych:
            <input type="number" name="adults" />
          </label>

          <label>
            Ilość dzieci:
            <input type="number" name="children" />
          </label>
        </section>
      </main>

      <button className="submit-button">Zatwierdź</button>
    </div>
  );
}

export default App;