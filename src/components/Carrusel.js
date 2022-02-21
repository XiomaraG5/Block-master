
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function Carrusel({datos}) {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carrusel">
        {datos.map(el=>(
           <Carousel.Item interval={3000} className="itemCarrusel" id={el.id} key={el.id} >
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w1280`+el.poster_path}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{el.original_title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    

       
    </Carousel>
  );
}


