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
import Rumifico from '../pages/rumifico';
import Crediblemind from '../pages/crediblemind';
import Directorai from '../pages/directorai';
import Design from '../pages/design';
import Code from '../pages/code';
import Imagify from '../pages/imagify';
import Pair from '../pages/pair'


const Navibar = () => {
  return (
    <Router>
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style = {{color: "white"}} as={Link} to="/">Pradeep Mani Rathnam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/design">Design</Nav.Link>
            <Nav.Link as={Link} to="/code">Code</Nav.Link>
            <Nav.Link as={Link} to="/Film">Film</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/design" element = {<Design/>}/>
            <Route path = "/code" element = {<Code/>}/>
            <Route path = "/film" element = {<Film/>}/>
            <Route path = "/design/enfactum" element = {<Enfactum/>}/>
            <Route path = "/code/wasteless" element = {<Wasteless/>}/>
            <Route path = "/design/gleanbee" element = {<Gleanbee/>}/>
            <Route path = "/code/rumifico" element = {<Rumifico/>}/>
            <Route path = "/code/directorai" element = {<Directorai/>}/>
            <Route path = "/design/crediblemind" element = {<Crediblemind/>}/>
            <Route path = "/code/imagify" element = {<Imagify/>}/>
            <Route path = "/code/pair" element = {<Pair/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default Navibar;