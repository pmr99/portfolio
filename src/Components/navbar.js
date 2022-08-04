import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/home';
import Film from '../pages/film';
import Enfactum from '../pages/enfactum';
import Wasteless from '../pages/wasteless';
import Gleanbee from '../pages/gleanbee';


const Navibar = () => {
  return (
    <Router>
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Pradeep Mani Rathnam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/">Fun Projects</Nav.Link>
            <Nav.Link as={Link} to="/Film">Film</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/film" element = {<Film/>}/>
            <Route path="/enfactum" element = {<Enfactum/>}/>
            <Route path="/wasteless" element = {<Wasteless/>}/>
            <Route path = "/gleanbee" element = {<Gleanbee/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default Navibar;