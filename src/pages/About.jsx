import Header from '../components/Header';
import { Link } from 'react-router-dom';
import arrow from '../assets/Arrow.png';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="back-button">
        <Link to="/Home">
          <img src={arrow} alt="Back" />
        </Link>
      </div>

      <Header />

      <div className="description-text">
        <p>
          Ever wondered if you’ll need an umbrella in Paris while packing for a trip from New York?
          Or if your hometown’s having sunnier skies than where you are now? Our weather app is
          built for the curious, the connected, and the constantly moving. Just type in any city,
          anywhere in the world, and instantly see what the skies look like there. Whether you’re
          checking on loved ones, planning a getaway, or daydreaming about far-off places, we’ll
          bring the weather from around the globe to your fingertips.
        </p>
      </div>
    </div>
  );
}