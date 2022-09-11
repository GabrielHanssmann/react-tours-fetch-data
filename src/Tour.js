import React, { useState } from 'react';

// destructure the props for reusable component
const Tour = ({ id, image, info, price, name, removeTours }) => {

  // read more toogle
  const [readMore, setReadMore] = useState(false)

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{
      // read more toogle function and substring function to reduce the amount of text to show in a string
        readMore ? info : `${info.substring(0,200)}...`
      }
      <button onClick={()=>{
        // when use ! in the parameter of the function, it makes to call the oposite and make it a boolean
        setReadMore(!readMore)
      }}>
        {/* change the text of the button depending if the useState us true or false */}
          {readMore ? 'show less' : 'read more'}
        </button>
        </p>
        {/* // removeTours function looking for the id to remove the selected component */}
      <button className='delete-btn' onClick={()=> removeTours(id)}>
        not interested
      </button>
    </footer>

  </article>
};

export default Tour;
