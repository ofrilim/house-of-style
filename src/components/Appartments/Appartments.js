import React from 'react';
import './Appartments.scss';
import Appartment from '../Appartment/Appartment';
import AppartmentCard from '../AppartmentCard/AppartmentCard';

export default function Appartments() {
  return (
    <div id="appartments">
      <h2>Appartments</h2>
      <Appartment />
      <AppartmentCard />
    </div>
  )
}
