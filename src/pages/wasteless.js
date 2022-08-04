import "./proj.css"
import home from "../Img/waste_home.png"
import data from "../Img/waste_data.png"
import leader from "../Img/waste_leader.png"
import homepic from "../Img/Homepic.jpeg"
import Footer from "../Components/footer"

const Wasteless = () => {
    return (
        <div>
            
            <h1 className="title-head"> WasteLess </h1>
            <h1 className="main-header"> Problem </h1>
            <h2 className="second-header"> Overview </h2>
            <p className = "text"> The lack of knowledge of personal waste production is a significant issue for Singaporeans. It makes it difficult for individuals to track and sustain efforts in reducing waste and recycling more as part of Singapore’s long-term goal of reducing waste generation by a third before 2030. According to Bloomberg, Singapore is one of the top solid waste producer per capita. While Singapore has managed to reduce its overall waste generation, particularly in industry through efforts like the EPHA for workplaces, more could be done to tackle waste production in households. My friends and I learnt that about only 17% of Singapore’s domestic waste was recycled, much lower than the 73% recycling rate for non-domestic waste. 
            </p>

            <p className = "text"> We were curious: <b>Why it is so difficult to reduce waste production in households?</b> </p>
            
            <h1 className="main-header"> Findings </h1>
            <p className = "text"> Broad government goals have little value in effecting individual behavioural changes, as people downplay their individual responsibility to make meaningful change. This is known as diffusion of responsibility or the Bystander effect where we subconsciously undermine our individual roles in a collective problem. My friends and I wanted to change this mindset by creating a solution that inculcates the importance of individual roles in solving this national issue and show them that they CAN make a difference too. 
            </p>
            <h2 className="second-header"> Bridging Behavioural Psychology and Waste Management </h2>
            <p className = "text"> Behavioural psychology or behaviourism, is a theory suggesting that the environment shapes human behaviour. In a most basic sense, behavioural psychology is the study and analysis of observable behaviour. We came across a 2018 study from the Longitudinal Field Experiment that showed how increased information intervention in the form of personalised data motivated citizens of a Swedish suburb to increase their food recycling rate. We also came across psychological concepts of behavioural nudging, comprising positive reinforcement and indirect suggestions, to encourage positive changes of citizen behaviour to reduce waste generation. For instance, the randomised field experiment on 94 hundred households in Sweden found that households who received leaflets with information encouraging recycling and waste reduction also reduced total household waste thrown by 8.3% over the course of two years.  
            </p>
            <p className ="text"> These were the inspirations for our idea. </p>

            <h1 className="main-header"> Solution </h1>
            <p className = "text"> Our solution will make use of a two pronged approach, modifying existing rubbish chutes to add the ability to sense and record waste data by mass and the development of a mobile App to return this data to the user.</p>
            <h2 className="second-header"> Mobile Application </h2>

            <p className = "text"> Our mobile app is designed with usability, usefulness in mind for our users. Monitor wastage and compare your daily performance against neighbours and the nation with our realtime leaderboards. 
            </p>
            <div className= "overall-container">

                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={home} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> The Homepage enables users to view their waste disposal at a glance, by displaying key information such as statistics of waste thrown by user in the current week and average waste thrown that week by all users. A visual is also provided for the user to gauge their own performance relative to the rest of the community.
                    </p>
                    </div>
                </div>


                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={data} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> We nudge our users to encourage behavior changes that reduce waste generation. This is based on similar efforts that have successfully encouraged recycling and directed overseas policies. Our goal is to use relative performance as a motivational nudge as well as to appreciate the efforts of the community as a whole.
                        </p>
                    </div>
                </div>


                <div className = "wasteless-container">
                    <div className = "wasteless-image">
                        <img  src={leader} alt="Home" height = "400px" />
                    </div>
                    <div className = "wasteless-text">
                        <p className = "wasteless-para"> While we collectively work toward a zero-waste future, it is hard for the individual to quantify their impact without personalized knowledge of their waste habits, diffusing the responsibility of waste management to other parties. WasteLess supports its users by visualizing the relevant data so they can see their history and compare that to where they are now.
                    </p>
                    </div>
                </div>

            </div>

            <h2 className="second-header"> Hardware </h2>
            
            <p className = "text"> Our Internet-of-Things networked smart chute electronics are be installed on existing rubbish chutes to convert them into WasteLess chutes. 
            </p>
 
            <img  src={homepic} alt="Home" height = "400px" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <p className = "text"> The Weight Sensors detect the weight of the trash. These sensors will be attached to a plastic board affixed to the base of the chute compartment. There is also the Main Electronics housing, attached to the outside of the chute compartment. This housing will contain a single board computer that runs the sensors and uploads the data online, and also LED indicators that provide certain signals.
            </p>
            <h2 className="second-header"> Outcome </h2>
            <p className= "text"> After months of design, development and testing, WasteLess was officially rolled out in a trial at the National University of Singapore’s Tembusu Residential College where Tembusu residents had their existing community rubbish chutes on their levels replaced by WasteLess smart chutes. 
            </p>
            <h1 className="main-header"> Recognition </h1>
            <h2 className="second-header"> South West Eco Fund </h2>
            <p className = "text"> We attained the initial seed funding through the South West Eco Fund Plus, awarded by the Southwest Community Development Council. CDC believed in our idea and the potential for change it could have, and laid the foundations for our efforts.
            </p>
            <h2 className="second-header"> SG Eco Fund </h2>
            <p className = "text"> The Ministry of Sustainability and the Environment recognized NUS’s Towards Zero Waste precincts mission, and awarded a grant to further expand the projects under NUS’s Towards Zero Waste precincts.
            </p>
            <h2 className="second-header"> Sustainable Campus Excellence Award </h2>
            <p className = "text"> We are honored to be part of NUS’s Zero Waste testbed initiative. This initiative, along with NUS’s Zero Waste 2030 action plan, was awarded the Sustainable Campus Excellence Award. In the video celebrating this recognition of NUS’s efforts, our WasteLess chute was proudly featured, bringing us much pride.
            </p>
            <h2 className ="second-header"> Rice Media</h2>
            <p className = "text"> Rice Media contacted us to get the low down on our WasteLess project. We were more than happy to show them around and share with them our vision for the project. Drilling down on our thoughts through the interview, they were kind enough to feature us on their website.</p>
            <h2 className ="second-header"> Ministry of Education</h2>
            <p className = "text"> MOE featured our efforts on their very own schoolbag site. They highlighted the efforts of our team with pictures of them at work designing and building the chute. More specifically, they acknowledged all the additional stuff we had to learn to create the project, as well as its hackathon beginnings.
            </p>
            <Footer> </Footer>


            
        
        </div>
    )
}

export default Wasteless