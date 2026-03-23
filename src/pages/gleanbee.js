import "./proj.css";
import mid1 from "../Img/gleanmid1.png";
import mid2 from "../Img/gleanmid2.png";
import mid3 from "../Img/gleanmid3.png";
import mid4 from "../Img/gleanmid4.png";
import mid5 from "../Img/gleanmid5.png";
import mid6 from "../Img/gleanmid6.png";
import mid7 from "../Img/gleanmid7.png";
import mid8 from "../Img/gleanmid8.png";
import mid9 from "../Img/gleanmid9.png";
import mid10 from "../Img/gleanmid10.png";
import mid11 from "../Img/gleanmid11.png";
import mid12 from "../Img/gleanmid12.png";
import gleancolor from "../Img/gleancolor.png";
import hi1 from "../Img/gleanhi1.png";
import hi2 from "../Img/gleanhi2.png";
import hi3 from "../Img/gleanhi3.png";
import hi4 from "../Img/gleanhi4.png";
import hip1 from "../Img/gleanhip1.png";
import hip2 from "../Img/gleanhip2.png";
import hip3 from "../Img/gleanhip3.png";
import hip4 from "../Img/gleanhip4.png";
import hip5 from "../Img/gleanhip5.png";
import hip6 from "../Img/gleanhip6.png";
import hip7 from "../Img/gleanhip7.png";
import hip8 from "../Img/gleanhip8.png";
import Footer from "../Components/footer";

const ImageGrid = ({ images }) => (
  <div className="bigplanet_overall_container">
    {images.map((img, i) => (
      <div className="fi_container" key={i}>
        <img src={img} alt={`Mockup ${i + 1}`} />
      </div>
    ))}
  </div>
);

const Gleanbee = () => {
  return (
    <>
    <div className="project-page">
      <h1 className="title-head">Gleanbee</h1>

      <h1 className="main-header">Overview</h1>
      <p className="text">
        Gleanbee is a data aggregating platform that simplifies curating information online. Gleanbee has 2
        components, a web-browser plug-in to curate information, and a web app to view and organise content.
      </p>
      <p className="text">
        The UI was not intuitive for new users to navigate, and there were multiple unnecessary steps in the
        user's journey to accomplish different tasks. Identifying these problems, I came up with a new design
        for both the web platform and the plug-in with hopes of overcoming these issues.
      </p>

      <h1 className="main-header">My Approach</h1>
      <p className="text">
        After interviewing potential users, I created journey maps for the different goals a user would achieve
        through the platform. After sketching out different ideas, I came up with the following mockups for both
        the web application and the plug-in. Since I had prior web development experience, I also helped to
        contribute by coding some of the features using Angular.
      </p>

      <h2 className="second-header">Mid-Fi: Web App</h2>
      <ImageGrid images={[mid1, mid2, mid3, mid4]} />

      <h2 className="second-header">Mid-Fi: Web Plug-in</h2>
      <ImageGrid images={[mid5, mid6, mid7, mid8, mid9, mid10, mid11, mid12]} />

      <h2 className="second-header">Hi-Fi</h2>
      <p className="text">
        I finalised the following color palette. Brown is often associated with dependability and security,
        the key characteristics of how Gleanbee hopes to portray their service.
      </p>
      <div className="fi_container" style={{ textAlign: "center" }}>
        <img src={gleancolor} alt="Gleanbee Color Palette" />
      </div>

      <h2 className="second-header">Outcome</h2>
      <ImageGrid images={[hi1, hi2, hi3, hi4, hip1, hip2, hip3, hip4, hip5, hip6, hip7, hip8]} />

    </div>
    <Footer />
    </>
  );
};

export default Gleanbee;
