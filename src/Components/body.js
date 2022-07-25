import Card from "./card"
import './card.css';

const Body = () => {
    return (
        <div>
            <Card name = "Enfactum" role = "UI Designer/Illustrator" link = "/enfactum"> </Card>
            <Card name = "Invention Corpse Website" role = "Engineer Lead/Web Developer"> </Card>
            <Card name = "GleanBee" role = "UX Researcher/UI Designer"> </Card>
            <Card name = "WasteLess" role = "Web Developer/UI Designer" link = "/wasteless"> </Card>
            <Card name = "Pearl Global" role = "Web UI Designer"> </Card>
        </div>
    )
}

export default Body