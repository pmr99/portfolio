import Card from "./card"
import './card.css';
import factum from "../Img/enfactum_profile.png"
import waste from "../Img/wasteless_profile.png"
import icbcover from "../Img/icbcover.png"
import gleanprofile from "../Img/gleanprofile.png"

const Body = () => {
    return (
        <div className = "body-container">
            <Card classname = "cardi" name = "Enfactum" role = "UI Designer / Illustrator" link = "/enfactum" img = {factum} text = "Enfactum is a creative agency that has pivoted its business model over the years. I redesigned its website to reflect its new direction."> </Card>
            <Card classname = "cardi" name = "WasteLess" role = "Co-founder / Software Developer / UI Designer" link = "/wasteless" img = {waste} text = "Domestic waste production is a significant problem in Singapore. I co-founded an IoT solution that tracks individual waste contribution to mitigate the diffusion of responsibility."> </Card>
            <Card classname = "cardi" name = "Invention Corps Website" role = "Engineering Team Lead / Web Developer" img= {icbcover} text = "Originally coded in Vanilla HTML, it was troublesome to create regular updates to the website. We developed a new website using React, to make the website sustainable in the long-run."> </Card>
            <Card classname = "cardi" name = "Gleanbee" role = "UX Researcher / UI Designer / Web Developer" link = "/gleanbee" img = {gleanprofile} text = "GleanBee is a data aggregating plug-in that simplifies curating information online. I redesigned the GleanBee platform and its plug-in, such that it is more intuitive and user-friendly for users. I also helped implement features using Angular."> </Card>
        </div>
    )
}

export default Body