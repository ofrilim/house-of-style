// https://www.npmjs.com/package/react-material-ui-carousel
// https://github.com/wojtekmaj/react-calendar#readme
import React, { useState } from 'react';
import image1 from './home0-1.jpg';
import image2 from './home0-2.jpg';
import image3 from './home0-3.jpg';
import Calendar from 'react-calendar';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import './Appartment.scss';
import './Calendar.css';

export default function Appartment() {
  const [value, onChange] = useState(new Date());
  var items = [
    {
        src: image1,
        description: "Probably the most random thing you have ever seen!"
    },
    {
        src: image2,
        description: "Hello !"
    },
    {
        src: image3,
        description: "World !"
    }
  ]
  return (
    <div className="appartment">
      <Carousel className="carousel">
        {
          items.map( (item, i) => <Item key={i} item={item} /> )
        }
      </Carousel>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}


function Item(props)
{
    return (
        <Paper>
            <img src={props.item.src} alt="house"/>
            {/* <p>{props.item.description}</p> */}
        </Paper>
    )
}
