import Card from "./card"
import './card.css';
import factum from "../Img/enfactum_profile.png"
import waste from "../Img/wasteless_profile.png"

const Body = () => {
    return (
        <div className = "body-container">
            <Card classname = "cardi" name = "Enfactum" role = "UI Designer/Illustrator" link = "/enfactum" img = {factum}> </Card>
            <Card classname = "cardi" name = "WasteLess" role = "Software Developer/UI Designer/Co-founder" link = "/wasteless" img = {waste}> </Card>
            <Card classname = "cardi" name = "Invention Corpse Website" role = "Engineer Lead/Web Developer"> </Card>
            <Card classname = "cardi" name = "GleanBee" role = "UX Researcher/UI Designer"> </Card>
            <Card classname = "cardi" name = "Pearl Global" role = "Web UI Designer"> </Card>
        </div>
    )
}

export default Body