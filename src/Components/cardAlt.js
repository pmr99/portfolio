import './card.css';

const CardAlt = ({ classname, name, role, link, img, text }) => {
  return (
    <a href={link} className={classname} style={{ textDecoration: "none", color: "inherit" }}>
      <h2 className="heading">{name}</h2>
      <p>{role}</p>
      <img className="profile-pic" src={img} alt={name} />
      <p className="profile-text">{text}</p>
    </a>
  );
};

export default CardAlt;
