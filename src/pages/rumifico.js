import "./proj.css";
import mob1 from "../Img/mob1.png";
import mob2 from "../Img/mob2.png";
import mob3 from "../Img/mob3.png";
import stakeholder from "../Img/stakeholder.png";
import ideation from "../Img/ideation.png";
import journey from "../Img/journeymap.png";
import persona from "../Img/persona.png";
import concept from "../Img/concept.png";
import two from "../Img/two.png";
import affinity from "../Img/affinity.png";
import dot from "../Img/dot.png";
import pugh from "../Img/pugh.png";
import hard from "../Img/hard.png";
import bar from "../Img/bar.png";
import Footer from "../Components/footer";

const Rumifico = () => {
  return (
    <>
    <div className="project-page">
      <h1 className="title-head">Rumifico</h1>

      <h1 className="main-header">Problem</h1>
      <h2 className="second-header">Overview</h2>
      <p className="text">
        HP approached my team with the problem statement of creating a way for users to share, transfer, and
        display photos and precious memories/moments to create better connections among users. My role in this
        project is primarily as a UX Researcher, UI Designer for the mobile component of the product, and
        Software Developer.
      </p>

      <div className="embed-responsive" style={{ textAlign: "center" }}>
        <iframe
          style={{ width: "85%", maxWidth: "900px", aspectRatio: "16/9" }}
          src="https://www.youtube.com/embed/ygsjQpHTgJ8?si=5wBMRg1TXeoCjEOC"
          title="Rumifico Demo"
          allowFullScreen
        />
      </div>

      <h2 className="second-header">SET Factors</h2>
      <p className="text">
        We began by identifying the SET factors, which consists of Social, Economic, and Technological attributes
        relevant to the problem space.
      </p>

      <p className="text"><b>Social</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Seeking ways to connect with individuals beyond platforms currently available</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Shared memories are more like connection with another person</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Strong desire to stay connected with people that are geographically distant</li>
      </ul>

      <p className="text"><b>Economic</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>58% of first-year students attended colleges more than 50 miles away from home</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Wide variety of everyone's disposable income within one family</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Number of migrants has grown exponentially since the start of the 21st century</li>
      </ul>

      <p className="text"><b>Technological</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Abundance of social media for young adults, lack of platforms to foster inter-generational communication</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Use of AR/VR to recreate environments</li>
      </ul>

      <p className="text">
        We then came up with 50 Product Opportunities Gap (POG) as a team and used affinity mapping and weighted
        matrix to narrow down the one that we would focus on.
      </p>

      <img src={ideation} alt="Ideation Process" className="project-img" />

      <p className="text">
        Final POG: <b>Facilitate interaction between parents and children once they move away to college, such as
        sharing daily updates and key moments.</b>
      </p>

      <h2 className="second-header">Stakeholder Map</h2>
      <img src={stakeholder} alt="Stakeholder Map" className="project-img" />

      <h1 className="main-header">Findings</h1>
      <h2 className="second-header">User Research</h2>
      <p className="text">
        I personally reached out to friends and families to conduct user interviews and understand their needs.
        The team was successfully able to conduct 10 user interviews, 2 user observations, and 33 survey responses.
      </p>

      <p className="text"><b>Key Insights</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>No common time of availability</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Inability to express emotions and personal expression</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Using multiple platforms for sharing and communication</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Parents are always worried about their child's safety</li>
      </ul>

      <h2 className="second-header">Journey Mapping</h2>
      <img src={journey} alt="Journey Map" className="project-img" />

      <h2 className="second-header">Personas</h2>
      <img src={persona} alt="User Personas" className="project-img" />

      <h2 className="second-header">Value Opportunity Analysis (VOA)</h2>
      <p className="text">
        This tool enabled us to narrow our focus when we began to brainstorm ideas for our product.
      </p>
      <img src={bar} alt="VOA Chart" className="project-img" />

      <h2 className="second-header">Key Product Requirements</h2>

      <p className="text"><b>Emotion</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Possess the ability to share emotion</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Provide the option to share information which assures others of one's safety</li>
      </ul>

      <p className="text"><b>Identity</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Enable easy sharing of future plans and activities</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Enable others to share their location or travels</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Not inhibit personal expression</li>
      </ul>

      <h2 className="second-header">Concept Generation Process</h2>
      <p className="text">
        I came up with 10 concepts, ranging from AI and VR solutions to simple displays using approaches such as
        analogical reasoning, forced analogy, and biomimicry.
      </p>
      <img src={concept} alt="Concept Generation" className="project-img project-img--small" />

      <p className="text">
        We used the 2X2 matrix to understand where our ideas stood in the product space.
      </p>
      <img src={two} alt="2x2 Matrix" className="project-img project-img--small" />

      <p className="text"><b>Affinity Diagram</b></p>
      <img src={affinity} alt="Affinity Diagram" className="project-img project-img--small" />

      <p className="text"><b>Dot Voting</b></p>
      <img src={dot} alt="Dot Voting" className="project-img project-img--small" />

      <p className="text"><b>Pugh Chart</b></p>
      <img src={pugh} alt="Pugh Chart" className="project-img project-img--small" />

      <h1 className="main-header">Solution</h1>
      <p className="text">
        Based on tools we used for concept evaluation, and further brainstorming with the team and our HP Mentor,
        we decided to develop "Action Button" which would then be named Rumifico, as our final idea.
      </p>

      <h2 className="second-header">Final Concept</h2>
      <p className="text"><b>Functionality</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Easily communicates availability and unavailability</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Messages are completely customizable allowing full self expression</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>The companion app streamlines communication by filtering out extra notifications</li>
      </ul>

      <p className="text"><b>Usability</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Nostalgia design allows individuals who struggle with newer technology to engage seamlessly</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Companion app is streamlined to the basic necessities</li>
      </ul>

      <h2 className="second-header">Mobile Application</h2>
      <p className="text">
        My primary involvement in the product creation was on the software side. We wanted to build an intuitive
        and easy to use platform suitable for both parents and college children.
      </p>

      <div className="overall-container">
        <div className="wasteless-container">
          <div className="wasteless-image">
            <img src={mob1} alt="Rumifico Family Page" height="400px" />
          </div>
          <div className="wasteless-text">
            <p className="wasteless-para">
              The family page provides users with a quick glimpse of the family members that they have added
              to the Rumifico Ecosystem.
            </p>
          </div>
        </div>

        <div className="wasteless-container">
          <div className="wasteless-image">
            <img src={mob2} alt="Rumifico Quick Send" height="400px" />
          </div>
          <div className="wasteless-text">
            <p className="wasteless-para">
              In the quick send page, the user can get a glimpse of the latest chat and send quick messages
              to the user's Rumifico Device.
            </p>
          </div>
        </div>

        <div className="wasteless-container">
          <div className="wasteless-image">
            <img src={mob3} alt="Rumifico Detailed Chat" height="400px" />
          </div>
          <div className="wasteless-text">
            <p className="wasteless-para">
              If the user wishes to see more detailed information about past conversations, they can easily
              access it through the Detailed Chat page.
            </p>
          </div>
        </div>
      </div>

      <h2 className="second-header">Hardware</h2>
      <p className="text">
        With the use of high power efficient display technology, the e-ink display, we created a minimalistic
        design that would ease and promote communication between the child and the parent.
      </p>

      <img src={hard} alt="Rumifico Hardware" className="project-img" />

      <p className="text"><b>Components</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>E-ink display with an e-hat module</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Micro processor to bring all the components together</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Battery of a certain specification</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Wifi and bluetooth module</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Push buttons and LED</li>
      </ul>

      <p className="text"><b>Fabrication</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Use of ABS plastic material for the casing</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>All edges are chamfered and rounded off</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Simple assembly procedure following DFMA principles</li>
      </ul>

    </div>
    <Footer />
    </>
  );
};

export default Rumifico;
