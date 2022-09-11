import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTours }) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour)=>{
        // {...tour} si for having acces to all the properties in the object selected fom the API
        return <Tour key={tour.id} {...tour} removeTours={removeTours}/>
      })}
    </div>
  </section>
};

export default Tours;
