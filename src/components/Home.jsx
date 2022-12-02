import React from 'react'
import Products from './Products'

const Home = () =>{
  return (
    
    <div className="home">
        <div className="card bg-dark text-white border-0">
            <img src="..." className="card-img" alt="background" height='550px'/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New collection</h5>
                    <p className="card-text fs-2">CHECK OUT NEW ARRIVALS</p>

                </div>         
            </div>
        </div>
        <Products/>
    </div>
   
    
  )
}

export default Home;