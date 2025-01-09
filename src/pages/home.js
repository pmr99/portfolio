import Body from '../Components/body';
import Footer from '../Components/footer';
import {Homecard} from '../Components/homecard';
import { FaLaptopCode } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";

const intoText = "A repository for all my fun projects. Website designed, developed and maintained by yours truly:)"
const designDesription = "I thrive on creating user-centric solutions across a diverse range of projects, from intuitive UI/UX experiences to innovative hardware designs and captivating graphics."
const codeDescription = "As a Computer Science major, I’ve embarked on exciting projects and research, delving into Full-Stack Mobile/Web Development, Database Management, Human-Computer Interaction, Generative AI, and more."
const filmDescription = "Filmmaking has been a passion of mine since I was 13.  Writing and directing bring me immense joy, and I look forward to exploring this creative avenue even further."

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
      <h1 className = "title-head"> Pradeep Mani Rathnam </h1>
      <p className = "text" style = {{marginTop: "16px", marginLeft: "20%", marginRight: "20%", textAlign: "center"}}> {intoText} </p>
      <p className = "text" style = {{marginTop: "16px", marginLeft: "25%", marginRight: "25%", textAlign: "center"}}> <b> Checkout my latest projects: <a href="https://www.pradeepmanirathnam.com/code/pair">PaiR</a>, <a href="https://director-ai.vercel.app/#home">DirectorAI </a>  and <a href="https://imagify-six.vercel.app">Imagify </a></b></p>
      <div className = "body-container">
        <Homecard img = {<MdDesignServices size = "120px" style = {{margin : "auto"}}/>} header = "Design" link = "/design" description = {designDesription} />
        <Homecard img = {<FaLaptopCode size = "120px"/>} header = "Code" link = "/code" description = {codeDescription}/>
        <Homecard img = {<PiFilmSlateBold size = "120px"/>} header = "Film" link = "/film" description = {filmDescription}/>
      </div>
      </div>
    
      <Footer/>
    </div>
  );
}

export default Home;


