import React,{useEffect,useState} from 'react'
import splashCSS from "./splash.module.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function Splash() {
  const navigate = useNavigate();
  const [progress, setprogress] = useState(0); 
  useEffect(() => {
    const id = setInterval(() => setprogress((progress) => progress + 1), 40);

    return () => {
      clearInterval(id);
      console.log(progress);
      if(progress>=100){
        navigate('/login');
      }
    };
  }, [progress]); 
  return (
    <div>
      <div className={splashCSS.navBg}>
    <Container >
        <Row className={splashCSS.navBg}>
    <Navbar collapseOnSelect expand="lg"  >
      <Navbar.Brand href="#home">
      <img  src="../assets/web/logo.png" alt="aerodynamic"  />
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={splashCSS.customNavIcon}/>
      <Navbar.Collapse id="responsive-navbar-nav" className={splashCSS.navbarNav}>
        <Nav className="flex-grow-1 ">
        <Link to="/"  style={{color:'#ffffff',textDecoration:'none'}}>
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Home</Nav.Link></Link>
          <Link to="/#sectionDownload"  style={{color:'#ffffff',textDecoration:'none'}}>
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Download</Nav.Link></Link>
          <Nav.Link  style={{color:'#ffffff'}}>
          <Link to="/Contact"  style={{color:'#ffffff',textDecoration:'none'}}> Contact us</Link>
           </Nav.Link>
        </Nav>
        <Nav className="d-flex">
            
            <Button variant="success" className={splashCSS.btnJoin}>
            <Link to="/Splash"  style={{color:'#ffffff',textDecoration:'none'}}>
            Play Web Game!
            </Link>
            </Button>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    
       
        </Row>
    </Container>
    
    </div>
    <Row style={{padding:'0px',margin:'0px'}}>
        <img className={splashCSS.graphics_image} src="./assets/topLine.png" alt="aerodynamic"/>
    </Row>
      <div className={splashCSS.container}>
      
       <div className={splashCSS.loading}>
       <div className={splashCSS.loadBar}>
       <ProgressBar animated now={progress} className={splashCSS.progressStyle} /> 
       </div>
       <img className={splashCSS.loadingImg} src="./assets/splash_back.png" alt="aerodynamic"
       style={{height:'400px'}}/>
       
       </div>
       <div>
       <img className={splashCSS.bottom_graphics} src="./assets/bottomLine.png" alt="aerodynamic"/>
       </div>
     
      </div>
    </div>
  )
}

export default Splash