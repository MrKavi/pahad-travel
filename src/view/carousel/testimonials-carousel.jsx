import React, { useState } from 'react';
import { Carousel, Indicator } from 'react-bootstrap';
import bus from "../../assets/bus.png"
import taxi from "../../assets/taxi.png"

import './style.scss';


const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const testimonials = [
        {
            name: 'Olivia',
            img: "https://c4.wallpaperflare.com/wallpaper/921/889/215/mountain-4k-background-wallpaper-preview.jpg",
            status: 'Brand Manager, Yatra',
            quote: '"We have been using this service to book"',
        },
        {
            name: 'Jane Smith',
            img: "https://www.freewalldownload.com/river-images/hd-rivers-free-picture.jpg",
            status: 'Brand Manager, Indigo',
            quote: 'I highly recommend this product.',
        },
        {
            name: 'Bob Johnson',
            img: "https://images.pexels.com/photos/230629/pexels-photo-230629.jpeg?cs=srgb&dl=pexels-dianne-230629.jpg&fm=jpg",
            status: 'Brand Manager, Air India',
            quote: 'This product exceeded my expectations.',
        }
    ];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <React.Fragment>
            <div style={{ display: "flex" }}>
                <img className='plane' src={bus} />
                <img className='plane' src={taxi} />
            </div>
            <Carousel controls={false} className='testimonials' activeIndex={index} direction={direction} onSelect={handleSelect} interval={3000}>


                {testimonials.map((testimonial, i) => (
                    <Carousel.Item key={i}>
                        <div className='carousel-menu'>
                            <img className='testimonial-img' src={testimonial.img} />
                            <h4 className='quote'>{testimonial.quote}</h4>
                            {/* <p className='name'>{testimonial.name}</p> */}
                            {/* <p className='status'>{testimonial.status}</p> */}
                        </div>


                    </Carousel.Item>
                ))}
            </Carousel>
        </React.Fragment>
    );
}

export default Testimonials;
