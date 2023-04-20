import Card from "./card"
import CardAlt from "./cardAlt";
import './card.css';
import factum from "../Img/enfactum_profile.png"
import waste from "../Img/wasteless_profile.png"
import icbcover from "../Img/icbcover.png"
import gleanprofile from "../Img/gleanprofile.png"
import rumcover from "../Img/rumcover.png"
import crediblecover from "../Img/crediblecover.png"

const Body = () => {
    return (
        <div className = "body-container">
            <Card classname = "cardi" name = "Rumifico" role = "Engineer / Designer" link = "/portfolio/rumifico" img = {rumcover} text = "Given that it has become increasingly difficult for parents to stay in touch with their child once they move to college, Rumifico aims to bridge this gap by simplifying and promoting meaningful interaction during this period."> </Card>
            <CardAlt classname = "cardi" name = "JED Foundation Hub" role = "Project Manager / Designer" link = "https://www.behance.net/gallery/168791339/JEDCredibleMind-UIUX-Project" img = {crediblecover} text = "Created a central hub for JED Campus Advisors to deliver next generation mental & well-being resources to college campuses."> </CardAlt>
            <Card classname = "cardi" name = "Enfactum Website" role = "UI Designer / Illustrator" link = "/portfolio/enfactum" img = {factum} text = "Enfactum is a creative agency that has pivoted its business model over the years. I redesigned its website to reflect its new direction."> </Card>
            <Card classname = "cardi" name = "WasteLess" role = "Co-founder / Software Developer / UI Designer" link = "/portfolio/wasteless" img = {waste} text = "Domestic waste production is a significant problem in Singapore. I co-founded an IoT solution that tracks individual waste contribution to mitigate the diffusion of responsibility."> </Card>
            <CardAlt classname = "cardi" name = "Invention Corps Website" role = "Engineering Team Lead / Web Developer" link = "https://inventioncorps.org/index.html" img= {icbcover} text = "Originally coded in Vanilla HTML, it was troublesome to create regular updates to the website. We developed a new website using React, to make the website sustainable in the long-run."> </CardAlt>
            <Card classname = "cardi" name = "Gleanbee" role = "UX Researcher / UI Designer / Web Developer" link = "/portfolio/gleanbee" img = {gleanprofile} text = "GleanBee is a data aggregating plug-in that simplifies curating information online. I redesigned the GleanBee platform and its plug-in, such that it is more intuitive and user-friendly for users. I also helped implement features using Angular."> </Card>
        </div>
    )
}

export default Body