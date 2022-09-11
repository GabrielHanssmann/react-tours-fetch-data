import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  // remove the tours
  const removeTours = (id) =>{
    const newTours = tours.filter((tour) =>
      // filter the tour that doesnt match the id
tour.id !== id
    )
    // update the tours if a tour is delete
    setTours(newTours)
  }

  // fetch data
  const fetchTours = async() => {
    // caution for loading condition to be true
    setLoading(true)
    // try to catch errors, load tours and return false on loading
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error){
      // if error
      setLoading(false);
      console.log(error)
    }
  }; 
  useEffect(()=>{
    fetchTours()
  }, []);

  // loading condition
  if (loading) {
    return(
      <main>
        <Loading/>
      </main>
    );
  }
  // change text if all components are remove
  if (tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          {/* //get bak the tours button */}
          <button className='btn' onClick={()=> fetchTours()}>See torus</button>
        </div>
      </main>
    )
  }
  return <main>
    {/* // funtions can be send as proprs to other components, like removeTours const */}
    <Tours tours={tours} removeTours={removeTours}/>
  </main>

}

export default App
