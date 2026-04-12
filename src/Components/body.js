import Card from "./card";
import CardAlt from "./cardAlt";
import './card.css';
import factum from "../Img/enfactum_profile.png";
import waste from "../Img/wasteless_profile.png";
import icbcover from "../Img/icbcover.png";
import gleanprofile from "../Img/gleanprofile.png";
import rumcover from "../Img/rumcover.png";
import crediblecover from "../Img/crediblecover.png";
import workdaylogo from "../Img/workdaylogo.png";
import chi from "../Img/chi.jpeg";
import titleai from "../Img/aifinaltitle.png";
import Imagifylogo from "../Img/imagifylogo.png";
import pairLogo from "../Img/pairlogo.png";
import swiftlycover from "../Img/intropage.png";

const rumificoDesc = "Empowering Connections: Rumifico Redefines Parent-Child Communication for the College Journey, Fostering Seamless Interaction and Building Lasting Bonds.";
const researchDesc = "Authored 'Prompting for Discovery: Flexible Sense-Making for AI Art-Making with Dreamsheets' along with Shm Garanganao Almeda, J.D. Zamfirescu-Pereira, Kyu Won Kim, Bjoern Hartmann. Conditionally accepted to CHI 2024.";
const jedDescription = "Transforming campus well-being with an integrated Hub for JED Campus Advisors. This centralized platform offers cutting-edge mental health resources, transcending boundaries to elevate well-being across colleges nationwide.";
const enfactumDesc = "Enfactum, a creative agency, has undergone a strategic evolution. I had the privilege of spearheading the redesign of its website, crafting a digital presence that mirrors its new direction.";
const gleanbeeDesc = "GleanBee is a data-aggregating plug-in that streamlines curating information online. I revamped the platform and plug-in, enhancing user-friendliness and implementing advanced features.";

const DesignBody = () => {
  return (
    <div className="body-container">
      <Card classname="cardi" name="Rumifico" role="Engineer / Designer" link="/code/rumifico" img={rumcover} text={rumificoDesc} />
      <CardAlt classname="cardi" name="JED Foundation Hub" role="Project Manager / Designer" link="https://www.behance.net/gallery/168791339/JEDCredibleMind-UIUX-Project" img={crediblecover} text={jedDescription} />
      <Card classname="cardi" name="Enfactum Website" role="UI Designer / Illustrator" link="/design/enfactum" img={factum} text={enfactumDesc} />
      <Card classname="cardi" name="Gleanbee" role="UX Researcher / UI Designer" link="/design/gleanbee" img={gleanprofile} text={gleanbeeDesc} />
    </div>
  );
};

const CodeBody = () => {
  return (
    <div className="body-container">
      <Card classname="cardi" name="Swiftly" role="Personal Project" link="/code/swiftly" img={swiftlycover} text="A fast, low-cost international tuition and rent payment platform for students in the U.S., leveraging USDC stablecoins to reduce transfer fees by over 96%." />
      <Card classname="cardi" name="PaiR" role="Personal Project" link="/code/pair" img={pairLogo} text="AI Driven Software Engineering Interviews utilizing OpenAI's Realtime API and Speech-to-text + Text-to-text + Text-to-speech AI models." />
      <CardAlt classname="cardi" name="ACM CHI Conference 2024" role="HCI Research Author" link="https://arxiv.org/abs/2310.09985" img={chi} text={researchDesc} />
      <Card classname="cardi" name="Imagify" role="Personal Project" link="/code/imagify" img={Imagifylogo} text="Imagify transforms your recent Spotify listening activity into a creative illustration using DALL·E 3 and Spotify's Developer tools. Can you guess your top 5 recently listened songs?" />
      <Card classname="cardi" name="DirectorAI" role="Personal Project" link="/code/directorai" img={titleai} text="A web application that leverages ChatGPT and DALL·E-2 to generate personalized marketing video concepts for creators and small businesses." />
      <CardAlt classname="cardi" name="Workday" role="Android Developer" link="https://www.workday.com/" img={workdaylogo} text="I'm an Android Developer at Workday, collaborating with designers, project managers, and fellow engineers to deliver quality code as part of a feature team." />
      <Card classname="cardi" name="WasteLess" role="Co-founder / Developer" link="/code/wasteless" img={waste} text="Co-founded an IoT solution that tracks individual waste contribution to mitigate the diffusion of responsibility in Singaporean households." />
      <CardAlt classname="cardi" name="Invention Corps Website" role="Engineering Team Lead" link="https://inventioncorps.org/index.html" img={icbcover} text="Developed a new React-based website for Invention Corps, replacing the original Vanilla HTML version for better sustainability and maintenance." />
    </div>
  );
};

export { DesignBody, CodeBody };
