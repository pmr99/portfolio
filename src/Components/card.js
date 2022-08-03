import './card.css';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    let navigate = useNavigate();
    return (
        <div className = {props.classname} onClick = {() => navigate(props.link)}>
            <h1 className= "heading"> {props.name} </h1>
           <p> {props.role} </p>
           <img className = "profile-pic" src={props.img} />
           <p className = "profile-text"> {props.text}</p>

        </div>
    )
}

export default Card