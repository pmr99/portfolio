import "./proj.css";
import planet1 from "../Img/planet1.png";
import planet2 from "../Img/planet2.png";
import planet3 from "../Img/planet3.png";
import planet4 from "../Img/planet4.png";
import planet5 from "../Img/planet5.png";
import planet6 from "../Img/planet6.png";
import planet7 from "../Img/planet7.png";
import planet8 from "../Img/planet8.png";
import planet9 from "../Img/planet9.png";
import low1 from "../Img/low1.png";
import low2 from "../Img/low2.png";
import low3 from "../Img/low3.png";
import mid1 from "../Img/mid1.png";
import mid2 from "../Img/mid2.png";
import mid3 from "../Img/mid3.png";
import mid4 from "../Img/mid4.png";
import mid5 from "../Img/mid5.png";
import mid6 from "../Img/mid6.png";
import mid7 from "../Img/mid7.png";
import hi1 from "../Img/hi1.png";
import hi2 from "../Img/hi2.png";
import hi3 from "../Img/hi3.png";
import hi4 from "../Img/hi4.png";
import hi5 from "../Img/hi5.png";
import hi6 from "../Img/hi6.png";
import hi7 from "../Img/hi7.png";
import hi8 from "../Img/hi8.png";
import hi9 from "../Img/hi9.png";
import hi10 from "../Img/hi10.png";
import hi11 from "../Img/hi11.png";
import sitemap from "../Img/sitemap.png";
import Footer from "../Components/footer";

const ImageGrid = ({ images }) => (
  <div className="bigplanet_overall_container">
    {images.map((img, i) => (
      <div className="fi_container" key={i}>
        <img src={img} alt={`Wireframe ${i + 1}`} />
      </div>
    ))}
  </div>
);

const Enfactum = () => {
  return (
    <>
    <div className="project-page">
      <h1 className="title-head">Enfactum</h1>

      <h1 className="main-header">Problem</h1>

      <h2 className="second-header">Overview</h2>
      <p className="text">
        Enfactum is a Singapore based consulting group with expertise that provide consulting and marketing services
        to enable companies to compete better in the Asia-Pacific market place. Given that the company has pivoted
        its direction over the past few years, the company needed to revamp its website to reflect its change.
      </p>

      <h2 className="second-header">Pain Points</h2>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Company primarily relies on the personal network for clients</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Current website does not help broadcast the company's services for potential new clients</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Current website does not align with company's branding and vision</li>
      </ul>
      <p className="text">
        As a marketing agency, the company wanted a website that is creative, unique, easy to navigate, and
        appealing to potential clients.
      </p>

      <h1 className="main-header">My Approach</h1>

      <h2 className="second-header">Site Map</h2>
      <p className="text">
        Interviewing company owner, I gained a deeper understanding of the company's vision and goals. I noted
        all the information that had to be featured on the website and then categorised them in a navigable way.
      </p>
      <div className="bigplanet_overall_container">
        <div className="fi_container">
          <img src={sitemap} alt="Site Map" />
        </div>
      </div>

      <h2 className="second-header">First Attempt</h2>
      <p className="text">
        Excited to embark on this project, I immediately sketched out a rough outline of the website.
      </p>
      <ImageGrid images={[low1, low2, low3]} />
      <p className="text">
        However, this looked like a generic website, it did not differentiate Enfactum from other websites nor
        was it uniquely representative of what Enfactum is. So I decided to scrap it.
      </p>

      <h2 className="second-header">Mid-Fi</h2>
      <p className="text">
        I took a two pronged approach when redesigning the website, understanding the marketing services industry
        and the way other similar company's approach their website, and gaining an in depth understanding of
        Enfactum and how it should be represented.
      </p>
      <p className="text">
        I felt a space theme would fit Enfactum perfectly. Enfactum is a marketing service provider that takes
        its clients to greater heights. Symbolically, Enfactum is like a space ship that guides their clients to
        their respective goals.
      </p>
      <ImageGrid images={[mid1, mid2, mid3, mid4, mid5, mid6, mid7]} />

      <h2 className="second-header">Preparation for Hi-Fi</h2>
      <p className="text">
        Using Illustrator and Figma, I then came up with the following illustrations for the website.
      </p>
      <div className="bigplanet_overall_container">
        {[planet1, planet2, planet3].map((p, i) => (
          <div className="bigplanet_container" key={i}>
            <img src={p} alt={`Planet illustration ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="bigplanet_overall_container">
        {[planet4, planet5, planet6, planet7].map((p, i) => (
          <div className="bigplanet_container" key={i}>
            <img src={p} alt={`Planet illustration ${i + 4}`} />
          </div>
        ))}
      </div>
      <div className="bigplanet_overall_container">
        {[planet8, planet9].map((p, i) => (
          <div className="bigplanet_container" key={i}>
            <img src={p} alt={`Space illustration ${i + 1}`} />
          </div>
        ))}
      </div>

      <h1 className="main-header">Outcome</h1>
      <h2 className="second-header">Final Wireframes</h2>
      <ImageGrid images={[hi1, hi2, hi3, hi4, hi5, hi6, hi7, hi8, hi9, hi10, hi11]} />
      <p className="text" style={{ fontSize: "small", textAlign: "center" }}>
        *Website content has been largely excluded in this version
      </p>

    </div>
    <Footer />
    </>
  );
};

export default Enfactum;
