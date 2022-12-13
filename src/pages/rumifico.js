import "./proj.css"
import mob1 from "../Img/mob1.png"
import mob2 from "../Img/mob2.png"
import mob3 from "../Img/mob3.png"
import homepic from "../Img/Homepic.jpeg"
import stakeholder from "../Img/stakeholder.png"
import ideation from "../Img/ideation.png"
import journey from "../Img/journeymap.png"
import persona from "../Img/persona.png"

import concept from "../Img/concept.png"
import two from "../Img/two.png"
import affinity from "../Img/affinity.png"
import dot from "../Img/dot.png"
import pugh from "../Img/pugh.png"
import hard from "../Img/hard.png"



import bar from "../Img/bar.png"
import Footer from "../Components/footer"


const Rumifico = () => {
    return (
        <div>
            
            <h1 className="title-head"> Rumifico </h1>
            <h1 className="main-header"> Problem </h1>
            <h2 className="second-header"> Overview </h2>
            <p className = "text"> HP approached my team with the problem statement of creating a way for users to share, transfer, and display photos and precious memories/moments to create better connections among users. My role in this project is primarily as a UX Researcher, UI Designer for the mobile component of the product, and Software Developer. Since HP provided us with the flexibility of altering the problem statement as we conduct our research, we started out by spending time to understand the problem space. 
            </p>


            <h2 className="second-header"> SET Factors </h2>
            <p className = "text" > We began by identifying the SET factors, which consists of Social, Economic, and Technological attributes relevant to the problem space. </p>
            
            
            <p className = "text" ><b> Social </b>  </p>

            <ul>
                <li className = "text">Seeking ways to connect with individuals beyond platforms currently available (making connections more “real”)</li>
                <li className = "text">Shared memories are more like connection with another person, losing connection and being isolated can lead to mental health issues.</li>
                <li className = "text">Strong desire to stay connected with people that are geographically distant</li>
            </ul>
            <br/>

            <p className = "text" > <b> Economic </b>  </p>
            
            <ul>
                <li className = "text">58 percent of first-year students attended colleges and universities that were more than 50 miles(80km) away from home</li>
                <li className = "text">Wide variety of everyone’s disposable income within one family</li>
                <li className = "text">Since the start of the 21st century, the number of migrants has grown exponentially, from 173 million in 2000 to 244 million in 2015</li>
            </ul>
            <br/>


            <p className = "text" > <b> Technological </b> </p>
            
            <ul>
                <li className = "text">Abundance of social media for young adults, lack of platforms to foster inter-generational communication</li>
                <li className = "text">Use of AR/VR to recreate environments</li>
            </ul>
            <br/>

            <p className = "text" > We then came up with 50 Product Opportunities Gap (POG) as a team and used affinity mapping and weighted matrix to narrow down the one that we would focus. As an international student myself, I felt that the biggest opportunity was strained interaction between parents and children once they move out to college. 
            </p>

            <img  src={ideation} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> Final POG: <b>Facilitate interaction between parents and children once they move away to college, such as sharing daily updates and key moments.</b> </p>
            


            <h2 className="second-header"> Stakeholder Map </h2>
            <img  src={stakeholder} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />


            <h1 className="main-header"> Findings </h1>
            <h2 className="second-header"> User Research </h2>

            <p className = "text"> I personally reached out to friends and families to conduct user interviews and understand their needs. It was interesting to learn how the length of interaction, the nature of conversation were so vastly different from person to person. The User interviews helped me overcome the bias I had with my preconcieved notions about parent child relationships. While it was difficult to interview both the college student and their parent at the same time, the team was successfully able to conduct 10 user interviews, 2 user Observations, and 33 Survey Responses. 
            </p>
            

            <p className = "text"> <b> Key Insights </b> </p>
            <ul>
                <li className = "text">No common time of availability </li>
                <li className = "text">Inability to express emotions and personal expression </li>
                <li className = "text">Using multiple platforms for sharing and communication </li>
                <li className = "text">Parents are always worried about their child’s safety </li>
            </ul>

            <h2 className="second-header"> Journey Mapping </h2>
            <img  src={journey} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <h2 className="second-header"> Personas </h2>
            <img  src={persona} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <h2 className="second-header"> Value Opportunity Analysis (VOA) </h2>
            <p className = "text"> This tool enabled us to narrow our focus when we began to brainstorm ideas for our product. We focused on increasing the VOA’s of Independence, Security, and Identity, additionally as a trade off we focused less on comfort and environment. 
            </p>
            <img  src={bar} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <h2 className="second-header"> Key Product Requirements </h2>

            <p className = "text"> <b> Emotion </b> </p>
            <ul>
                <li className = "text">Possess the ability to share emotion </li>
                <li className = "text">Provide the option to share information which assures others of one’s safety and well-being </li>
            </ul>

            <p className = "text"> <b> Identity </b> </p>
            <ul>
                <li className = "text">Enable easy sharing of future plans and activities </li>
                <li className = "text">Enable others to share their location or travels.</li>
                <li className = "text">Not inhibit personal expression</li>
            </ul>

            <h2 className="second-header"> Concept Generation Process</h2>
            <p className ="text"> I came up with 10 concepts, ranging from AI and VR solutions to simple displays using approaches such as analogical reasoning, forced analogy, and biomimicry to come up with ideas. We then iterated our 50 ideas together using Brainwriting and Mind-mapping. 
  </p>

            <img  src={concept} alt="Home" width = "40%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />




            <p className ="text"> We used the 2X2 matrix to understand where our ideas stood in the product space, and began concept selection. I was glad to find out that our ideas were not concentrated to a single segment of the 2 by 2 matrix. </p>
            <img  src={two} alt="Home" width = "40%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> <b> Affinity Diagram </b> </p>
            <p className = "text"> We combined redundant/similar ideas into one group and created a 'feature graveyard' for rejected ideas in case we wanted to revisit them later. </p>
            <img  src={affinity} alt="Home" width = "50%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> <b> Dot Voting</b> </p>
            <p className = "text"> Each of us voted based on the ideas that appealed most to us.  </p>
            <img  src={dot} alt="Home" width = "50%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> <b> Pugh Chart </b> </p>
            <p className = "text"> Our team came up with a list of attributes and scores that reflected the needs of our users and alignment with project goals. Based on our scoring, a clear winner emerged.  </p>
            <img  src={pugh} alt="Home" width = "50%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />



            <h1 className="main-header"> Solution </h1>
            <p className = "text"> Based on tools we used for concept evaluation, and further brainstorming with the team and our HP Mentor, we decided to develop “Action Button” which would then be named Rumifico, as our final idea. 
            </p>
            
            <h2 className="second-header"> Final Concept </h2>
            <p className = "text"> <b> Functionality </b> </p>
            <ul>
                <li className = "text">Easily communicates availability and unavailability </li>
                <li className = "text">Messages are completely customizable allowing full self expression.</li>
                <li className = "text">The companion app combined with Rumifico hardware streamlines communication as it allows individuals to filter out all extra notifications and noise a smartphone provides</li>
            </ul>

            <p className = "text"> <b> Usability </b> </p>
            <ul>
                <li className = "text">Nostalgia design allows for individuals who struggle with newer technology to engage seamlessly </li>
                <li className = "text">Companion app is streamlined to the basic necessities</li>
            </ul>

            <p className = "text"> <b> Visual Design </b> </p>
            <ul>
                <li className = "text">Nostalgia Design – taken inspiration from a pager </li>
                <li className = "text">Compact size for portability</li>
            </ul>

            <h2 className="second-header"> Mobile Application </h2>

            <p className = "text"> My primary involvement in the product creation was on the software side of the product. We wanted to build an intuitive and easy to use platform that is suitable for both parents and college children. The User Interface consists of three pages: Family Page, Quick Send Page, and Detailed Chat page. On the backend, the app needs to linked to a database server that stores metadata about the family members, the devices that it is linked to, and chat history information.
            </p>
            <div className= "overall-container">

                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={mob1} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> The family page provides users with a quick glimpse of the family members that they have added to the Rumifico Ecosystem. Users are also able to update their family member ecosystem from this page.
                    </p>
                    </div>
                </div>


                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={mob2} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> In the quick send page, the user is able to get a glimpse of the latest chat with their family member and is able to send quick messages, automated or otherwise, to the user’s Rumifico Device.
                        </p>
                    </div>
                </div>


                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={mob3} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> If the user wishes to see more detailed information about past conversations, they can easily access it through the Detailed Chat page.
                    </p>
                    </div>
                </div>

            </div>

            <h2 className="second-header"> Hardware </h2>
            
            <p className = "text"> With the use of high power efficient display technology, the e-ink display, we created a minimalistic design that would ease and promote communication between the child and the parent. It comprises of an aurdino uno, multipurpose wifi module, an e-ink display, a battery, and an e-hat display module. With the help of an aurdino and the multipurpose wifi module the data is transferred back and forth and processed for the e-ink display to display the messages. The three push buttons what we call the ‘amor’ are preset to quickly send replies without distracting oneself. 
            </p>
 
            <img  src={hard} alt="Home" width = "60%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> <b> Components </b> </p>
            <ul>
                <li className = "text">E-ink display of the required size along with an e-hat module </li>
                <li className = "text">Micro processor to bring all the components together and function as intended</li>
                <li className = "text">Battery of a certain specification</li>
                <li className = "text">Wifi and bluetooth module</li>
                <li className = "text">Push buttons and Led </li>
            </ul>

            <p className = "text"> <b> Fabrication </b> </p>
            <ul>
                <li className = "text">Use of ABS plastic material to produce the casing keeping it cheap and easy for post-production operations. </li>
                <li className = "text">All edges are chamfered and rounded off as it is a device frequently touched.  </li>
                <li className = "text">Simple assembly procedure while following all the DFMA principles.  </li>
            </ul>

            <p className = "text"> <b> Feasiblity </b> </p>
            <ul>
                <li className = "text">Integration of the software and hardware has to be tested in the real world. </li>
                <li className = "text">Hardware system is proven to work in the prototyping section.</li>
            </ul>
            <br/>
            <Footer> </Footer>


            
        
        </div>
    )
}

export default Rumifico