import React, { useEffect }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeCSS from "./home.module.css";
import { Link } from "react-router-dom"




function Contact() {
   
   
  return (
    <div>
    <div className={homeCSS.navBg}>
    <Container >
        <Row className={homeCSS.navBg}>
    <Navbar collapseOnSelect expand="lg"  >
      <Navbar.Brand href="#home">
      <img  src="../assets/web/logo.png" alt="aerodynamic"  />
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={homeCSS.customNavIcon}/>
      <Navbar.Collapse id="responsive-navbar-nav" className={homeCSS.navbarNav}>
        <Nav className="flex-grow-1 ">
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >
          <Link to="/"  style={{color:'#ffffff',textDecoration:'none'}}>
            Home</Link></Nav.Link>
          <Nav.Link href="#Download" style={{color:'#ffffff'}}>Download</Nav.Link>
          <Nav.Link  style={{color:'#ffffff'}}>
          <Link to="/Contact"  style={{color:'#ffffff',textDecoration:'none'}}> Contact us</Link>
           </Nav.Link>
        </Nav>
        <Nav className="d-flex">
            
            <Button variant="success" className={homeCSS.btnJoin}>
            <Link to="/Splash"  style={{color:'#ffffff',textDecoration:'none'}}>
            Join Us
            </Link>
                </Button>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    
       
        </Row>
    </Container>
    
    </div>
    <div style={{textAlign:'left'}}>
     <Row style={{padding:'0px',margin:'0px'}}>
        <img className={homeCSS.graphics_image} src="./assets/topLine.png" alt="aerodynamic"/>
    </Row>
     <Container>
        <Row>
        <Col xs={4}>
        </Col>
        </Row>
     </Container>

    
     

     
     <Container className={homeCSS.gameDownload}>
        <Row>
            <Col xs={12} style={{textAlign:'center'}}>
                <div className={homeCSS.gameDownDivTitle}>
                <div className={homeCSS.title}>Aerodynamic</div>
                <div className={homeCSS.Contitle}>Contact Us</div>
                </div>
                <div className={homeCSS.gameDownContactDiv}>
                   <div className={homeCSS.contactDiv}>
                   <img  src="./assets/web/tel.png" alt="aerodynamic" className={homeCSS.icon}/>
                   &nbsp;&nbsp;&nbsp;<span style={{color:'#ffffff'}}>619-720-2532</span>
                   </div>
                   <div className={homeCSS.contactDiv}>
                   <img  src="./assets/web/msg.png" alt="aerodynamic" className={homeCSS.icon}/>
                   &nbsp;&nbsp;&nbsp;<span style={{color:'#ffffff'}}>aerodynamiccasinollc@gmail.com</span>
                   </div>
                </div>
                <img className={homeCSS.buttomGraohicIcon} src="./assets/web/pngwing.png" alt="aerodynamic"/>
                <img className={homeCSS.buttomGraohicGirl} src="./assets/web/girl_img.png" alt="aerodynamic"/>
            </Col>
        </Row>
     </Container>
    
    </div>
    <Row style={{padding:'0px',margin:'0px'}}>
    
        <img className={homeCSS.graphics_image} src="./assets/bottomLine.png" alt="aerodynamic"/>
    </Row>
    <Container>
    <Row>
       <Col xs={12} style={{textAlign:'center',color:'#ffffff'}}>
          <div className={homeCSS.footerDiv}>Copyright @ Aerodynamic LLC 2023. All Right Reserved</div>
        </Col>
    </Row>
    </Container>
    </div>
   
  )
}

export default Contact