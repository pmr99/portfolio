import "./proj.css"
import intro from "../Img/introai.png"
import logo from "../Img/imagifylogo.png"
import prompt from "../Img/promptimg.png"
import output from "../Img/titleai.png"
import Footer from "../Components/footer"
import Description from "../Img/imagifyDescription.png"
import Intro from "../Img/imagifyIntro.png"
import image from "../Img/imagifyimages.png"
import pairlogo from "../Img/pairlogo.png"
import pairarch from "../Img/pairarch.png"


const Pair = () => {
    return (
        <div>

            <h1 className="title-head"> PaiR </h1>
            <div class="embed-responsive embed-responsive">
                <iframe class="embed-responsive-item" style = {{width: "85%", height: "700px", padding: "10px"}} src="https://www.youtube.com/embed/ppv66OFRRoE" allowFullScreen></iframe>
            </div>
            
            <h1 className="main-header"> Presenting PaiR </h1>
            <p className="text"> PaiR is an AI-driven interview experience for aspiring Software Engineers.
            </p>
            <h1 className="second-header"> Problem </h1>
            <p className="text"> Software Engineering job candidates often find it challenging to prepare effectively for interviews. There are no available platforms that provide on demand, affordable, and reliable mock interview experience. 
            </p>

            <p className="text"> Meanwhile, software engineering employers have limited resources to conduct interviews. Companies need to sacrifice engineers’ work hours for interviews. As each candidate goes through multiple rounds of interviews, vast amounts of engineering hours are diverted from meaningful work.
            </p>
            <img  src={pairlogo} alt="Home" height = "500px" style= {{marginTop:"20px", marginBottom: "30px", borderRadius: "30px"}} />
            <h1 className="second-header"> Solution </h1>

            <p className="text"> Given the advent of multimodal LLMs, I came up with a platform that enables realistic software engineering interviews, deployable any time of the day. Leveraging Speech-to-speech AI APIs, the AI interviewer will communicate with the user via audio conversation and scratch text (code, notes, excel sheets, etc). Throughout the session, users can ask questions and report their progress in real time.
            </p>
            <p className="text"> At the end of each interview, our platform provides personalized feedback, highlighting strengths and areas for improvement in behavioral and technical arenas. For job candidates, PaiR will be a platform to practice their interview skills at an affordable price. For employers, PaiR will be a platform that can not only reduce time spent on interviews, but also offer interview opportunities for vast pool of applicants.
            </p>
            <h1 className="main-header"> How does it work? </h1>
            <p className="text"> In the first version, as OpenAI’s Realtime API is expensive at the moment, I experimented with Speech-to-text + Text-to-text + Text-to-speech AI models. While this approach may add latency as seen in the demo video, I hope to use inference optimization tools like NVIDIA’s TensorRT or call-caching to improve latency. For the web development stack, I used ReactJs with a GoLang backend. Also in the works is PostgreSQL for database, Redis for session-specific data storage, and Python for data analysis and web scraping. 
            </p>
            <img  src={pairarch} alt="Home" height = "500px" style= {{marginTop:"20px", marginBottom: "30px", borderRadius: "30px"}} />

            <h1 className="main-header"> Thought Process that Lead to this Idea</h1>
            <p className="text"> Software Engineering have a relatively standardized approach of conducting interviews, allowing an expected format for mock interviews. However, college students and new comers to the industry find it extremely difficult to schedule, let alone find a partner to conduct a mock interviews with. Even if they do find a practice partner through existing platforms, there are frequent no-shows, and the quality of the interviews are not guaranteed.
            </p>
            <p className="text"> Recruiting for big tech companies in one of the toughest job markets in history, us founders have faced this exact problem during our years in college and fully resonate with students struggling to land on their dream jobs. Thus, we decided on this idea to not only help students get enough interview practice, but also relieve their anxiety of not being confident enough going into an interview.
            </p>
            <p className="text"> There are also 300,000~400,000 software engineering job openings every year. An entry-level position takes 3~5 interview rounds, and a senior-level position takes 5~7 interview rounds. A problem we see at our current jobs is that companies divert millions of engineering hours away from meaningful work just to conduct interviews. Given the high hourly wage of engineers who conduct the interviews, companies sacrifice vast amounts of operational costs for interviews. PaiR can safely replace a bulk of the interview processes at a fraction of such operational costs.
            </p>
            <p className="text"> Moreover, as engineers only have limited amount of time available for interviews, they can only interview a tiny subset of the applicants. Thus, recruiters filter out 90+% of the candidates during resume screening before advancing them for interviews. This approach poses a risk for employers, as they might not be interviewing the best candidates from the available pool. PaiR can allow employers to interview all applicants that meet the minimum qualifications, enabling them to evaluate a larger pool of candidates.
            </p>
            <p className="text"> Currently, employers require candidates to solve OAs (Online Assessments), which are coding tests with a time limit. Employers use the OA scores to extract the best performing candidates. However, with the advancement of generative AI, cheating for OAs are becoming increasingly easy, rendering their OA scores meaningless. PaiR can completely replace OAs by providing a cheating-proof and comprehensive evaluation. As our interviewees are mandated to converse and explain their answers, it will be difficult to cheat. PaiR will not only care about the candidate’s coding performance, but also their communication skills.
            </p>

            <p className="text" style= {{paddingBottom: "12px"}}> If you liked this project, feel free to reach out to me! Special thanks to Ying Lin and Vince Han who made this project possible.</p>
            <Footer> </Footer>
        </div>
    )
}

export default Pair