import "./proj.css"
import intro from "../Img/introai.png"
import logo from "../Img/ailogo.png"
import prompt from "../Img/promptimg.png"
import output from "../Img/titleai.png"
import Footer from "../Components/footer"

const Directorai = () => {
    return (
        <div>

            <h1 className="title-head"> DirectorAI </h1>
            <div className = "viewproject"> 
            <a href = "https://director-ai.vercel.app/#home" style = {{textDecoration:"none"}}>
            <img  src={logo} alt="Home" height = "230px" style= {{paddingTop:"8px", paddingBottom: "0px"}} />
            <p className="text" style = {{textAlign : "center"}}> <b> View Project </b> </p>
            </a>
            </div>
            
            <h1 className="main-header"> Presenting DirectorAI </h1>
            <h2 className="second-header"> What is DirectorAI? </h2>
            <p className="text"> DirectorAI is a web application that leverages ChatGPT and DALL·E-2 to generate personalized marketing video concepts. Through effective prompt engineering of short-form video marketing principles, DirectorAI produces creative and practical marketing video concepts,
            </p>
            <img  src={intro} alt="Home" height = "400px" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className="text"> Our access to smartphones has made it a lot easier to record high quality videos, 
 <b> but Is there a way to make high quality ideas equally accessible too?</b> </p>

            <h1 className="second-header"> My Inspiration </h1>
            <p className="text"> As a writer and shortfilm maker, I've often contemplated the practical applications of Text-to-Image (TTI) and Large Language Models (LLM) in the creative process, especially in concept generation. Drawing from my experiences, especially in projects involving external stakeholders unfamiliar with the film process, I recognize the effectiveness of a mood board in articulating my vision. This lead me to build a tool that helps create and convey video concepts. 
            </p>
            <p className="text"> For solo entrepreneurs, and small business owners, the constraints of resources and time can make it difficult to create compelling marketing videos. Someone running a bakery would much rather focus on the core business operation of making the perfect products as compared to video production. DirectorAI emerges as a valuable resource, offering an efficient solution for crafting effective video campaigns. TTI and LLM, when integrated, do not replace creativity but act as practical tools for collaborative ideation, providing an invaluable starting point for generating diverse and impactful ideas.
            </p>

            <h1 className="main-header"> How does it work? </h1>
            <p className="text"> Let’s say you are part of a startup coming up with a new VR headset that is affordable with cutting edge features in areas like gaming, communication, and education. You are brainstorming ideas for a short form marketing video to attract consumers. directorAI would be a great assistant to ideate. Here’s how’s done!</p>
            <p className="text"> You will be asked a few questions regarding your business / campaign ranging from your target audience to your preferred tone of the marketing video. 
            </p>
            <img  src={prompt} alt="Home" height = "400px" style= {{paddingTop:"20px", paddingBottom: "30px"}} />
            <p className="text"> By providing detailed and insightful answers, you pave the way for a more personalized and effective video concept that aligns seamlessly with your goals and resonates with your audience. 
            </p>
            <img  src={output} alt="Home" height = "400px" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <h1 className="main-header"> Development Process</h1>
            <p className="text"> I used ReactJs to build the web application, and used the API endpoints from openAI. I then published the tool using Vercel. 
            </p>
            <h2 className="second-header"> Large Language Models (LLM) </h2>
            <p className="text"> Once the user submits their input, it is then processed to formulate a precise prompt for ChatGPT. Subsequently, ChatGPT generated a Json file encompassing an overview of the idea, scene titles, detailed scene descriptions, and image prompts for each scene. 
            </p>
            <h2 className="second-header"> Text-to-Image (TTI) </h2>
            <p className="text"> To enhance the efficacy of the image prompts, a secondary processing stage was implemented, involving the refinement of image prompts to create more impactful inputs. These refined prompts were then channeled through DALL·E-2, contributing to the visual representation of the scenes. However, there is an imposed constraint of  5 API calls per minute limit for image generation, so I implemented periodic delays for all the scenes to be displayed. 
            </p>
            <h2 className="second-header"> Prompt Engineering </h2>
            <p className="text"> From the user’s input, I integrated marketing principles tailored for short-form videos. This encompassed strategic elements such as capturing the viewer's attention within the initial 5-10 seconds, incorporating calls to action, and infusing humor where applicable. Furthermore, for image generation, I incorporated keywords like "cinematic" and "promotional" to enhance the generated visuals. 
            </p>
            <p className="text"> If you liked this project, feel free to reach out to me!</p>
            <Footer> </Footer>




        </div>
    )
}

export default Directorai