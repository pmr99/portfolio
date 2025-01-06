import Card from "./card"
import CardAlt from "./cardAlt";
import './card.css';
import factum from "../Img/enfactum_profile.png"
import waste from "../Img/wasteless_profile.png"
import icbcover from "../Img/icbcover.png"
import gleanprofile from "../Img/gleanprofile.png"
import rumcover from "../Img/rumcover.png"
import crediblecover from "../Img/crediblecover.png"
import workdaylogo from "../Img/workdaylogo.png"
import chi from "../Img/chi.jpeg"
import titleai from "../Img/aifinaltitle.png"
import Imagifylogo from "../Img/imagifylogo.png"
import pairLogo from  "../Img/pairlogo.png"


const rumificoDesc = "Empowering Connections: Rumifico Redefines Parent-Child Communication for the College Journey, Fostering Seamless Interaction and Building Lasting Bonds."
const researchDesc = "Authored 'Prompting for Discovery: Flexible Sense-Making for Al Art-Making with Dreamsheets' along with Shm Garanganao Almeda, J.D. Zamfirescu-Pereira, Kyu Won Kim, Bjoern Hartmann. Conditionally accepted to CHI 2024."

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

const jedDescription = "Transforming campus well-being with an integrated Hub for JED Campus Advisors. This centralized platform offers cutting-edge mental health resources, transcending boundaries to elevate well-being across colleges nationwide."
const enfactumDesc = "Enfactum, a creative agency, has undergone a strategic evolution in its business model over the years. I had the privilege of spearheading the redesign of its website, crafting a digital presence that  mirrors its new direction."
const gleanbeeDesc = "GleanBee is a data-aggregating plug-in that streamlines the process of curating information online. As part of the redesign initiative, I revamped the GleanBee platform and plug-in, enhancing user-friendliness and implementing advanced features."
const DesignBody = () => {
    return (
        <div className = "body-container">
            <Card classname = "cardi" name = "Rumifico" role = "Engineer / Designer" link = "/code/rumifico" img = {rumcover} text = {rumificoDesc}> </Card>
            <CardAlt classname = "cardi" name = "JED Foundation Hub" role = "Project Manager / Designer" link = "https://www.behance.net/gallery/168791339/JEDCredibleMind-UIUX-Project" img = {crediblecover} text = {jedDescription}> </CardAlt>
            <Card classname = "cardi" name = "Enfactum Website" role = "UI Designer / Illustrator" link = "/design/enfactum" img = {factum} text = {enfactumDesc}> </Card>
            <Card classname = "cardi" name = "Gleanbee" role = "UX Researcher / UI Designer / Web Developer" link = "/design/gleanbee" img = {gleanprofile} text = {gleanbeeDesc}> </Card>
        </div>
    )
}


const CodeBody = () => {
    return (
        <div className = "body-container">
            <Card classname = "cardi" name = "PaiR" role="Personal Project" link ="/code/pair" img = {pairLogo}  text = {"AI Driven Software Engineering Interviews utilizing OpenAI’s Realtime API and Speech-to-text + Text-to-text + Text-to-speech AI models."}> </Card>
            <CardAlt classname = "cardi" name = "ACM CHI Conference 2024" role = "HCI Research Author" link = "https://arxiv.org/abs/2310.09985" img = {chi} text = {researchDesc}> </CardAlt>
            <Card classname = "cardi" name = "Imagify" role="Personal Project" link ="/code/imagify" img = {Imagifylogo}  text = {"Imagify is a tool that transforms your recent Spotify listening activity into a creative illustration using DALL·E 3 and Spotify's Developer tools. Can you guess your top 5 recently listened songs?"}> </Card>
            <Card classname = "cardi" name = "DirectorAI" role = "Personal Project" link = "/code/directorai" img = {titleai} text = {"As a writer, I've often contemplated the practical applications of Text-to-Image (TTI) and Large Language Models (LLM) in the creative process. DirectorAI is a web application that leverages ChatGPT and DALL·E-2 to generate personalized marketing video concepts."}> </Card>
            <CardAlt classname = "cardi" name = "Workday" role = "Android Developer" link = "https://www.workday.com/" img = {workdaylogo} text = "I'm an Android Developer at Workday, often collaborating with designers, project managers, and fellow engineers to deliver quality code as part of a feature team."> </CardAlt>
            <Card classname = "cardi" name = "WasteLess" role = "Co-founder / Software Developer / UI Designer" link = "/code/wasteless" img = {waste} text = "Domestic waste production is a significant problem in Singapore. I co-founded an IoT solution that tracks individual waste contribution to mitigate the diffusion of responsibility."> </Card>
            <CardAlt classname = "cardi" name = "Invention Corps Website" role = "Engineering Team Lead / Web Developer" link = "https://inventioncorps.org/index.html" img= {icbcover} text = "Originally developed in Vanilla HTML and CSS, it was troublesome to create regular updates to the Invention Corps website. We developed a new website using React, for better sustainability and ease of maintenance."> </CardAlt>
        </div>
    )
}

export {DesignBody, CodeBody}