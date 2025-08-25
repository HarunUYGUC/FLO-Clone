import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container fluid className="bg-light d-flex flex-column align-items-center p-0">
      
      {/* Üst Banner */}
      <div className="w-100 d-flex justify-content-center" style={{ backgroundColor: '#0094EA' }}>
        <div className="col-12 col-md-6"> 
          <Carousel className="w-100" interval={3000}>
            <Carousel.Item>
              <img
                src="/main-slider-web-erkek-bts.jpg.webp"
                alt="Kampüse Dönüş Model 1"
                className="d-block w-100 img-fluid"
                style={{ objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/main-slider-web-erkek-bts-kampuse-donus.gif"
                alt="Kampüse Dönüş Model 2"
                className="d-block w-100 img-fluid"
                style={{ objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Alt Banner */}
      <div className="col-12 col-md-6 my-1">
        <div className="w-100">
          <Carousel className="mt-4" interval={2000}>
            <Carousel.Item>
              <img src="/mini-slider-web-yarin-kargoda.jpg.webp" alt="Ürün 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/slider-web-en-iyi-secimler.jpg.webp" alt="Ürün 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/slider-web-son-30-gunun-en-dusuk-fiyatli-urunleri.jpg.webp" alt="Ürün 3" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/mini-slider-web-sepete-en-cok-eklenenler.jpg.webp" alt="Ürün 4" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/mini-slider-web-stil-ayakta-bas-lar-tarzin-onu-tamamlar.png.webp" alt="Ürün 5" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/mini-slider-web-yok-artik.jpg.webp" alt="Ürün 6" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/slider-web-125-flo-para.jpg.webp" alt="Ürün 7" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/ban-9751_flo_agustos_1200x160.jpg.webp" alt="Ürün 8" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/1200x160.jpg.webp" alt="Ürün 9" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* İki Yanyana Görsel */}
      <div className="col-12 col-md-6 my-3 d-flex justify-content-center">
        <div className="row g-2 w-100">
          <div className="col-12 col-md-6">
            <img
              src="/web-2li-bant-pop-up-2750.jpg.webp"
              alt="Pop-up"
              className="img-fluid w-100 rounded-3"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/web-2li-bant-yeni-gelenler.jpg.webp"
              alt="Yeni Gelenler"
              className="img-fluid w-100 rounded-3"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
