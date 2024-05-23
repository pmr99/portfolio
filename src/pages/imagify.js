import "./proj.css"
import intro from "../Img/introai.png"
import logo from "../Img/imagifylogo.png"
import prompt from "../Img/promptimg.png"
import output from "../Img/titleai.png"
import Footer from "../Components/footer"
import Description from "../Img/imagifyDescription.png"
import Intro from "../Img/imagifyIntro.png"
import image from "../Img/imagifyimages.png"
import songs from "../Img/imagifySongs.png"

const Imagify = () => {
    return (
        <div>

            <h1 className="title-head"> Imagify </h1>
            <div className = "viewproject"> 
            <a href = "https://imagify-six.vercel.app" style = {{textDecoration:"none"}}>
            <img  src={logo} alt="Home" width = "100%" style= {{paddingTop:"8px", paddingBottom: "0px"}} />
            <p className="text" style = {{textAlign : "center", paddingTop: "12px"}}> <b> View Project </b> </p>
            </a>
            </div>
            
            <h1 className="main-header"> Presenting Imagify </h1>
            <h2 className="second-header"> What is Imagify? </h2>
            <p className="text"> Imagify is a tool that transforms your recent Spotify listening activity into a creative illustration using . DALL·E 3 and Spotify's Developer tools. Can you guess your top 5 recently listened songs?

            </p>
            <img  src={Intro} alt="Home" height = "500px" style= {{marginTop:"20px", marginBottom: "30px", borderRadius: "30px"}} />
            <h1 className="second-header"> My Inspiration </h1>
            <p className="text"> Realizing that generative AI is an excellent tool for gamification, I began brainstorming ways to use models like text-to-image for creating fun and interactive experiences. As an avid music listener, I experimented with the Spotify Developer tools and discovered that the Spotify API provides information not easily accessible through the Spotify UI, such as the top five recently listened songs over various periods. When I pulled this data, I was surprised to learn about my own listening patterns. This realization sparked an idea: to use generative AI to gamify Spotify listening activity.
            </p>

            <p className="text"> Here is an example of a beautiful image generated via Imagify. (Try to guess my top 5 songs XD)
            </p>
            <img  src={image} alt="Home" height = "500px" style= {{marginTop:"20px", marginBottom: "30px", borderRadius: "30px"}} />
            <h1 className="main-header"> How does it work? </h1>
            <p className="text"> Once you connect the Imagify web app with your Spotify account, the Spotify API retrieves your recent top five songs. Using this information and prompt engineering, I utilized DALL·E 3 to generate an image containing clues about these top five songs.
            </p>
            <p className="text"> The right column contains a reveal button for users to check if their guesses were correct.  
            </p>
            <img  src={songs} alt="Home" height = "400px" style= {{paddingTop:"20px", paddingBottom: "30px"}} />
            <p className="text">Below the generated image, there is an explanation detailing how the song titles were used to create the image. This was a challenging task, as OpenAI currently does not support multimodal input. I overcame this by using its LLM model and prompt engineering to describe an image that would be hypothetically created using DALL·E 3. Although not through multimodal models, the results were reliable. Here is an example.
            </p>
            <img  src={Description} alt="Home" height = "400px" style= {{marginTop:"20px", marginBottom: "30px", borderRadius: "12px"}} />
            <p className="text" style= {{paddingBottom: "12px"}}> If you liked this project, feel free to reach out to me!</p>
            <Footer> </Footer>
        </div>
    )
}

export default Imagify