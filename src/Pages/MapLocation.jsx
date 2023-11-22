import React from 'react'
import { useEffect, useState } from 'react'
import ScrollToTop from '../Components/New/ScrollToTop'
import Navbar from '../Components/New/Navbar'
import Footer from '../Components/Footer/Footer'
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../config/mapboxConfig';
import Map, { Marker } from 'react-map-gl';
import blackhat from './../assets/events/blackhat.jpg'
import winterland from './../assets/events/winterland.jpg'
import boulevard from './../assets/events/boulevard.jpg'
import earch from './../assets/events/earth.jpg'
import formula1 from './../assets/events/formula1.jpg'

const Destination = () => {
    const festivalsData = [
      {
        id: 1,
        name: 'Black Hat',
        startDate: '2023-07-15',
        city: 'Beach City',
        latitude: 24.709519551905316,
        longitude: 46.68504683295199,
        description: 'Join the electrifying atmosphere of the Black Hat event in Saudi Arabia, where the night sky meets the vibrant lights of celebration. This thrilling summer festival invites you to experience an unforgettable blend of music, culture, and joyous festivities, making it a must-attend occasion for all seeking excitement and entertainment.',
        image: blackhat,
      },
      {
        id: 2,
        name: 'Winter Land',
        startDate: '2023-08-20',
        city: 'Grooveville',
        latitude: 24.723553706545637,
        longitude: 46.6553494152995,
        description: 'Immerse yourself in the enchanting Winter Land festival, transforming Grooveville in Saudi Arabia into a magical wonderland. Delight in the best of global music, surrounded by the crisp winter air. With dazzling lights and an array of performances, Winter Land promises an extraordinary experience that captures the spirit of the season.',
        image: winterland,
      },
      {
        id: 3,
        name: 'Boulevard World',
        startDate: '2023-09-10',
        city: 'Heritage Town',
        latitude: 24.708540111581915,
        longitude: 46.66867504433923,
        description: 'Heritage Town in Saudi Arabia becomes a melting pot of diversity during the Boulevard World event. Celebrate the richness of various cultures through captivating art exhibitions, delectable international cuisines, and mesmerizing performances. Boulevard World is a journey around the globe, bringing people together in a harmonious celebration of unity.',
        image: boulevard,
      },
      {
        id: 4,
        name: 'Earth exhibition',
        startDate: '2023-10-05',
        city: 'Taste City',
        latitude: 24.720711105376843,
        longitude: 46.675276363217286,
        description: 'Taste City hosts the Earth Exhibition, a culinary extravaganza that takes you on a gastronomic journey around the world. Satisfy your taste buds with a delightful array of cuisines, showcasing the diverse flavors and culinary traditions from different corners of the Earth. Indulge in a culinary adventure that promises to be a feast for all senses.',
        image: earch,
      },
      {
        id: 5,
        name: 'Formula 1',
        startDate: '2023-11-15',
        city: 'Maplewood',
        latitude: 24.70786060088426,
        longitude: 46.67671985755523,
        description: 'Maplewood in Saudi Arabia roars to life with the adrenaline-pumping excitement of Formula 1. Experience the beauty of autumn with high-speed thrills, captivating races, and a festival of automotive excellence. Formula 1 in Saudi Arabia is not just a race; it is a celebration of precision, speed, and the passion for cutting-edge technology in the world of motorsports.',
        image: formula1,
      },
    ];
  
    const [newPlace, setNewPlace] = useState(null)
    const [viewPort, setViewPort] = useState({
      latitude: 46.6711565259167,
      longitude: 24.72142873518393,
      zoom: 6,
    })
  
    const handleSeeOnMap = (festivalId) => {
      // Find the festival with the corresponding id
      const selectedFestival = festivalsData.find((festival) => festival.id === festivalId);
  
      if (selectedFestival) {
        // Set the latitude and longitude to the newPlace state
        setNewPlace({
          latitude: selectedFestival.latitude,
          longitude: selectedFestival.longitude,
        });
  
        console.log('new place', newPlace)
      }
    };

    const handleclick = () => {
      window.location.replace("/home")
    }
  
    return (
      <div>
        <ScrollToTop />
        <div style={{padding:'40px'}}>
        <Navbar />
        </div>
        
        <div style={{ marginBottom: '60px', marginLeft:'70px' }}>
          <Map
            mapboxAccessToken={MAPBOX_TOKEN}
            initialViewState={{
              longitude: 46.671142261681176,
              latitude: 24.768648991782555,
              zoom: 8
            }}
            style={{ width: 1200, height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </div>
        {newPlace ? (
          <>
            {/* <Marker
              latitude={newPlace?.latitude}
              longitude={newPlace?.longitude}
              offsetLeft={-3.5 * 8}
              offsetTop={-7 * 8}
            >
            </Marker> */}
          </>
        ) : null}
        <div style={{ display: 'flex', flexDirection: 'column',
         alignItems: 'center', marginLeft:'70px', marginRight:'80px'}}>
          {festivalsData.map((festival) => (
            <div
              key={festival.id}
              style={{
                display: 'flex',
                width: '70%',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                marginLeft: festival.id % 2 === 1 ? '0' : 'auto',
                marginRight: festival.id % 2 === 0 ? '0' : 'auto',
              }}
            >
              <img
                src={festival.image}
                alt={festival.name}
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: festival.id % 2 === 1 ? '8px 0 0 8px' : '0 8px 8px 0',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ flex: 1, padding: '20px' }}>
                <h2
                  style={{
                    marginBottom: '10px',
                    color: festival.id % 2 === 1 ? '#2196F3' : '#FF5722',
                  }}
                >
                  {festival.name}
                </h2>
                <p style={{ color: '#777', fontSize: '14px', fontStyle: 'italic' }}>{festival.startDate}</p>
                <p style={{ color: '#555', fontWeight: 'bold', textTransform: 'uppercase' }}>{festival.city}</p>
                <p style={{ color: '#444', lineHeight: '1.6' }}>{festival.description}</p>
                <br></br>
                
                <button
                  onClick={() => handleSeeOnMap(festival.id)}
                  style={{
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '14px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  See on Map
                </button>
               <button
                  style={{
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '14px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginLeft:'10px'
                  }} onClick={handleclick} type='button'
                >
                  Book Room
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'20px'}}>
        <Footer />
        </div>
      </div>
    )
  }

export default Destination
