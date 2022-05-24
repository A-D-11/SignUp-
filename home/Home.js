import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import Cards from './Cards';

export default function Home() {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={require('./image1.jpg')} className="d-block w-100 ch" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={require('./image2.jpg')} className="d-block w-100 ch" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('./image3.jpg')} className="d-block w-100 ch" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* what we do  */}
      <div className='container padt'>
        <h2 className='text-center fw-bold pb-4' >What We Do</h2>
        <p className='fs-5'>We intend to help out busy people to collect their recyclables by offering free pickup service. We work as a ‘Recyclable Material Collector’ by offering doorstep collection service for individual houses, societies, organizations and industries. Initially we started our services by collecting the old newspapers, milk packets and plastic bottles by raising awareness about the importance of recycling. We collect the recyclable material from consumer then send to respective manufacturing plant to make the new products. We offer free pickup service, accurate weight and right value for the recyclable materials with complimentary gift conveying social message to plant the trees and save the environment. It’s simple to being eco-friendly; give your recyclables old newspapers, milk packets and plastic bottles in a most environment friendly manner. We invite you to join our hands and try to help us in recycling management.</p>
      </div>

      <div className='container pt-4 pb-5'>
        <Cards />
      </div>

      <div className='container text-bg-info'>
        <h3 className='text-center fw-semibold'>Hassle free pick of your old cloths and other donation related things  </h3>
      </div>
    </div>
  );
}
