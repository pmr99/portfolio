import './card.css';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    let navigate = useNavigate();
    return (
        <div className = "cardi" onClick = {() => navigate(props.link)}>
            <h1 className= "heading"> {props.name} </h1>
           <p> {props.role} </p>
        </div>
    )
}

export default Card