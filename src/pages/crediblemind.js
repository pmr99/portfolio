import "./proj.css"
import home from "../Img/waste_home.png"
import data from "../Img/waste_data.png"
import leader from "../Img/waste_leader.png"
import homepic from "../Img/Homepic.jpeg"
import Footer from "../Components/footer"

const Crediblemind = () => {
    return (
        <div>
            
            <h1 className="title-head"> Jed Foundation Hub </h1>
            <h1 className="main-header"> Problem </h1>
            <h2 className="second-header"> Overview </h2>
            <p className = "text"> 9% of U.S. college students experience a mental illness each year. The JED Foundation’s mission is focused on suicide prevention, campus safety, and overall mental health improvement to higher education. JED Foundation works with colleges all over US with the JED Strategic Plan, a methodological approach to tackle suicide prevention in these colleges. The Campus Advisors in JED Foundation play the primary role of overseeing the progress of JED’s strategic plan at these campuses but lack a centralized system to track their workflow & progress of the schools. 
            </p>

            <p className = "text"> I lead a team of six talented individuals to work with CredibleMind and JED Foundation to tackle this design problem 
            </p>
            
            <h1 className="main-header"> Findings </h1>
            <p className = "text"> Since the scope of the problem statement was broad, the team concluded that the initial user research should be spent gaining information about the role of JED Foundation, the scope of work for Campus Advisors, and goals of all the stakeholders involved in the system. We were fortunate that JED Foundation and CredibleMind has already conducted user interviews and kept their recordings for us to view. While this saved us some work, it also meant that we would not be able to ask questions specific to our user research. 
            </p>

            <p className = "text"> Nonetheless, the team prepared a user interview script, and used the script as a basis to extract information catered to our needs from the prerecorded interviews. Since we collected a broad range of information from the initial user research, we used a modified version of affinity mapping to help us understand the information we had gathered. We started with categorizing information in the following manner: 
            </p>

            <ul>
                <li className = "text">Tasks conducted by Campus Advisors</li>
                <li className = "text"> What they like about their existing workflow.</li>
                <li className = "text">Pain points and challenges they face completing tasks</li>
            </ul>
            <br/>

            <h2 className="second-header"> Affinity Mapping </h2>
            <p className = "text"> Using the data from user interviews, we grouped together insights to identify recurring themes and points.
            </p>
            <img  src={home} alt="Home" width = "9%" style= {{paddingTop:"20px", paddingBottom: "30px"}} />

            <h2 className="second-header"> Insight Generation </h2>

            <p className = "text"> <b> 1. Key Tasks  </b> </p>
            <ul>
                <li className = "text">We found that the Campus Advisors’ main roles were tracking their schools progress, communicating with individual Campus Task Force Advisors, and handling administrative tasks such as account creation and report generation.  
                </li>
            </ul>

            <p className = "text"> <b> 2. What Works  </b> </p>
            <ul>
                <li className = "text">Campus Advisors enjoyed the flexibility of using their own productivity tools, using Google Suite for collaboration and accessibility of Salesforce to extract information. 
                </li>
            </ul>

            <p className = "text"> <b> 3. Pain Points  </b> </p>
            <ul>
                <li className = "text"> Lack of Integration (of different databases) 
                </li>
                <li className = "text"> Difficulty to coordinate with stakeholders 
                </li>
                <li className = "text"> Lack of Search Function 
                </li>
                <li className = "text"> Lack of Personalization 
                </li>
                <li className = "text"> Poor Data Visualization 
                </li>
                <li className = "text"> Repetitive Tasks
                </li>
            </ul>

            <h2 className="second-header"> Evaluation </h2>
            
            <p className = "text"> <b> Information Tracking </b>
            </p>
            <p className = "text"> Campus Advisors need a away to track daily tasks, categorize schools based on strategic plan progress, and better integration of all the external databases they use. 
            </p>
            <p className = "text"> <b> Data Visualization </b>
            </p>
            <p className = "text"> Campus Advisors require improved accessibility to metadata of schools, ability to pull latest school report progress and quick access to school’s status on different components of the strategic plan. 
            </p>
            <p className = "text"> <b> Report Automation </b>
            </p>
            <p className = "text"> Since many of the reports generated by Campus Advisors use a similar language, Campus Advisor must be able to automate a large part of the report generation. 
            </p>
            <p className = "text"> <b> Personalization </b>
            </p>
            <p className = "text"> Since Campus Advisors mentioned flexibility as a good attribute of the current workflow the platform needs to have the ability to reorganize features based on user preference, and have the ability to pin and favourite specific tools of the platform. 
            </p>
            <p className = "text"> <b> Communication </b>
            </p>
            <p className = "text"> Improve accessibility to contact representatives from schools, and provide information on recent correspondence with task force managers and other school representatives. 
            </p>
            <p className = "text"> <b> Resource Search </b>
            </p>
            <p className = "text"> Search bar to increase accessiblity to tools, a new resource page organized by categories based on playbook.
            </p>
            <h1 className="main-header"> Our Initial Solution </h1>
            <h2 className="second-header"> Low-Fi Prototypes </h2>
            <p className = "text"> Based on what we had learnt from the user interviews, we came up with low fidelity prototypes of what our final product could potentially look like.
            </p>

            <p className = "text"> Task Bar
            </p>
            <p className = "text"> School Summary
            </p>
            <p className = "text"> Resource Search 
            </p>
            <p className = "text"> Report Automation
            </p>

            <h2 className="second-header"> Initial Feedback </h2>
            <p className = "text"> The main dashboard is the first thing campus advisors will land on. The task bar and the school summaries should reside there for easy access.  
            </p>
            <p className = "text"> <b> School Dashboard Architecture </b>
            </p>
            <p className = "text"> We initially made the school summary a card view, but changed it to a bar view to account  for the shape of the kan-ban style task bar. This  affected the way we visualized each school’s progress within the strategic plan.  
            </p>
            <p className = "text"> Information from initial school summary cards could be further expanded in an individual dashboard for each school. 
            </p>
            <p className = "text"> <b> Main Dashboard Architecture </b>
            </p>

            <h2 className="second-header"> Mid-Fi Prototypes </h2>
            <p className = "text"> Using the collective team feedback and the low-fidelity sketches of what the information architecture could look like, we mocked-up mid-fidelity wireframes in Figma to further visualize our ideas.
            </p>
            <p className = "text"> <b> Main Dashboard </b>
            </p>
            <p className = "text"> <b> School Specific Dashboard </b>
            </p>
            <p className = "text"> <b> Resource Database </b>
            </p>
            <p className = "text"> <b> Report Automation </b>
            </p>

            <h1 className="main-header"> Feedback and Iterations</h1>
            <h2 className="second-header"> First User-Testing </h2>
            <p className = "text"> After forming a mid-fi prototype based on our initial understanding of Campus Advisors’ pain points and desired solution, we conducted a round of user testing to gather feedback for our current mid-fi mockup. Here are some key findings:
            </p>

            <p className = "text"> <b> A Campus Advisor's Role </b>
            </p>
            <p className = "text">  Our mid-fi prototypes enabled us to get a deeper understanding of the needs of Campus Advisors and the nuances of their daily tasks.
            </p>
            <p className = "text"> <b> Establishing "Flow" </b>
            </p>
            <p className = "text"> Testing each feature/page with our users helped us understand overall architecture that the campus advisor’s wanted to see from our iterations.
            </p>
            <p className = "text"> <b> A Hub For Each Advisor</b>
            </p>
            <p className = "text">  In this round of user testing, the campus advisors emphasized a need to personalize what they see within their dashboards. This meant being able to remove/add tasks or schools as they see fit.
            </p>

            <h2 className="second-header"> Incorporating Feedback </h2>
            <p className = "text"> <b> Dashboard Iterations </b>
            </p>
            <p className = "text">  Considering the usefulness of a full kan-ban board 
            </p>
            <p className = "text">  B. Visualizations of progress. User feedback suggested using the ‘Phase’ a school is in as a metric of progress.
            </p>
            <p className = "text">  C. Wording is important! ‘To-do’ vs. ‘Urgent Tasks’ or ‘Pull Recent Report’ vs. ‘Generate Report’ illicit different implications for the function of each feature
            </p>

            <p className = "text"> <b> School Page Iterations </b>
            </p>
            <p className = "text">  Domains for each part of the phase
            </p>
            <p className = "text">  progress measured by completion of tasks per domain 
            </p>
            <p className = "text">  scoring system of tasks
            </p>

            <p className = "text">  After finishing up the second round of mid-fidelity mock-ups, we checked in with our advisor to get final feedback and insights on what is intuitive and what is still missing from our design. We used this information to finalize these mid-fidelity prototypes into the final product.
            </p>

            <h1 className="main-header"> Final Wireframes </h1>
            <p className = "text">  After finishing up the second round of mid-fidelity mock-ups, we checked in with our advisor to get final feedback and insights on what is intuitive and what is still missing from our design. We used this information to finalize these mid-fidelity prototypes into the final product.
            </p>
            <h2 className="second-header"> Dashboard </h2>
            <p className = "text">  Features: integration of tasks from other apps organized by phase, only urgent tasks displayed on dashboard, tags to organize by school, task etc, ability to personalize to make it most useful for the user.
            </p>

            <h2 className="second-header"> School Page </h2>
            <p className = "text">  Features: Overview of current phase school is in, ability to pull up most recent report for current data on school progress, quick access to important contacts, visualization of progress within strategic plan AND current phase.
            </p>

            <h2 className="second-header"> Playbook Page </h2>
            <p className = "text">  Features: Filters based on custom categories, quick resource selection with integrated email functionality, ability to search via a search bar using keywords

            </p>

            <h2 className="second-header"> Report Automation Page </h2>
            <p className = "text"> Features: Pulling and compiling data while allowing the user to edit or make changes as necessary.
            </p>

            <h2 className="second-header"> Style Guide </h2>
            <p className = "text"> Our color palette was inspired by our goal to elicit warmth, energy, and confidence with the orange-yellow color as well as calmness, groundedness, and motivation through the purple-bluish color. Our process stemmed from blue-toned and calming colors associated with the mental health space while maintaining a professional, modern look of a management portal.
            </p>

            <h1 className="main-header"> Reflections</h1>
            <p className = "text"> Its been a great experience working with JED Foundation and CredibleMind to create a Hub for Campus Advisors to coordinate with schools to implement JED’s Strategic Plan for Suicide Prevention. We learnt the importance of designing ‘with’ the end users rather than designing ‘for’ the end users. We look forward to seeing the Hub come into fruition. 
            </p>
            <br/>












        







            <Footer> </Footer>


            
        
        </div>
    )
}

export default Crediblemind