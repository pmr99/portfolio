import './card.css';

const CardAlt = (props) => {
    return (
        
        <div className = {props.classname} href = {props.link}>
        <a href= {props.link} style= {{textDecoration: "none", color: "black"}}>
            <h1 className= "heading"> {props.name} </h1>
           <p style = {{color: "black", textDecoration: "none !important"}}> {props.role} </p>
           <img className = "profile-pic" src={props.img} />
           <p className = "profile-text" style = {{color: "black"}}> {props.text}</p>
        </a>
        </div>
        
    )
}

export default CardAlt