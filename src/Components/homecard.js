import './card.css';
import { useNavigate } from "react-router-dom";

const Homecard = ({ link, header, img, description }) => {
  const navigate = useNavigate();

  return (
    <div className="cardihome" onClick={() => navigate(link)}>
      <div className="home-profile-pic">{img}</div>
      <h2 className="heading">{header}</h2>
      <p className="home-profile-text">{description}</p>
    </div>
  );
};

export { Homecard };
