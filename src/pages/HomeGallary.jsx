import React, { useState, useEffect } from 'react'
import './homeGallary.css'

function HomeGallary() {
  const [currentImages, setCurrentImages] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  // Array of image paths (assuming 20 images: 1.jpeg to 20.jpeg)
  const imagePaths = Array.from({ length: 20 }, (_, i) => `gallary/${i + 1}.jpeg`)

  // Function to get random unique images
  const getRandomImages = (count) => {
    const shuffled = [...imagePaths].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Set initial images and interval
  useEffect(() => {
    const numImages = isMobile ? 1 : 3
    setCurrentImages(getRandomImages(numImages))

    const interval = setInterval(() => {
      setCurrentImages(getRandomImages(numImages))
    }, 2000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <div className="gallery-section">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-container">
        {currentImages.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  )
}

export default HomeGallary
