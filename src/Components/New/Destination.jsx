import React from "react";
import styled from "styled-components";
import blue from "../../assets/new/new/blue-abaya.jpg"
import kingdom from "../../assets/new/new/kingdom.webp"
import riyadh from "../../assets/new/new/Riyadh.jpg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Destinations() {
  const data = [
    {
      name: "Blue Abaya",
      image: blue,
    },
    {
      name: "Kingdom Center",
      image: kingdom,
    },
    {
      name: "Riyadh Skyscrapers",
      image: riyadh,
    },
  ];
  return (
    <Section id="destination">
      <div className="info">
        <>
        <h2>
          Top <span>Destinations</span> In Saudi Arabia
        </h2>
        <p>
        Explore the top destinations in Saudi Arabia, where ancient history and modern marvels converge in a unique tapestry of culture and beauty
        </p>
        <Link to="/destination">
        <Button variant="contained">Discover More</Button>
        </Link>
        </>
        
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => {
          return (
            <div className="destination" key={name}>
              <div className="image">
                <img src={image} alt="destinations" />
              </div>
              <div className="name">
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      img {
        height: 20rem;
      }
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;
