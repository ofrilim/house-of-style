import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import image1 from './media/home0-1.jpg';
import image2 from './media/home0-2.jpg';
import image3 from './media/home0-3.jpg';
import './Appartment.scss';
import './Calendar.css';

export default function Appartment() {
  const [value, onChange] = useState(new Date());
  var items = [
    {
        // name: "Random Name #1",
        src: image1,
        description: "Probably the most random thing you have ever seen!"
    },
    {
        // name: "Random Name #2",
        src: image2,
        description: "Hello !"
    },
    {
        // name: "Random Name #2",
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
            <img src={props.item.src} />
            {/* <p>{props.item.description}</p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}
