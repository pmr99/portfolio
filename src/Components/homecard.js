import { useNavigate } from "react-router-dom";

const Homecard = ({link, header, img, description}) => {
    let navigate = useNavigate();
    return(
        <div className = "cardihome" onClick = {() => navigate(link)}>
            <div className = "home-profile-pic" style = {{margin: "auto", marginTop: "0px", marginBottom: "20px" }}> {img} </div>
            <h2 className = "heading"> {header} </h2>
            <p className = "home-profile-text"> {description}</p>
            
        </div>

    )
}


export {Homecard};