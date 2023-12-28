import { MDBFooter } from 'mdb-react-ui-kit';
import github from "../Img/github.png"
import linkedin from "../Img/linkedin.svg"
import email from "../Img/email.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return(
        <div style= {{paddingLeft: "min(550px, 30%)", paddingRight: "min(550px, 30%)", backgroundColor: "#212529", position: "static", bottom: "0", width: "100%"}}>
            <Row className="justify-content-md-center">
                <Col > 
                    <ContactIcon img = {email} link = "mailto:pradeep991004@gmail.com"/>
                </Col>

                <Col > 
                <ContactIcon img = {linkedin} link = "https://www.linkedin.com/in/pradeep-mani-rathnam/"/>
                </Col>

                <Col > 
                <ContactIcon img = {github} link = "https://github.com/pmr99"/>
                </Col>
                
            </Row >
            </div>


    )
}


const ContactIcon = ({link, img}) => {
    return(
        <div className = "footer" style = {{width : "6%", minWidth : "80px", margin: "auto", paddingTop: "10%", paddingBottom: "10%"}}>
            <a href = {link}>
            <img src = {img} style = {{width: "60%", minWidth :"40px"}}/>
            </a>
        </div>

    )
}

export default Footer