import "./proj.css";
import logo from "../Img/imagifylogo.png";
import Description from "../Img/imagifyDescription.png";
import Intro from "../Img/imagifyIntro.png";
import image from "../Img/imagifyimages.png";
import songs from "../Img/imagifySongs.png";
import Footer from "../Components/footer";

const Imagify = () => {
  return (
    <>
    <div className="project-page">
      <h1 className="title-head">Imagify</h1>

      <div className="viewproject">
        <a href="https://imagify-six.vercel.app" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Imagify Logo" width="100%" style={{ paddingTop: "8px" }} />
          <p className="text" style={{ textAlign: "center", paddingTop: "12px" }}>
            <b>View Project</b>
          </p>
        </a>
      </div>

      <h1 className="main-header">Presenting Imagify</h1>
      <p className="text">
        Imagify is a tool that transforms your recent Spotify listening activity into a creative illustration
        using DALL·E 3 and Spotify's Developer tools. Can you guess your top 5 recently listened songs?
      </p>

      <img src={Intro} alt="Imagify Introduction" className="project-img" />

      <h2 className="second-header">My Inspiration</h2>
      <p className="text">
        Realizing that generative AI is an excellent tool for gamification, I began brainstorming ways to use
        models like text-to-image for creating fun and interactive experiences. As an avid music listener, I
        experimented with the Spotify Developer tools and discovered that the Spotify API provides information
        not easily accessible through the Spotify UI, such as the top five recently listened songs over various
        periods. When I pulled this data, I was surprised to learn about my own listening patterns. This
        realization sparked an idea: to use generative AI to gamify Spotify listening activity.
      </p>
      <p className="text">
        Here is an example of a beautiful image generated via Imagify. (Try to guess my top 5 songs XD)
      </p>

      <img src={image} alt="Imagify generated artwork" className="project-img" />

      <h1 className="main-header">How does it work?</h1>
      <p className="text">
        Once you connect the Imagify web app with your Spotify account, the Spotify API retrieves your recent
        top five songs. Using this information and prompt engineering, I utilized DALL·E 3 to generate an image
        containing clues about these top five songs.
      </p>
      <p className="text">
        The right column contains a reveal button for users to check if their guesses were correct.
      </p>

      <img src={songs} alt="Imagify Songs Reveal" className="project-img" />

      <p className="text">
        Below the generated image, there is an explanation detailing how the song titles were used to create the
        image. This was a challenging task, as OpenAI currently does not support multimodal input. I overcame
        this by using its LLM model and prompt engineering to describe an image that would be hypothetically
        created using DALL·E 3. Although not through multimodal models, the results were reliable. Here is an example.
      </p>

      <img src={Description} alt="Imagify Explanation" className="project-img" />

      <p className="text" style={{ paddingBottom: "12px" }}>
        If you liked this project, feel free to reach out to me!
      </p>

    </div>
    <Footer />
    </>
  );
};

export default Imagify;
