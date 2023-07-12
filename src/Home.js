import { 
    Card, 
    CardBody, 
    CardHeader, 
    Carousel, 
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_INVENTORY } from './products/Inventory';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
/*
  JSX (JavaScript XML)
    = We're using XML to turn into JS
      to turn into HTML
*/
function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    //carousel controls
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === PRODUCT_INVENTORY.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? PRODUCT_INVENTORY.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    //create a slide template
    const slides = PRODUCT_INVENTORY.map((item) => (
        <CarouselItem key={item.title}>
            <div>
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <div className="carousel-image-container">
                    <img src={item.image} alt={item.title} className="carousel-image" />
                </div>
            </div>
        </CarouselItem>
    ));
    //MC
    return (
        <Card className="main-app-container">
            <CardHeader className="text-center">
                <h1>Welcome!</h1>
                <h3>Hot Deals are just around the corner!</h3>
            </CardHeader>
            <CardBody className="text-center">
                <Carousel 
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    interval={5000}  
                    ride="carousel"
                    className="carousel"
                >
                    <CarouselIndicators items={PRODUCT_INVENTORY} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Prev" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                <Link className="btn btn-primary" to="/featured-products">
                    Featured Products
                </Link>
            </CardBody>
        </Card>
    );
};

/*
  React.createElement({
    tag: 'div',
    attr: {
      class: 'main-app-container'
    }
  });
*/

export default Home;
