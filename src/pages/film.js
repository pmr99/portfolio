import CakePoster from "../Img/CakePoster.png";
import Cake_2 from "../Img/cake_2.png";
import Cake_3 from "../Img/cake_3.png";
import Cake_4 from "../Img/cake_4.png";
import Cake_5 from "../Img/cake_5.png";
import Chance_1 from "../Img/chance_1.png";
import Chance_2 from "../Img/chance_2.png";
import Chance_3 from "../Img/chance_3.png";
import Chance_4 from "../Img/chance_4.png";
import Chance_5 from "../Img/chance_5.png";
import Chance_6 from "../Img/chance_6.png";
import Chance_7 from "../Img/chance_7.png";
import Chance_8 from "../Img/chance_8.png";
import Chance_9 from "../Img/chance_9.png";
import Potato1 from "../Img/potato1.png";
import Potato2 from "../Img/potato2.png";
import Potato3 from "../Img/potato3.png";
import Potato4 from "../Img/potato4.png";
import Potato5 from "../Img/potato5.png";
import Potato6 from "../Img/potato6.png";
import Potato7 from "../Img/potato7.png";
import Potato8 from "../Img/potato8.png";
import Potato9 from "../Img/potato9.png";
import Potato10 from "../Img/potato10.png";
import Camp1 from "../Img/camp1.png";
import Camp2 from "../Img/camp2.png";
import Camp3 from "../Img/camp3.png";
import Camp4 from "../Img/camp5.png";
import Camp5 from "../Img/camp5.png";
import Camp6 from "../Img/camp6.png";
import Camp7 from "../Img/camp7.png";
import Camp8 from "../Img/camp8.png";
import { PiFilmSlateBold } from "react-icons/pi";
import "./film.css";
import Footer from "../Components/footer";

const campanileDescription = "Eighteen-year-old Lara is overwhelmed with emotions as she receives her Berkeley acceptance letter. Like most of us, she goes down the rabbit hole of \"Day in a Life\" Youtube and falls into a trance of her future college journey at Berkeley.";
const secondChanceDescription = "\"A Second Chance\" depicts how the life of a working mother changed when she had to go through kidney dialysis and eventually receive a kidney transplant from her husband. This short film won \"Potpourri of Vignettes\", a short film competition organised by National University Centre for Organ Transplantation (NUCOT).";
const vermilionDescription = "An amateur play director is desperate to impress their older sibling with their first show, but they quickly learn that theater is not for everybody.";
const potatoManDescription = "In 'Mr. Potato Man', a high school teacher navigates the humor and challenges of online teaching, forming unexpected connections with students who rally to support him beyond the virtual classroom. This film won first place for Pitch It! 2022, organised by NUS's CNM Society and G.H.Y Culture & Media.";

const FilmSection = ({ title, role, description, videoUrl, images, mainImage }) => (
  <div className="film-section">
    <h2 className="film-subheader">{title}</h2>
    <h3 className="film-role">{role}</h3>
    {description && <p className="film-description">{description}</p>}
    {videoUrl && (
      <div className="film-video">
        <iframe src={videoUrl} title={title} allowFullScreen />
      </div>
    )}
    {mainImage && (
      <div className="film-gallery film-gallery--full">
        <img src={mainImage} alt={title} />
      </div>
    )}
    {images && images.length > 0 && (
      <div className="film-gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`${title} still ${i + 1}`} />
        ))}
      </div>
    )}
  </div>
);

const Film = () => {
  return (
    <div className="film-page">
      <div className="film-content">
        <div style={{ textAlign: "center" }}>
          <PiFilmSlateBold size={80} className="film-icon" />
          <h1 className="film-title">Film</h1>
        </div>

        <FilmSection
          title="Workday Marketing Video"
          role="Director, Writer"
          description={<span className="coming-soon">Coming Soon</span>}
        />

        <FilmSection
          title="Campanile's The Limit"
          role="Director, Writer"
          description={campanileDescription}
          videoUrl="https://www.youtube.com/embed/pTzNH-Z_ngI?si=H2K_Bvq6AKscgOp1"
          images={[Camp1, Camp2, Camp3, Camp4, Camp5, Camp6, Camp7, Camp8]}
        />

        <FilmSection
          title="Second Chance"
          role="Director, Writer"
          description={secondChanceDescription}
          mainImage={Chance_1}
          images={[Chance_2, Chance_3, Chance_4, Chance_5, Chance_8, Chance_9, Chance_6, Chance_7]}
          videoUrl="https://www.youtube.com/embed/TvFBRWt55l0?si=imCo_hZ0A7MIW6wS"
        />

        <FilmSection
          title="VERMILION"
          role="Writer"
          description={vermilionDescription}
          videoUrl="https://www.youtube.com/embed/E--PMPjACzY?si=IK6PcX80fmA5_kZ0"
        />

        <FilmSection
          title="Mr Potato Man"
          role="Director, Writer"
          description={potatoManDescription}
          images={[Potato1, Potato2, Potato3, Potato4, Potato5, Potato6, Potato7, Potato8, Potato9, Potato10]}
          videoUrl="https://www.youtube.com/embed/IpYPvPlXsMs?si=HufwA-SfIBsu9kQH"
        />

        <FilmSection
          title="Cake By The Ocean"
          role="Director, Writer"
          mainImage={CakePoster}
          images={[Cake_2, Cake_5, Cake_4, Cake_3]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Film;
