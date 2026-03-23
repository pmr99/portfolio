import './card.css';
import { useNavigate } from "react-router-dom";

const Card = ({ classname, name, role, link, img, text }) => {
  const navigate = useNavigate();

  return (
    <div className={classname} onClick={() => navigate(link)}>
      <h2 className="heading">{name}</h2>
      <p>{role}</p>
      <img className="profile-pic" src={img} alt={name} />
      <p className="profile-text">{text}</p>
    </div>
  );
};

export default Card;
