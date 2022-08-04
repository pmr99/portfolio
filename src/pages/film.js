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
            <h2 className = "film-subheader"> "Cake By The Ocean" </h2>
            <h3 className = "film-role"> Director, Writer </h3>
            <img className = "main-pic" src={CakePoster} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic left" src={Cake_2} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic right" src={Cake_5} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic left"src={Cake_4} alt="Cake By The Ocean" width = "1000px"/>
            <img className = "secondary-pic right" src={Cake_3} alt="Cake By The Ocean" width = "1000px"/>
            <Footer> </Footer>
        </div>
    )
}

export default Film