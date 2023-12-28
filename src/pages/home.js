import Body from '../Components/body';
import Footer from '../Components/footer';
import {Homecard} from '../Components/homecard';
import { FaLaptopCode } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { Container } from 'react-bootstrap';

const intoText = "Hey there, thanks a bunch for dropping by! This space is a mash-up of all the things I'm passionate about. Feel free to dig in and if you wanna chat about anything, just shoot me a message!"
const designDesription = "I've worked on diverse projects centered around crafting user centric solutions, spanning UI/UX, hardware design, and graphic design alike."
const codeDescription = "Majoring in Computer Science, I've engaged in fun projects encompassing full-stack mobile and web development, database management, generative AI and other areas. "
const filmDescription = "Filmmaking has been a passion of mine since I was 13, where I've found joy in both writing and directing. I aspire to further delve into this realm in the future."

const Home = () => {
  return (
    <div>
      <div style = {{height: "100%"}}>
      <h1 className = "title-head"> Pradeep Mani Rathnam </h1>
      <p className = "text" style = {{marginTop: "16px", marginLeft: "25%", marginRight: "25%", textAlign: "center"}}> {intoText} </p>
      <div className = "body-container">
        <Homecard img = {<MdDesignServices size = "lg"/>} header = "Design" link = "/design" description = {designDesription} />
        <Homecard img = {<FaLaptopCode size = "lg"/>} header = "Code" link = "/code" description = {codeDescription}/>
        <Homecard img = {<PiFilmSlateBold size = "lg"/>} header = "Film" link = "/film" description = {filmDescription}/>
      </div>
      </div>
    
      <Footer/>
    </div>
  );
}

export default Home;


