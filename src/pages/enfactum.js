import "./proj.css"
import planet1 from "../Img/planet1.png"
import planet2 from "../Img/planet2.png"
import planet3 from "../Img/planet3.png"
import planet4 from "../Img/planet4.png"
import planet5 from "../Img/planet5.png"
import planet6 from "../Img/planet6.png"
import planet7 from "../Img/planet7.png"
import planet8 from "../Img/planet8.png"
import planet9 from "../Img/planet9.png"
import low1 from "../Img/low1.png"
import low2 from "../Img/low2.png"
import low3 from "../Img/low3.png"
import mid1 from "../Img/mid1.png"
import mid2 from "../Img/mid2.png"
import mid3 from "../Img/mid3.png"
import mid4 from "../Img/mid4.png"
import mid5 from "../Img/mid5.png"
import mid6 from "../Img/mid6.png"
import mid7 from "../Img/mid7.png"
import hi1 from "../Img/hi1.png"
import hi2 from "../Img/hi2.png"
import hi3 from "../Img/hi3.png"
import hi4 from "../Img/hi4.png"
import hi5 from "../Img/hi5.png"
import hi6 from "../Img/hi6.png"
import hi7 from "../Img/hi7.png"
import hi8 from "../Img/hi8.png"
import hi9 from "../Img/hi9.png"
import hi10 from "../Img/hi10.png"
import hi11 from "../Img/hi11.png"
import sitemap from "../Img/sitemap.png"
import Footer from "../Components/footer"

const Enfactum = () => {
    return (
        <div>
            <h1 className="title-head">Enfactum </h1>



            <h1 className="main-header"> Problem </h1>

            <h2 className="second-header"> Overview </h2>
            <p className = "text"> Enfactum is a Singapore based consulting group with expertise that provide consulting and marketing services to enable companies to compete better in the Asia-Pacific market place. Given that the company has pivoted its direction over the past few years, the company needed to revamp its website to reflect its change. </p>
            
            <h2 className="second-header"> Pain Points </h2>
            <ul>
                <li className = "text">Company primarily relies on the personal network for clients</li>
                <li className = "text">Current website does not help broadcast the company’s services for potential new clients</li>
                <li className = "text">Current website does not align with company’s branding and vision</li>
            </ul>

            <p className = "text"> As a marketing agency, the company wanted a website that is creative, unique, easy to navigate, and appealing to potential clients. </p>

            <h1 className="main-header"> My Approach </h1>
            <h2 className="second-header"> Site Map </h2>
            <p className = "text"> Interviewing company owner, I gained a deeper understanding of the company’s vision and goals. I noted all the information that had to be featured on the website and then categorised them in a navigable way as shown in the first draft of the site map below.  </p>
            <div className = "bigplanet_overall_container"> 
                <div className = "fi_container">
                    <img src = {sitemap} height = "400px" style= {{borderStyle: "solid"}}></img>
                </div>
            </div>

            
            <h2 className="second-header"> First Attempt </h2>
            <p className = "text"> Excited to embark on this project, I immediately sketched out a rough outline of the website. 
            </p>
            

            <div className = "bigplanet_overall_container"> 
                <div className = "fi_container">
                    <img src = {low1} height = "400px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {low2} height = "400px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {low3} height = "480px" style= {{borderStyle: "solid"}}></img>
                </div>

            </div>
            <br/>
            <p className = "text">However, this looked like a generic website, it did not differentiate Enfactum from other website nor was it uniquely representative of what Enfactum is. </p>
            <p className = "text">So I decided to scrap it.  </p>
            <h2 className="second-header"> Mid-Fi </h2>
            <p className = "text"> I took a two pronged approach when redesigning the website, understanding the marketing services industry and the way other similar company’s approach their website, and gaining an in depth understanding of Enfactum is and how it should be represented in a website.  </p>
            <p className = "text"> I felt a space theme would fit Enfactum perfectly. Enfactum is a marketing service provider that takes its clients to greater heights, leveraging on clients’ owned, earned, and paid marketing. Symbolically, Enfactum is like a space ship that guides their clients to their respective goals. Using this as a starting point, I sketched out different low-fi prototypes, and developed the following mid-fi to get feedback from the company. </p>
            <div className = "bigplanet_overall_container"> 
                <div className = "fi_container">
                    <img src = {mid1} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid2} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid3} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid4} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid5} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid6} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {mid7} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

            </div>
            
            <h2 className="second-header"> Preparation for Hi-Fi </h2>
            <p className = "text"> Using Illustrator and Figma, I then came up with the following illustrations for the website. 
            </p>
            <div className = "bigplanet_overall_container"> 
                <div className = "bigplanet_container">
                    <img src = {planet1} height = "250px"></img>
                </div>

                <div className = "bigplanet_container">
                    <img src = {planet2} height = "250px"></img>
                </div>

                <div className = "bigplanet_container">
                    <img src = {planet3} height = "250px"></img>
                </div>

            </div>

            <div className = "bigplanet_overall_container"> 
                <div className = "bigplanet_container">
                    <img src = {planet4} height = "205px"></img>
                </div>

                <div className = "bigplanet_container">
                    <img src = {planet5} height = "200px"></img>
                </div>

                <div className = "bigplanet_container">
                    <img src = {planet6} height = "200px"></img>
                </div>
                <div className = "bigplanet_container">
                    <img src = {planet7} height = "200px"></img>
                </div>
            </div>

            <div className = "bigplanet_overall_container"> 
                <div className = "bigplanet_container">
                    <img src = {planet8} height = "400px"></img>
                </div>

                <div className = "bigplanet_container">
                    <img src = {planet9} height = "400px"></img>
                </div>
            </div>


            
      

            <h1 className="main-header"> Outcome </h1>
            <h2 className = "second-header"> Final WireFrames </h2>
            <div className = "bigplanet_overall_container"> 
                <div className = "fi_container">
                    <img src = {hi1} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi2} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi3} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi4} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi5} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi6} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi7} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi8} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi9} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi10} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>

                <div className = "fi_container">
                    <img src = {hi11} width = "350px" style= {{borderStyle: "solid"}}></img>
                </div>
                

            </div>

            <p className = "text" style = {{fontSize: "small", textAlign: "center"}}> *Website content has been largely excluded in this version</p>
            <Footer> </Footer>
        </div>
    )
}

export default Enfactum