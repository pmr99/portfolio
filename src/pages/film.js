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



import "./film.css"
import Footer from "../Components/footer"

const Film = () => {
    return (
        <div className = "page">
            <h2 className = "film-subheader"> "Second Chance" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <img className = "main-pic" src={Chance_1} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_2} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_3} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_4} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_5} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left" src={Chance_8} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_9} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic left " src={Chance_6} alt="Second Chance" width = "1000px"/>
            <img className = "secondary-pic right" src={Chance_7} alt="Second Chance" width = "1000px"/>
            <h2 className = "film-subheader"> "Mr Potato Head" </h2>
            <h3 className = "film-role"> Director, Writer </h3>   
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