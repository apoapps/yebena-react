import nieves from "../assets/menu/nieves.jpg";
import paletas from "../assets/menu/paletas.jpg";
import snacks from "../assets/menu/snacks.jpg";
import raspados from "../assets/menu/raspados.jpg";

import Carousel from 'react-bootstrap/Carousel'

export default function PngMenu() {
    return (
        <div className="container">
            <div className="row">
                <Carousel>
                    <Carousel.Item>

                        <img src={paletas} className="d-block w-100" alt="..." />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={nieves} className="d-block w-100" alt="..." />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={raspados} className="d-block w-100" alt="..." />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={snacks} className="d-block w-100" alt="..." />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}



