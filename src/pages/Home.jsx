import Header from '../components/Header';
import Weather from '../components/Weather';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="about-button-wrapper">
        <Link to="/about" className="about-button">
          About
        </Link>
      </div>

      <div className="weather-card">
        <Weather />
      </div>
    </div>
  );
}
