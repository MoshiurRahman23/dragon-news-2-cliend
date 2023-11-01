import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Band1 from '../../../assest/Bands/Band1.png';
import Band2 from '../../../assest/Bands/Band2.png';

const BandCarusole = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Band1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Band2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BandCarusole;