import CakePoster from "../Img/CakePoster.png"
import Cake_2 from "../Img/cake_2.png"
import Cake_3 from "../Img/cake_3.png"
import Cake_4 from "../Img/cake_4.png"
import Cake_5 from "../Img/cake_5.png"
import Chance_1 from "../Img/chance_1.png"
import Chance_2 from "../Img/chance_2.png"
import Chance_3 from "../Img/chance_3.png"
import Chance_4 from "../Img/chance_4.png"
import Chance_5 from "../Img/chance_5.png"
import Chance_6 from "../Img/chance_6.png"
import Chance_7 from "../Img/chance_7.png"
import Chance_8 from "../Img/chance_8.png"
import Chance_9 from "../Img/chance_9.png"
import Potato1 from "../Img/potato1.png"
import Potato2 from "../Img/potato2.png"
import Potato3 from "../Img/potato3.png"
import Potato4 from "../Img/potato4.png"
import Potato5 from "../Img/potato5.png"
import Potato6 from "../Img/potato6.png"
import Potato7 from "../Img/potato7.png"
import Potato8 from "../Img/potato8.png"
import Potato9 from "../Img/potato9.png"
import Potato10 from "../Img/potato10.png"
import Camp1 from "../Img/camp1.png"
import Camp2 from "../Img/camp2.png"
import Camp3 from "../Img/camp3.png"
import Camp4 from "../Img/camp5.png"
import Camp6 from "../Img/camp6.png"
import Camp7 from "../Img/camp7.png"
import Camp8 from "../Img/camp8.png"
import Camp5 from "../Img/camp5.png"
import { PiFilmSlateBold } from "react-icons/pi";



import "./film.css"
import Footer from "../Components/footer"
const campanileDescription = "Eighteen-year-old Lara is overwhelmed with emotions as she receives her Berkeley acceptance letter. Like most of us, she goes down the rabbit hole of “Day in a Life” Youtube and falls into a trance of her future college journey at Berkeley."
const secondChanceDescription = "“A Second Chance” depicts how the life of a working mother changed when she had to go through kidney dialysis and eventually receive a kidney transplant from her husband. This short film won “Potpourri of Vignettes”, a short film competition organised by National University Centre for Organ Transplantation (NUCOT)."
const vermilionDescription = "An amateur play director is desperate to impress their older sibling with their first show, but they quickly learn that theater is not for everybody."
const potatoManDescription = "In 'Mr. Potato Man', a high school teacher navigates the humor and challenges of online teaching, forming unexpected connections with students who rally to support him beyond the virtual classroom. This film won first place for Pitch It! 2022, organised by NUS’s CNM Society and G.H.Y Culture & Media."

const Film = () => {
    return (
        <div className = "page">
            <PiFilmSlateBold size = "sm" style = {{color: "white", height: "100px", paddingTop: "30px"}}/>
            <h2 className = "film-subheader"> "Workday Marketing Video" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <p className = "text" style = {{color: "white", padding: "20px"}}> COMING SOON </p>


            <h2 className = "film-subheader"> "Campanile's The Limit" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <p className = "text" style = {{color: "white", padding: "20px"}}> {campanileDescription} </p>
            <div class="embed-responsive embed-responsive">
                <iframe class="embed-responsive-item" style = {{width: "100%", height: "700px", padding: "10px"}} src="https://www.youtube.com/embed/pTzNH-Z_ngI?si=H2K_Bvq6AKscgOp1" allowFullScreen></iframe>

            </div>
            <img className = "secondary-pic left" src={Camp1} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic right" src={Camp2} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic left" src={Camp3} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic right" src={Camp4} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic left" src={Camp5} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic right" src={Camp6} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic left " src={Camp7} alt="Campanile's the Limit" width = "1000px"/>
            <img className = "secondary-pic right" src={Camp8} alt="Campanile's the Limit" width = "1000px"/>

            <h2 className = "film-subheader"> "Second Chance" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <p className = "text" style = {{color: "white", padding: "20px"}}> {secondChanceDescription} </p>
            <img className = "main-pic" src={Chance_1} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_2} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_3} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_4} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_5} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_8} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_9} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left " src={Chance_6} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_7} alt="Second Chance" width = "1000px"/>
            <div class="embed-responsive embed-responsive">
                <iframe class="embed-responsive-item" style = {{width: "100%", height: "700px", padding: "10px"}} src="https://www.youtube.com/embed/TvFBRWt55l0?si=imCo_hZ0A7MIW6wS" allowFullScreen></iframe>

            </div>
            <h2 className = "film-subheader"> "VERMILION" </h2>
            <h3 className = "film-role"> Writer </h3>
            <p className = "text" style = {{color: "white", padding: "20px"}}> {vermilionDescription} </p>
            <div class="embed-responsive embed-responsive">
                <iframe class="embed-responsive-item" style = {{width: "100%", height: "700px", padding: "10px"}} src="https://www.youtube.com/embed/E--PMPjACzY?si=IK6PcX80fmA5_kZ0" allowFullScreen></iframe>

            </div>
            <h2 className = "film-subheader"> "Mr Potato Man" </h2>
            <h3 className = "film-role"> Director, Writer </h3> 
            <p className = "text" style = {{color: "white", padding: "20px"}}> {potatoManDescription} </p>  
            <img className = "secondary-pic left" src={Potato1} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Potato2} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Potato3} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Potato4} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Potato5} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Potato6} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left " src={Potato7} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Potato8} alt="Second Chance" width = "1000px"/> 
            <img className = "secondary-pic left " src={Potato9} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Potato10} alt="Second Chance" width = "1000px"/> 
            <div class="embed-responsive embed-responsive">
                <iframe class="embed-responsive-item" style = {{width: "100%", height: "700px", padding: "10px"}} src="https://www.youtube.com/embed/IpYPvPlXsMs?si=HufwA-SfIBsu9kQH" allowFullScreen></iframe>

            </div>
            <h2 className = "film-subheader"> "Cake By The Ocean" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <img className = "main-pic" src={CakePoster} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic left" src={Cake_2} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic right" src={Cake_5} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic left"src={Cake_4} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic right" src={Cake_3} alt="Cake By The Ocean" width = "1000px"/>
            <br/>
            <br/>
            
            <Footer> </Footer>
        </div>
    )
}

export default Film