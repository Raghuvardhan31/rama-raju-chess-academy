import React from 'react'
import "./home.css"
import HomeGallary from './HomeGallary'
const Home = () => {
  return (
  <div className = "main-home">
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
      <div style={{color : "#9c2323"}} className="profile-section">
        <div className="profile-desc">
          <h1 >About Coach:</h1>
          <h2 >Rama Raju Kistapuram</h2>
          <p>Ramaraju Kistapuram is a FIDE-rated chess player and the founder of Rama Raju Chess Academy, Sangareddy. He has dedicated over 15 years of his life to chess as a competitive player, coach, and mentor. With an international FIDE rating, he has actively participated in rated tournaments and gained strong practical experience. Through his academy, he focuses on systematic training, discipline, and nurturing young talent, helping students develop both chess skills and strategic thinking.</p>
        </div>
        <div className="profile-pic">
            <img src="coach.png" alt="Coach Rama Raju Kistapuram" />
        </div>
      </div>
      <div>
          < HomeGallary/>
      </div>
    </div>
  )
}

export default Home
