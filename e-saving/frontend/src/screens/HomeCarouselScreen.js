import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../banner/banner1.png";
import Banner2 from "../banner/banner2.png";
import Banner3 from "../banner/banner3.png";
import Banner4 from "../banner/banner1.png";
import Banner5 from "../banner/banner2.png";

function HomeCarouselScreen() {
  return (
    <div className='container-fluid mb-5'>
      <div className='container-fluid'>
        <Carousel
          dynamicHeight={true}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval='5000'
          width='100%'
        >
          <div>
            <img src={Banner1} />
            {/* <p className='legend'>Legend 1</p> */}
          </div>
          <div>
            <img src={Banner2} />
            {/* <p className='legend'>Legend 2</p> */}
          </div>
          <div>
            <img src={Banner3} />
            {/* <p className='legend'>Legend 3</p> */}
          </div>
          <div>
            <img src={Banner4} />
            {/* <p className='legend'>Legend 4</p> */}
          </div>
          <div>
            <img src={Banner5} />
            {/* <p className='legend'>Legend 5</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarouselScreen;
