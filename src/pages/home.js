import Footer from '../Components/footer';
import { Homecard } from '../Components/homecard';
import { FaLaptopCode } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import './home.css';

const introText = "Engineer, designer, and occasional filmmaker. This is where I put the things I build.";
const designDescription = "I thrive on creating user-centric solutions across a diverse range of projects, from intuitive UI/UX experiences to innovative hardware designs and captivating graphics.";
const codeDescription = "As a Computer Science major, I've embarked on exciting projects and research, delving into Full-Stack Mobile/Web Development, Database Management, Human-Computer Interaction, Generative AI, and more.";
const filmDescription = "Filmmaking has been a passion of mine since I was 13. Writing and directing bring me immense joy, and I look forward to exploring this creative avenue even further.";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 60px)" }}>
      <div style={{ flex: 1 }}>
        <div className="home-hero">
          <h1>Pradeep Mani Rathnam</h1>
          <p className="home-intro">{introText}</p>
          <p className="home-links">
            <b>Latest projects: </b>
            <a href="/code/mani">Mani</a>
            {", "}
            <a href="/code/swiftly">Swiftly</a>
            {" & "}
            <a href="/code/pair">PaiR</a>
          </p>
        </div>
        <div className="body-container">
          <Homecard
            img={<MdDesignServices size="80px" />}
            header="Design"
            link="/design"
            description={designDescription}
          />
          <Homecard
            img={<FaLaptopCode size="80px" />}
            header="Code"
            link="/code"
            description={codeDescription}
          />
          <Homecard
            img={<PiFilmSlateBold size="80px" />}
            header="Film"
            link="/film"
            description={filmDescription}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
