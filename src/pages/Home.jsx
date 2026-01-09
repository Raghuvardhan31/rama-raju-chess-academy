import React from 'react'
import "./home.css"
const Home = () => {
  return (
  <div>
    
        <div className="home">
          <div className="part1">
            <h1>Rama Raju Chess Academy</h1>
            <h2>Your Child’s Chess Growth Is Our Commitment</h2>
            <h3>We Shape Thinkers, Not Just Players <br />
              Building Confidence One Move at a Time <br />
              Your Child’s Chess Journey Starts Here <br />
              Learning Chess the Right Way</h3>
            <button onClick={() => window.location.href = "tel:+919876543210"}>
              Contact Us
            </button>

          </div>

          <div className="part2">
            <img src="main-photo.png" alt="Rama Raju Chess Academy" />
          </div>
        </div>
    </div>
  )
}

export default Home
